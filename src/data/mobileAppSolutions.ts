import { SolutionType } from "./websiteSolutions";

export const mobileAppSolutions: SolutionType[] = [
    {
        id: "ios",
        title: "iOS Apps",
        description: "Native iOS applications built with Swift, optimized for iPhone and iPad with seamless Apple ecosystem integration and App Store distribution.",
        solutionTypes: ["Native Swift", "Apple Watch", "iPad Optimized", "App Store Ready", "iCloud Sync"],
        businessUseCases: [
            "Reach Apple's premium user base",
            "Leverage Face ID and Touch ID for security",
            "Integrate with Apple Pay for seamless payments",
            "Sync data across all Apple devices",
            "Deliver push notifications for engagement"
        ]
    },
    {
        id: "android",
        title: "Android Apps",
        description: "Native Android applications using Kotlin, reaching billions of devices with Google Play distribution and full Android ecosystem support.",
        solutionTypes: ["Native Kotlin", "Material Design", "Google Play Ready", "Wear OS", "Auto & TV"],
        businessUseCases: [
            "Access the world's largest mobile platform",
            "Integrate with Google services and APIs",
            "Support diverse device form factors",
            "Leverage Google Pay for transactions",
            "Enable offline-first experiences"
        ]
    },
    {
        id: "cross-platform",
        title: "Cross-Platform",
        description: "Single codebase applications using React Native or Flutter, delivering native performance on both iOS and Android with faster time-to-market.",
        solutionTypes: ["React Native", "Flutter", "Shared Codebase", "Native Performance", "Hot Reload"],
        businessUseCases: [
            "Launch on both platforms simultaneously",
            "Reduce development and maintenance costs",
            "Maintain consistent UX across platforms",
            "Iterate quickly with shared updates",
            "Access native device features"
        ]
    },
    {
        id: "pwa",
        title: "Progressive Web Apps",
        description: "Web applications with app-like experiences, installable directly from browsers without app store requirements, perfect for broad reach.",
        solutionTypes: ["Offline Support", "Push Notifications", "Home Screen Install", "Fast Loading", "Cross-Browser"],
        businessUseCases: [
            "Avoid app store approval processes",
            "Reach users on any device with a browser",
            "Provide offline functionality",
            "Reduce friction for user acquisition",
            "Update instantly without user action"
        ]
    }
];
