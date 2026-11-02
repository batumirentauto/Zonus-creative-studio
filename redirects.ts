import type { NextConfig } from 'next'
import septicSlugs from './src/septic-slugs.json'

export const redirects: NextConfig['redirects'] = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header' as const,
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  const wildcardSeptic = {
    source: '/septic/:slug*',
    destination: 'https://septic.up.railway.app/:slug*',
    permanent: false,
  }

  const septicRedirects = (septicSlugs as string[]).map((slug) => ({
    source: `/${slug}`,
    destination: `https://septic.up.railway.app/${slug}`,
    permanent: false,
  }))

  const septicSubpathRedirects = (septicSlugs as string[]).map((slug) => ({
    source: `/${slug}/:subpath*`,
    destination: `https://septic.up.railway.app/${slug}/:subpath*`,
    permanent: false,
  }))

  return [internetExplorerRedirect, wildcardSeptic, ...septicSubpathRedirects, ...septicRedirects]
}
