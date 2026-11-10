import type { NextConfig } from 'next'
import septicSlugs from './src/septic-slugs.json'
import fencingSlugs from './src/fencing-slugs.json'

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

  // AU Fencing Showcase
  const rootFencing = {
    source: '/fencing',
    destination: 'https://au-zabory-production.up.railway.app/',
    permanent: false,
  }

  const rootFencingSlash = {
    source: '/fencing/',
    destination: 'https://au-zabory-production.up.railway.app/',
    permanent: false,
  }

  const wildcardFencing = {
    source: '/fencing/:slug*',
    destination: 'https://au-zabory-production.up.railway.app/:slug*',
    permanent: false,
  }

  const fencingRedirects = (fencingSlugs as string[]).map((slug) => ({
    source: `/${slug}`,
    destination: `https://au-zabory-production.up.railway.app/sites/${slug}/`,
    permanent: false,
  }))

  const fencingSubpathRedirects = (fencingSlugs as string[]).map((slug) => ({
    source: `/${slug}/:subpath*`,
    destination: `https://au-zabory-production.up.railway.app/sites/${slug}/:subpath*`,
    permanent: false,
  }))

  // Septic Pumping Showcase
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

  return [
    internetExplorerRedirect,
    rootFencing,
    rootFencingSlash,
    wildcardFencing,
    ...fencingSubpathRedirects,
    ...fencingRedirects,
    wildcardSeptic,
    ...septicSubpathRedirects,
    ...septicRedirects,
  ]
}
