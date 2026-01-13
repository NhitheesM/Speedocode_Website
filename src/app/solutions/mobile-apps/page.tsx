import { Metadata } from "next";
import { Suspense } from "react";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import { mobileAppSolutions } from "@/data/mobileAppSolutions";

export const metadata: Metadata = {
    title: "Mobile App Development Solutions | Speedocode Systems",
    description: "Native and cross-platform mobile apps that users love. iOS, Android, React Native, Flutter, and Progressive Web Apps.",
};

export default function MobileAppsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <SolutionPageLayout
                title="Mobile App Development"
                description="Native and cross-platform apps that users love"
                icon="📱"
                solutions={mobileAppSolutions}
            />
        </Suspense>
    );
}
