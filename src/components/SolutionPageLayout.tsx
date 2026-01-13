"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SolutionType } from "@/data/websiteSolutions";

interface SolutionPageLayoutProps {
    title: string;
    description: string;
    icon: string;
    solutions: SolutionType[];
    backHref?: string;
}

export default function SolutionPageLayout({
    title,
    description,
    icon,
    solutions,
    backHref = "/#what-we-do"
}: SolutionPageLayoutProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selectedType = searchParams.get("type") || solutions[0]?.id || "";
    const selectedSolution = solutions.find(s => s.id === selectedType) || solutions[0];

    const handleSelect = (id: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("type", id);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-background-secondary border-b border-border">
                <div className="container py-8">
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors mb-6"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Services
                    </Link>

                    <div className="flex items-center gap-4">
                        <span className="text-4xl">{icon}</span>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
                            <p className="text-foreground-secondary mt-1">{description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container py-16">
                <div className="grid lg:grid-cols-[280px_1fr] gap-8 mt-4">
                    {/* Left Column - Solution Type List */}
                    <nav className="space-y-2 pt-4">
                        <h2 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                            Solution Types
                        </h2>
                        {solutions.map((solution) => (
                            <button
                                key={solution.id}
                                onClick={() => handleSelect(solution.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedType === solution.id
                                    ? "bg-primary text-background font-medium"
                                    : "bg-card hover:bg-card-hover text-foreground"
                                    }`}
                            >
                                {solution.title}
                            </button>
                        ))}
                    </nav>

                    {/* Right Column - Solution Details */}
                    <AnimatePresence mode="wait">
                        {selectedSolution && (
                            <motion.div
                                key={selectedSolution.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="card p-8"
                            >
                                {/* Concept Label */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/15 text-accent text-sm font-medium mb-6">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    Concept Demonstration
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    {selectedSolution.title}
                                </h2>

                                {/* Description */}
                                <p className="text-lg text-foreground-secondary mb-8">
                                    {selectedSolution.description}
                                </p>

                                {/* Solution Types */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                                        Capabilities
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedSolution.solutionTypes.map((type) => (
                                            <span
                                                key={type}
                                                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium"
                                            >
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Business Use Cases */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                                        Business Use Cases
                                    </h3>
                                    <ul className="space-y-3">
                                        {selectedSolution.businessUseCases.map((useCase, index) => (
                                            <li key={index} className="flex gap-3 text-foreground-secondary">
                                                <span className="text-accent mt-0.5 flex-shrink-0">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                {useCase}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <Link href="/#contact" className="btn btn-primary">
                                    Discuss This Solution
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
