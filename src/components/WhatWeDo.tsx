"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
    {
        id: "websites",
        title: "Websites",
        icon: "🌐",
        description: "High-performance websites that convert visitors into customers",
        color: "from-cyan-500 to-blue-500",
        href: "/solutions/websites"
    },
    {
        id: "mobile",
        title: "Mobile Apps",
        icon: "📱",
        description: "Native and cross-platform apps that users love",
        color: "from-purple-500 to-pink-500",
        href: "/solutions/mobile-apps"
    },
    {
        id: "automation",
        title: "Automation",
        icon: "⚡",
        description: "Intelligent workflows that save time and reduce errors",
        color: "from-orange-500 to-amber-500",
        href: "/solutions/automation"
    },
    {
        id: "blockchain",
        title: "Blockchain",
        icon: "🔗",
        description: "Decentralized solutions for trust and transparency",
        color: "from-emerald-500 to-teal-500",
        href: "/solutions/blockchain"
    }
];

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="section bg-background-secondary">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What We Do
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Solutions That Drive Results
                    </motion.h2>
                    <motion.p
                        className="text-xl text-foreground-secondary max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We specialize in four core areas, each designed to help your business thrive in the digital age.
                    </motion.p>
                </div>

                {/* 2x2 Solution Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={solution.href}
                                className="card p-8 block group relative overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                <div className="relative z-10">
                                    <div className="text-4xl mb-4">{solution.icon}</div>
                                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-foreground-secondary mb-4">
                                        {solution.description}
                                    </p>
                                    <div className="flex items-center text-primary font-medium">
                                        <span>Explore Solutions</span>
                                        <svg
                                            className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Free Audit CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-foreground-secondary mb-4">
                        Not sure which solution fits your needs?
                    </p>
                    <Link
                        href="/free-audit"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors"
                    >
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Get a Free Consultation
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
