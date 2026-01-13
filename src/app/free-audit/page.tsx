"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";

const benefits = [
    {
        icon: "🎨",
        title: "UX & Design Feedback",
        description: "Visual hierarchy, user flow, and design improvements"
    },
    {
        icon: "⚡",
        title: "Performance & SEO Review",
        description: "Speed optimization and search visibility insights"
    },
    {
        icon: "📈",
        title: "Conversion Suggestions",
        description: "Actionable tips to improve your conversion rates"
    },
    {
        icon: "🛠️",
        title: "Tech Stack Recommendations",
        description: "Best technologies for your specific needs"
    }
];

const reviewTypes = [
    {
        id: "website",
        title: "Website Audit",
        description: "Get detailed feedback on your existing website",
        icon: "🌐"
    },
    {
        id: "idea",
        title: "Idea Validation",
        description: "Validate your app or product concept before building",
        icon: "💡"
    }
];

const businessTypes = [
    "Startup",
    "Small Business",
    "Agency",
    "Enterprise",
    "Non-profit",
    "Personal Project",
    "Other"
];

export default function FreeAuditPage() {
    const [reviewType, setReviewType] = useState("website");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        urlOrIdea: "",
        businessType: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Track with Google Analytics
        if (typeof window !== "undefined" && (window as unknown as { gtag?: (command: string, event: string, params: object) => void }).gtag) {
            (window as unknown as { gtag: (command: string, event: string, params: object) => void }).gtag("event", "free_audit_submission", {
                review_type: reviewType,
                business_type: formData.businessType
            });
        }

        try {
            const response = await fetch('/api/free-audit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    reviewType,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Something went wrong');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border py-4">
                <div className="container flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={logo}
                            alt="Speedocode Systems"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-semibold">Speedocode Systems</span>
                    </Link>
                    <Link href="/" className="text-sm text-foreground-secondary hover:text-foreground transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                            <span className="text-sm font-medium text-primary">100% Free • No Obligation</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto">
                            Get a Free Website Audit or{" "}
                            <span className="gradient-text">Validate Your Idea</span>
                        </h1>

                        <p className="text-xl text-foreground-secondary max-w-2xl mx-auto mb-8">
                            Actionable feedback from experienced engineers. No sales pressure,
                            just honest insights to help you succeed.
                        </p>

                        <a href="#request-form" className="btn btn-primary">
                            Request Free Review
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* What You'll Get */}
            <section className="py-16 bg-background-secondary">
                <div className="container">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What You&apos;ll Get</h2>
                        <p className="text-foreground-secondary text-lg">
                            A personalized review with actionable recommendations
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                className="card p-6 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-foreground-secondary text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request Form Section */}
            <section id="request-form" className="py-16 scroll-mt-20">
                <div className="container max-w-3xl">
                    {submitted ? (
                        <motion.div
                            className="card p-12 text-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="text-6xl mb-6">🎉</div>
                            <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                            <p className="text-foreground-secondary text-lg mb-6">
                                Thank you for your interest. We&apos;ll review your submission and respond
                                within 24 hours with personalized feedback.
                            </p>
                            <Link href="/" className="btn btn-secondary">
                                Return to Homepage
                            </Link>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Choose Review Type */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-4">Choose Your Review Type</h2>
                                <p className="text-foreground-secondary">
                                    Select the type of feedback you need
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-10">
                                {reviewTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setReviewType(type.id)}
                                        className={`p-6 rounded-xl border-2 text-left transition-all ${reviewType === type.id
                                            ? "border-primary bg-primary/10"
                                            : "border-border hover:border-primary/50"
                                            }`}
                                    >
                                        <div className="text-3xl mb-3">{type.icon}</div>
                                        <h3 className="text-lg font-semibold mb-1">{type.title}</h3>
                                        <p className="text-foreground-secondary text-sm">{type.description}</p>
                                    </button>
                                ))}
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Your Name <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Email Address <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                {/* URL or Idea */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        {reviewType === "website" ? "Website URL" : "Your Idea"} <span className="text-primary">*</span>
                                    </label>
                                    {reviewType === "website" ? (
                                        <input
                                            type="url"
                                            required
                                            value={formData.urlOrIdea}
                                            onChange={(e) => setFormData({ ...formData, urlOrIdea: e.target.value })}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                                            placeholder="https://yourwebsite.com"
                                        />
                                    ) : (
                                        <textarea
                                            required
                                            rows={3}
                                            value={formData.urlOrIdea}
                                            onChange={(e) => setFormData({ ...formData, urlOrIdea: e.target.value })}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                                            placeholder="Describe your app or product idea..."
                                        />
                                    )}
                                </div>

                                {/* Business Type */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Business Type</label>
                                    <select
                                        value={formData.businessType}
                                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors appearance-none"
                                    >
                                        <option value="">Select your business type</option>
                                        {businessTypes.map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Optional Message */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Additional Notes <span className="text-foreground-muted">(optional)</span>
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                                        placeholder="Any specific areas you'd like us to focus on?"
                                    />
                                </div>

                                {/* Trust Signals */}
                                <div className="flex flex-wrap gap-6 py-4 text-sm text-foreground-secondary">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        No spam. Ever.
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Response within 24 hours
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        100% free, no obligation
                                    </div>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full py-4 text-lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Get My Free Review
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-background-secondary">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Product?</h2>
                        <p className="text-foreground-secondary mb-8">
                            Get expert feedback at no cost. No strings attached.
                        </p>
                        <a href="#request-form" className="btn btn-primary">
                            Get My Free Review
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-border">
                <div className="container text-center text-sm text-foreground-muted">
                    © {new Date().getFullYear()} Speedocode Systems. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
