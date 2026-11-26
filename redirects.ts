import type { NextConfig } from 'next'
import septicSlugs from './src/septic-slugs.json'
import fencingSlugs from './src/fencing-slugs.json'
import treeSlugs from './src/tree-slugs.json'

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

  const callRedirect = {
    source: '/call',
    destination: 'https://septic.up.railway.app/call',
    permanent: false,
  }

  const callSubpathRedirect = {
    source: '/call/:path*',
    destination: 'https://septic.up.railway.app/call/:path*',
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

  // Tree Removal Showcase
  const wildcardTree = {
    source: '/tree/:slug*',
    destination: 'https://tree-portal.up.railway.app/:slug*',
    permanent: false,
  }

  const treeRedirects = (treeSlugs as string[]).map((slug) => ({
    source: `/${slug}`,
    destination: `https://tree-portal.up.railway.app/${slug}`,
    permanent: false,
  }))

  const treeSubpathRedirects = (treeSlugs as string[]).map((slug) => ({
    source: `/${slug}/:subpath*`,
    destination: `https://tree-portal.up.railway.app/${slug}/:subpath*`,
    permanent: false,
  }))

  // Mediator Showcases (15 US Mediators)
  const mediatorRedirectsList = [
    { source: "/tell", destination: "https://mediators-production.up.railway.app/", permanent: false },
    { source: "/weinberg", destination: "https://mediators-production.up.railway.app/weinberg/", permanent: false },
    { source: "/canter", destination: "https://mediators-production.up.railway.app/canter/", permanent: false },
    { source: "/kurtzman", destination: "https://mediators-production.up.railway.app/kurtzman/", permanent: false },
    { source: "/farnell", destination: "https://mediators-production.up.railway.app/farnell/", permanent: false },
    { source: "/rayburn", destination: "https://mediators-production.up.railway.app/rayburn/", permanent: false },
    { source: "/kottkamp", destination: "https://mediators-production.up.railway.app/kottkamp/", permanent: false },
    { source: "/mcmullan", destination: "https://mediators-production.up.railway.app/mcmullan/", permanent: false },
    { source: "/eckhardt", destination: "https://mediators-production.up.railway.app/eckhardt/", permanent: false },
    { source: "/patterson", destination: "https://mediators-production.up.railway.app/patterson/", permanent: false },
    { source: "/gibson", destination: "https://mediators-production.up.railway.app/gibson/", permanent: false },
    { source: "/rusch", destination: "https://mediators-production.up.railway.app/rusch/", permanent: false },
    { source: "/raines", destination: "https://mediators-production.up.railway.app/raines/", permanent: false },
    { source: "/cipolla", destination: "https://mediators-production.up.railway.app/cipolla/", permanent: false },
    { source: "/boomer", destination: "https://mediators-production.up.railway.app/boomer/", permanent: false },
  ]

  // Meah Rothman Tell, Esq. - Mediator Showcase
  const meahTellRedirect = {
    source: '/tell',
    destination: 'https://mediators-production.up.railway.app/',
    permanent: false,
  }

  const meahRedirect = {
    source: '/meah',
    destination: 'https://mediators-production.up.railway.app/',
    permanent: false,
  }

  const mediatorRedirect = {
    source: '/mediator',
    destination: 'https://mediators-production.up.railway.app/',
    permanent: false,
  }

  const mediatorsRedirect = {
    source: '/mediators',
    destination: 'https://mediators-production.up.railway.app/',
    permanent: false,
  }

  // Tatiana & Anastasia Tree Service Dialers
  const tatianaRedirect = {
    source: '/tatiana',
    destination: '/tatiana.html',
    permanent: false,
  }



  const playbookRedirect = {
    source: '/playbook',
    destination: '/playbook.pdf',
    permanent: false,
  }

  const scriptRedirect = {
    source: '/script',
    destination: '/tatiana-script.pdf',
    permanent: false,
  }

  return [
    internetExplorerRedirect,
    rootFencing,
    rootFencingSlash,
    wildcardFencing,
    ...fencingSubpathRedirects,
    ...fencingRedirects,
    wildcardSeptic,
    callRedirect,
    callSubpathRedirect,
    ...septicSubpathRedirects,
    ...septicRedirects,
    wildcardTree,
    ...treeSubpathRedirects,
    ...treeRedirects,
    ...mediatorRedirectsList,
    meahTellRedirect,
    meahRedirect,
    mediatorRedirect,
    mediatorsRedirect,
    tatianaRedirect,

    playbookRedirect,
    scriptRedirect,
  ]
}
