"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/images/logo.svg";

const navLinks = [
    { href: "#what-we-do", label: "Services" },
    { href: "#how-we-work", label: "Process" },
    { href: "#concepts", label: "Solutions" },
    { href: "/free-audit", label: "Free Audit", highlight: true },
    { href: "#contact", label: "Contact" }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/90 backdrop-blur-lg border-b border-border py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="Speedocode Systems"
                        width={40}
                        height={40}
                        className="rounded-lg"
                    />
                    <span className="text-xl font-semibold">Speedocode Systems</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${link.highlight
                                ? "text-primary hover:text-primary-hover"
                                : "text-foreground-secondary hover:text-foreground"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary py-2 px-4 text-sm">
                        Start a Project
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <motion.span
                        className="w-6 h-0.5 bg-foreground"
                        animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-foreground"
                        animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-foreground"
                        animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 right-0 bg-background-secondary border-b border-border"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="container py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground-secondary hover:text-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="btn btn-primary mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Start a Project
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
