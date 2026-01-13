"use client";

import { motion } from "framer-motion";

const concepts = [
    {
        problem: "A retail business struggles with manual inventory tracking across multiple locations",
        solution: "Custom inventory management system with real-time sync, automated reordering, and mobile access",
        outcome: "Reduced stockouts by 60% and freed 20+ hours per week for strategic work",
        category: "Automation"
    },
    {
        problem: "A healthcare startup needs to engage patients between appointments",
        solution: "HIPAA-compliant mobile app with appointment reminders, health tracking, and secure messaging",
        outcome: "Improved patient engagement by 40% and reduced no-show rates significantly",
        category: "Mobile App"
    },
    {
        problem: "A B2B company's outdated website fails to convert quality leads",
        solution: "Modern, conversion-optimized website with interactive demos and seamless CRM integration",
        outcome: "Increased qualified leads by 3x while reducing bounce rate by half",
        category: "Website"
    }
];

export default function ConceptSolutions() {
    return (
        <section id="concepts" className="section bg-background-secondary">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Concept Solutions
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        How We Solve Real Problems
                    </motion.h2>
                    <motion.p
                        className="text-xl text-foreground-secondary max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        These scenarios demonstrate our problem-solving approach. Each represents how we translate business challenges into digital solutions.
                    </motion.p>
                </div>

                {/* Concept Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {concepts.map((concept, index) => (
                        <motion.div
                            key={index}
                            className="card p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            {/* Category Badge */}
                            <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-medium mb-6">
                                {concept.category}
                            </span>

                            {/* Problem */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                                    Challenge
                                </h4>
                                <p className="text-foreground-secondary">{concept.problem}</p>
                            </div>

                            {/* Solution */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                                    Solution
                                </h4>
                                <p className="text-foreground">{concept.solution}</p>
                            </div>

                            {/* Outcome */}
                            <div className="pt-6 border-t border-border">
                                <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                                    Expected Outcome
                                </h4>
                                <p className="text-accent font-medium">{concept.outcome}</p>
                            </div>

                            {/* Concept Notice */}
                            <p className="text-xs text-foreground-muted mt-6 italic">
                                * Conceptual demonstration based on common industry scenarios
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
