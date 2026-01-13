import { Metadata } from "next";
import { Suspense } from "react";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import { blockchainSolutions } from "@/data/blockchainSolutions";

export const metadata: Metadata = {
    title: "Blockchain Development Solutions | Speedocode Systems",
    description: "Decentralized solutions for trust and transparency. Smart contracts, DApps, token systems, and NFT platforms.",
};

export default function BlockchainPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <SolutionPageLayout
                title="Blockchain Development"
                description="Decentralized solutions for trust and transparency"
                icon="🔗"
                solutions={blockchainSolutions}
            />
        </Suspense>
    );
}
