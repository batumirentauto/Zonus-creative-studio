# Zonus Creative Studio 🇺🇸
### High-Converting Websites For US Blue-Collar & Trade Contractors

> **Technology Standard**: Payload CMS 3.0 · Next.js 16 (App Router) · PostgreSQL · GitHub · Railway

**Zonus Creative Studio** specializes in designing and engineering high-converting, mobile-first websites and lead generation engines for American local service contractors:
- 🌲 **Tree Care & Emergency Removal Specialists** (24/7 storm dispatch, crane setups, ISA certified badges)
- 🏠 **Roofing & Restoration Contractors** (Hail damage claim guides, manufacturer warranty badges, drone inspections)
- 🚗 **Auto Businesses & Detailing Studios** (Tiered ceramic coating packages, PPF, collision photo estimates)
- 🔧 **HVAC, Plumbing & Home Service Trades** (ServiceTitan / Jobber schedule sync, Google LSA optimization)

---

## Architecture & Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **CMS & Backend**: [Payload CMS 3.0](https://payloadcms.com/) (Headless TypeScript CMS embedded into Next.js)
- **Database**: PostgreSQL (via `@payloadcms/db-postgres` and Drizzle ORM)
- **Styling**: Tailwind CSS & Lucide Icons
- **Deployment Platform**: [Railway](https://railway.app/) (Cloud containers with managed PostgreSQL)
- **Version Control**: GitHub (with automated CI/CD triggers on push)

---

## Quick Start (Local Development)

### 1. Prerequisites
- Node.js `20.x` or `22.x`
- pnpm `v9+` or `v10+` / `v12+`
- PostgreSQL database (local or remote Railway Postgres URL)

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure your `.env` contains:
```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/zonus
PAYLOAD_SECRET=your_super_secret_payload_key_here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 4. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
The admin panel is accessible at [http://localhost:3000/admin](http://localhost:3000/admin).

### 5. Build for Production
```bash
pnpm build
```

---

## Deployment to Railway (Standard Workflow)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete Zonus Creative Studio setup"
   git remote add origin https://github.com/YOUR_USERNAME/zonus-creative-studio.git
   git push -u origin main
   ```

2. **Create Project on Railway**:
   - Go to [railway.app](https://railway.app/) and click **New Project**.
   - Select **Deploy from GitHub repo** and choose your repository.

3. **Add PostgreSQL Database**:
   - In your Railway project canvas, click **+ New** -> **Database** -> **Add PostgreSQL**.
   - Railway will provision a managed PostgreSQL instance and automatically provide the `DATABASE_URL` variable.

4. **Set Environment Variables in Railway**:
   In your Next.js service settings, add the following environment variables:
   - `DATABASE_URL`: `${{Postgres.DATABASE_URL}}` (Reference the PostgreSQL service)
   - `PAYLOAD_SECRET`: A secure random string (e.g. `openssl rand -hex 32`)
   - `NEXT_PUBLIC_SERVER_URL`: `https://${{RAILWAY_PUBLIC_DOMAIN}}`
   - `PORT`: `3000`

5. **Deploy**:
   Railway will automatically run `pnpm install`, `pnpm build`, and `pnpm start` via `railway.json` and Nixpacks.

---

## Project Structure

```
├── public/                     # Static media and assets
├── railway.json                # Railway cloud deployment manifest
├── Dockerfile                  # Standalone container build definition
├── next.config.ts              # Next.js configuration (with Payload wrapper)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (frontend)/         # Public-facing studio & niche pages
│   │   │   ├── page.tsx        # Zonus homepage
│   │   │   ├── tree-service-websites/  # Tree removal niche landing page
│   │   │   ├── roofing-websites/       # Roofing contractor niche landing page
│   │   │   ├── auto-business-websites/ # Auto business niche landing page
│   │   │   ├── contact/                # Audit request & contact page
│   │   │   └── posts/                  # Case studies & contractor articles
│   │   └── (payload)/          # Payload CMS admin interface (/admin)
│   ├── blocks/                 # Modular Payload layout blocks
│   ├── collections/            # Payload Collections (Pages, Posts, Media, Users)
│   ├── components/
│   │   ├── Logo/               # Zonus Studio custom SVG branding
│   │   └── studio/             # Custom contractor sections:
│   │       ├── HeroSection.tsx         # High-impact contractor hero
│   │       ├── NichesSection.tsx       # Trade contractor niche cards
│   │       ├── RoiCalculator.tsx       # Interactive contractor ROI slider
│   │       ├── ComparisonSection.tsx   # Generic agencies vs Zonus standard
│   │       ├── CaseStudiesSection.tsx  # Real contractor results & metrics
│   │       ├── TechStackSection.tsx    # Payload/GitHub/Railway breakdown
│   │       ├── AuditFormSection.tsx    # 10-minute video audit request funnel
│   │       └── FaqSection.tsx          # Contractor FAQs
│   ├── Header/                 # Navigation bar
│   ├── Footer/                 # Contractor footer & credential links
│   └── payload.config.ts       # Central Payload CMS 3.0 configuration
```

---

## License

Proprietary © Zonus Creative Studio. All rights reserved.
