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
  }
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
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

export function faqJsonLd(
  items: { question: string; answer: string }[]
) {
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
