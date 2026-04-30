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
}: {
	name: string
	description: string
	image?: string
	offers?: Array<{ price: string; currency: string }>
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name,
		description,
		image,
		offers: offers?.map((offer) => ({
			'@type': 'Offer',
			price: offer.price,
			priceCurrency: offer.currency,
			availability: 'https://schema.org/InStock',
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
		url: 'https://ucards.uk',
		logo: {
			'@type': 'ImageObject',
			url: 'https://ucards.uk/icons/icon-192.svg',
		},
		description: 'No-KYC virtual credit card platform. Pay with USDT, TRON, Ethereum. Get instant Visa, Mastercard, and Discover cards.',
		sameAs: [
			'https://twitter.com/ucards',
			'https://github.com/ucards',
		],
	}
}

export function webSiteJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'uCards Learn',
		url: 'https://ucards.uk/learn',
		description: 'Learn about virtual credit cards, cryptocurrency payments, and online security. 44+ in-depth guides and tutorials.',
		publisher: {
			'@type': 'Organization',
			name: 'uCards',
			url: 'https://ucards.uk',
		},
	}
}
