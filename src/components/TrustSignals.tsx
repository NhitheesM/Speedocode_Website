"use client";

import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Kubernetes", "Solidity", "Web3"
];

const industries = [
    "Healthcare", "Finance", "E-commerce", "Education", "Real Estate", "Logistics"
];

const principles = [
    {
        icon: "🔒",
        title: "Security First",
        description: "Every solution built with security as a foundational requirement"
    },
    {
        icon: "📈",
        title: "Scalable Architecture",
        description: "Systems designed to grow with your business demands"
    },
    {
        icon: "⚡",
        title: "Performance Optimized",
        description: "Fast, responsive experiences that users love"
    }
];

const advantages = [
    {
        icon: "👤",
        title: "Direct Founder Involvement",
        description: "Work directly with decision-makers, not account managers"
    },
    {
        icon: "🔄",
        title: "Flexible Engagement",
        description: "Adapt scope and timeline as your needs evolve"
    },
    {
        icon: "💡",
        title: "Modern Stack",
        description: "Built with the latest, most effective technologies"
    }
];

export default function TrustSignals() {
    return (
        <section id="trust" className="section">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Built on Solid Foundations
                    </motion.h2>
                </div>

                {/* Technologies */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-center text-lg font-semibold mb-6">Technologies We Master</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Industries */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="text-center text-lg font-semibold mb-6">Industries We Serve</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {industries.map((industry) => (
                            <span
                                key={industry}
                                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Principles */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {principles.map((principle, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-4">{principle.icon}</div>
                            <h4 className="text-xl font-semibold mb-2">{principle.title}</h4>
                            <p className="text-foreground-secondary">{principle.description}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Early-Stage Advantages */}
                <motion.div
                    className="bg-background-secondary rounded-2xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-2xl font-bold text-center mb-8">The Speedocode Systems Advantage</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl mb-4">{advantage.icon}</div>
                                <h4 className="text-lg font-semibold mb-2">{advantage.title}</h4>
                                <p className="text-foreground-secondary text-sm">{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
