FROM node:22-alpine AS base

# Install libc6-compat for alpine compatibility
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm directly without relying on corepack
RUN npm install -g pnpm@latest

# Copy package manifests and lockfiles
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
RUN pnpm i --frozen-lockfile

# Rebuild the source code
FROM base AS builder
WORKDIR /app
RUN npm install -g pnpm@latest
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --chown=nextjs:nodejs server-entrypoint.cjs ./

USER nextjs

EXPOSE 3000
EXPOSE 8080

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server-entrypoint.cjs"]
