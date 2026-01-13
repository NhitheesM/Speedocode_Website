"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We learn your business goals, challenges, and vision",
        icon: "🔍"
    },
    {
        number: "02",
        title: "Design",
        description: "Crafting the optimal solution architecture and experience",
        icon: "✏️"
    },
    {
        number: "03",
        title: "Build",
        description: "Developing with precision using modern technologies",
        icon: "🛠️"
    },
    {
        number: "04",
        title: "Launch",
        description: "Deploying your solution with thorough testing",
        icon: "🚀"
    },
    {
        number: "05",
        title: "Support",
        description: "Ongoing maintenance and continuous improvement",
        icon: "🤝"
    }
];

export default function HowWeWork() {
    return (
        <section id="how-we-work" className="section">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A Clear Path to Success
                    </motion.h2>
                    <motion.p
                        className="text-xl text-foreground-secondary max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Our proven process ensures predictable timelines, transparent communication, and exceptional results.
                    </motion.p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                className="relative text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Icon Circle */}
                                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-card border border-border flex items-center justify-center text-3xl">
                                    {step.icon}
                                </div>

                                {/* Step Number */}
                                <span className="text-sm font-mono text-primary mb-2 block">
                                    {step.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

                                {/* Description */}
                                <p className="text-foreground-secondary text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
