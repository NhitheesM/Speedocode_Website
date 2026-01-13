import { Metadata } from "next";
import { Suspense } from "react";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import { automationSolutions } from "@/data/automationSolutions";

export const metadata: Metadata = {
    title: "Automation Solutions | Speedocode Systems",
    description: "Intelligent workflows that save time and reduce errors. Workflow automation, AI integration, data pipelines, and process optimization.",
};

export default function AutomationPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <SolutionPageLayout
                title="Automation Solutions"
                description="Intelligent workflows that save time and reduce errors"
                icon="⚡"
                solutions={automationSolutions}
            />
        </Suspense>
    );
}
