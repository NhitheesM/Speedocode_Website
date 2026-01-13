import Image from "next/image";
import logo from "@/images/logo.svg";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
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

                    {/* Links */}
                    <nav className="flex flex-wrap gap-6 md:gap-8 text-sm text-foreground-secondary">
                        <a href="#what-we-do" className="hover:text-foreground transition-colors">Services</a>
                        <a href="#how-we-work" className="hover:text-foreground transition-colors">Process</a>
                        <a href="#concepts" className="hover:text-foreground transition-colors">Solutions</a>
                        <a href="/free-audit" className="text-primary hover:text-primary-hover transition-colors">Free Audit</a>
                        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-sm text-foreground-muted">
                        © {currentYear} Speedocode Systems. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
