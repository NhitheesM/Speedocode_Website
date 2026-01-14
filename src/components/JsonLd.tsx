export function OrganizationJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Speedocode Systems',
        url: 'https://speedocodesystems.online',
        logo: 'https://speedocodesystems.online/favicon.svg',
        description: 'We build premium software solutions that transform businesses. Websites, Mobile Apps, Automation, and Blockchain development.',
        sameAs: [],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'speedocode.systems@gmail.com',
            contactType: 'customer service',
        },
        serviceType: [
            'Website Development',
            'Mobile App Development',
            'Business Automation',
            'Blockchain Development',
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export function WebsiteJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Speedocode Systems',
        url: 'https://speedocodesystems.online',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://speedocodesystems.online/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export function LocalBusinessJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Speedocode Systems',
        url: 'https://speedocodesystems.online',
        email: 'speedocode.systems@gmail.com',
        priceRange: '$$',
        image: 'https://speedocodesystems.online/favicon.svg',
        description: 'Premium software development services including websites, mobile apps, automation, and blockchain solutions.',
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Software Development Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Website Development',
                        description: 'Custom website development with modern technologies',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Mobile App Development',
                        description: 'iOS and Android mobile application development',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Business Automation',
                        description: 'Workflow automation and process optimization',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Blockchain Development',
                        description: 'Smart contracts and decentralized applications',
                    },
                },
            ],
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
