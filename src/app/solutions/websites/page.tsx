import { Metadata } from "next";
import { Suspense } from "react";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import { websiteSolutions } from "@/data/websiteSolutions";

export const metadata: Metadata = {
    title: "Website Development Solutions | Speedocode Systems",
    description: "High-performance websites that convert visitors into customers. Landing pages, SaaS platforms, e-commerce stores, and corporate sites.",
};

export default function WebsitesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <SolutionPageLayout
                title="Website Development"
                description="High-performance websites that convert visitors into customers"
                icon="🌐"
                solutions={websiteSolutions}
            />
        </Suspense>
    );
}
