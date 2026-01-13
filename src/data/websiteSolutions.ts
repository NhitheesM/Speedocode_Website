export interface SolutionType {
    id: string;
    title: string;
    description: string;
    solutionTypes: string[];
    businessUseCases: string[];
}

export const websiteSolutions: SolutionType[] = [
    {
        id: "landing",
        title: "Landing Pages",
        description: "High-converting, single-purpose pages designed to capture leads and drive specific actions. Perfect for product launches, campaigns, and lead generation.",
        solutionTypes: ["Lead Capture", "Product Launch", "Campaign Pages", "Coming Soon", "Event Registration"],
        businessUseCases: [
            "Launch a new product with maximum impact",
            "Capture qualified leads for your sales team",
            "Run targeted marketing campaigns",
            "Build anticipation before a major release",
            "Drive registrations for events or webinars"
        ]
    },
    {
        id: "saas",
        title: "SaaS Platforms",
        description: "Scalable subscription-based web applications with user authentication, billing integration, and feature-rich dashboards for B2B and B2C markets.",
        solutionTypes: ["User Management", "Subscription Billing", "Admin Dashboards", "API Integration", "Multi-tenant Architecture"],
        businessUseCases: [
            "Build a recurring revenue business model",
            "Manage thousands of users with role-based access",
            "Integrate with Stripe, PayPal, or custom billing",
            "Provide analytics and reporting to customers",
            "Scale infrastructure as your user base grows"
        ]
    },
    {
        id: "ecommerce",
        title: "E-commerce Stores",
        description: "Full-featured online stores with inventory management, secure checkout, and optimized shopping experiences that convert browsers into buyers.",
        solutionTypes: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "Inventory Tracking"],
        businessUseCases: [
            "Sell products directly to consumers online",
            "Manage complex product variants and pricing",
            "Process secure payments globally",
            "Track inventory across multiple warehouses",
            "Implement loyalty programs and promotions"
        ]
    },
    {
        id: "corporate",
        title: "Corporate Sites",
        description: "Professional business websites that establish credibility, communicate brand values, and serve as the digital headquarters for your organization.",
        solutionTypes: ["Brand Showcase", "Team & Culture", "News & Blog", "Investor Relations", "Career Portal"],
        businessUseCases: [
            "Establish professional online presence",
            "Attract top talent with career pages",
            "Communicate with investors and stakeholders",
            "Publish thought leadership content",
            "Showcase company culture and values"
        ]
    }
];
