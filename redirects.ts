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

  // Mediator Showcases (20 US Mediators + Catalog & Outreach Dashboard)
  const mediatorRedirectsList = [
    { source: "/analytics", destination: "/analytics.html", permanent: false },
    { source: "/outreach", destination: "https://mediators-production.up.railway.app/outreach.html", permanent: false },
    { source: "/mediators-catalog", destination: "https://mediators-production.up.railway.app/sites/", permanent: false },
    { source: "/tell", destination: "https://mediators-production.up.railway.app/", permanent: false },
    { source: "/barton", destination: "https://mediators-production.up.railway.app/barton/", permanent: false },
    { source: "/spicola", destination: "https://mediators-production.up.railway.app/spicola/", permanent: false },
    { source: "/collins", destination: "https://mediators-production.up.railway.app/collins/", permanent: false },
    { source: "/griffin", destination: "https://mediators-production.up.railway.app/griffin/", permanent: false },
    { source: "/weinberg", destination: "https://mediators-production.up.railway.app/weinberg/", permanent: false },
    { source: "/weinberg-ru", destination: "https://mediators-production.up.railway.app/weinberg/ru.html", permanent: false },
    { source: "/canter", destination: "https://mediators-production.up.railway.app/canter/", permanent: false },
    { source: "/canter-ru", destination: "https://mediators-production.up.railway.app/canter/ru.html", permanent: false },
    { source: "/kurtzman", destination: "https://mediators-production.up.railway.app/kurtzman/", permanent: false },
    { source: "/kurtzman-ru", destination: "https://mediators-production.up.railway.app/kurtzman/ru.html", permanent: false },
    { source: "/farnell", destination: "https://mediators-production.up.railway.app/farnell/", permanent: false },
    { source: "/farnell-ru", destination: "https://mediators-production.up.railway.app/farnell/ru.html", permanent: false },
    { source: "/rayburn", destination: "https://mediators-production.up.railway.app/rayburn/", permanent: false },
    { source: "/rayburn-ru", destination: "https://mediators-production.up.railway.app/rayburn/ru.html", permanent: false },
    { source: "/kottkamp", destination: "https://mediators-production.up.railway.app/kottkamp/", permanent: false },
    { source: "/kottkamp-ru", destination: "https://mediators-production.up.railway.app/kottkamp/ru.html", permanent: false },
    { source: "/green", destination: "https://mediators-production.up.railway.app/green/", permanent: false },
    { source: "/green-ru", destination: "https://mediators-production.up.railway.app/green/ru.html", permanent: false },
    { source: "/kieffer", destination: "https://mediators-production.up.railway.app/kieffer/", permanent: false },
    { source: "/kieffer-ru", destination: "https://mediators-production.up.railway.app/kieffer/ru.html", permanent: false },
    { source: "/stein", destination: "https://mediators-production.up.railway.app/stein/", permanent: false },
    { source: "/stein-ru", destination: "https://mediators-production.up.railway.app/stein/ru.html", permanent: false },
    { source: "/mcmullan", destination: "https://mediators-production.up.railway.app/mcmullan/", permanent: false },
    { source: "/mcmullan-ru", destination: "https://mediators-production.up.railway.app/mcmullan/ru.html", permanent: false },
    { source: "/eckhardt", destination: "https://mediators-production.up.railway.app/eckhardt/", permanent: false },
    { source: "/eckhardt-ru", destination: "https://mediators-production.up.railway.app/eckhardt/ru.html", permanent: false },
    { source: "/patterson", destination: "https://mediators-production.up.railway.app/patterson/", permanent: false },
    { source: "/patterson-ru", destination: "https://mediators-production.up.railway.app/patterson/ru.html", permanent: false },
    { source: "/gibson", destination: "https://mediators-production.up.railway.app/gibson/", permanent: false },
    { source: "/gibson-ru", destination: "https://mediators-production.up.railway.app/gibson/ru.html", permanent: false },
    { source: "/rusch", destination: "https://mediators-production.up.railway.app/rusch/", permanent: false },
    { source: "/rusch-ru", destination: "https://mediators-production.up.railway.app/rusch/ru.html", permanent: false },
    { source: "/sarahan", destination: "https://mediators-production.up.railway.app/sarahan/", permanent: false },
    { source: "/sarahan-ru", destination: "https://mediators-production.up.railway.app/sarahan/ru.html", permanent: false },
    { source: "/raines", destination: "https://mediators-production.up.railway.app/raines/", permanent: false },
    { source: "/raines-ru", destination: "https://mediators-production.up.railway.app/raines/ru.html", permanent: false },
    { source: "/cipolla", destination: "https://mediators-production.up.railway.app/cipolla/", permanent: false },
    { source: "/cipolla-ru", destination: "https://mediators-production.up.railway.app/cipolla/ru.html", permanent: false },
    { source: "/boomer", destination: "https://mediators-production.up.railway.app/boomer/", permanent: false },
    { source: "/boomer-ru", destination: "https://mediators-production.up.railway.app/boomer/ru.html", permanent: false },
    { source: "/lober", destination: "https://mediators-production.up.railway.app/lober/", permanent: false },
    { source: "/lober-ru", destination: "https://mediators-production.up.railway.app/lober/ru.html", permanent: false },
    { source: "/javore", destination: "https://mediators-production.up.railway.app/javore/", permanent: false },
    { source: "/javore-ru", destination: "https://mediators-production.up.railway.app/javore/ru.html", permanent: false },
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
