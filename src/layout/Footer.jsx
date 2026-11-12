
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        icon: FaGithub,
        href: "https://github.com/yourusername",
        label: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://linkedin.com/in/yourusername",
        label: "LinkedIn",
    },
];

export const Footer = () => {
    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-6 py-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo and Copyright */}
                    <div className="text-center md:text-left">
                        <a
                            href="#home"
                            className="text-xl font-bold tracking-tight"
                        >
                            SA<span className="text-primary">.</span>
                        </a>

                        <p className="text-xs text-muted-foreground mt-2">
                            © {new Date().getFullYear()} Your Name.
                            All rights reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center items-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>

                </div>
            </div>
        </footer>
    );
};
