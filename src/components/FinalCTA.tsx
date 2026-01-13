"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="section bg-background-secondary relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Build Something{" "}
                        <span className="gradient-text">Extraordinary?</span>
                    </h2>
                    <p className="text-xl text-foreground-secondary mb-8">
                        Let&apos;s discuss your vision. No pressure, no obligation—just a conversation
                        about how we can help transform your ideas into reality.
                    </p>

                    {/* Trust Points */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-foreground-secondary">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Clear communication
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Transparent process
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            No-obligation discussion
                        </div>
                    </div>

                    <a href="#contact" className="btn btn-primary text-lg px-10 py-4">
                        Get a Free Consultation
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
