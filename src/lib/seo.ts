export function articleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: image || undefined,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'uCards',
      url: 'https://ucards.uk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'uCards',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ucards.uk/icons/icon-192.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Extract HowTo steps from rendered markdown headings.
 * Matches H2 headings that look like procedural steps:
 *   "第一步：...", "第1步 ...", "Step 1: ...", "步骤一 ...", "1. ..."
 * Returns [] when no step-like headings found (non-tutorial articles).
 */
export function extractHowToSteps(
  headings: { depth: number; text: string; slug: string }[],
): { name: string; text: string }[] {
  const stepPattern =
    /^(第[一二三四五六七八九十百\d]+步|step\s*\d+|步骤\s*[一二三四五六七八九十\d]+|\d+[\.、)）])\s*[：:]?\s*(.*)/i
  const steps: { name: string; text: string }[] = []
  for (const h of headings) {
    if (h.depth !== 2) continue
    const match = h.text.trim().match(stepPattern)
    if (match) {
      const label = match[1]
      const rest = (match[2] || '').trim()
      steps.push({
        name: rest ? `${label}：${rest}` : label,
        text: rest || h.text,
      })
    }
  }
  return steps
}

export function howToJsonLd({
  name,
  image,
  description,
  steps,
}: {
  name: string
  image?: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    image,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    supply: [
      {
        '@type': 'HowToSupply',
        name: name,
        image: image,
      },
    ],
  }
}

export function glossaryJsonLd({
  term,
  definition,
  url,
}: {
  term: string
  definition: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term,
    description: definition,
    inDefinedTermSet: 'https://ucards.uk/learn/glossary/',
    url,
  }
}

export function productJsonLd({
  name,
  description,
  image,
  offers,
  rating,
  ratingCount,
}: {
  name: string
  description: string
  image?: string
  offers?: Array<{ price: string; currency: string }>
  rating?: number
  ratingCount?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: 'uCards',
    },
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        bestRating: 5,
        worstRating: 1,
        ratingCount: ratingCount || 1200,
      },
      review: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: rating,
          bestRating: 5,
        },
        author: {
          '@type': 'Organization',
          name: 'uCards Editorial Team',
        },
      },
    }),
    offers: offers?.map((offer) => ({
      '@type': 'Offer',
      price: offer.price,
      priceCurrency: offer.currency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'uCards',
      },
    })),
  }
}

export function reviewJsonLd({
  itemReviewed,
  reviewRating,
  reviewBody,
  author,
  datePublished,
}: {
  itemReviewed: string
  reviewRating: number
  reviewBody: string
  author?: string
  datePublished?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating,
    },
    reviewBody,
    author: author || 'uCards Team',
    datePublished: datePublished || new Date().toISOString(),
  }
}

export function collectionJsonLd(name: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'uCards',
      url: 'https://ucards.uk',
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'uCards',
    alternateName: ['uCards', 'U卡', 'u卡', 'U Card', 'uCard', 'uCards虚拟信用卡'],
    url: 'https://ucards.uk',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ucards.uk/icons/icon-192.svg',
    },
    description:
      'uCards (U卡) — No-KYC virtual credit card platform. Pay with USDT, TRON, Ethereum. Get instant Visa, Mastercard, and Discover cards. Zero setup fee.',
    sameAs: ['https://twitter.com/ucards', 'https://github.com/ucards'],
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'uCards Learn',
    url: 'https://ucards.uk/learn',
    description:
      'uCards Learn — Learn about virtual credit cards, cryptocurrency payments, and online security. 44+ in-depth guides and tutorials. U卡知识库。',
    publisher: {
      '@type': 'Organization',
      name: 'uCards',
      url: 'https://ucards.uk',
    },
  }
}
