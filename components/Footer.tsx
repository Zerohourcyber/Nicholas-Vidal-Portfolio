import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Github, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/seo.config";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: siteConfig.links.linkedin },
  { name: "GitHub", icon: Github, href: siteConfig.links.github },
];

export default function Footer() {
  return (
    <footer className="bg-steel-900 text-steel-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-sm">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Nicholas Vidal
                </h3>
                <p className="text-sm text-steel-400">
                  Cybersecurity Director
                </p>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed">
              15 years of cybersecurity expertise protecting organizations through strategic defense, incident response, and AI-augmented security solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-steel-800 hover:bg-accent-600 flex items-center justify-center transition-all group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-steel-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-steel-400 hover:text-accent-400 transition-colors text-sm group"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start gap-3 text-steel-400 hover:text-accent-400 transition-colors text-sm group"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-steel-400 text-sm">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-steel-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-steel-500">
          <p>
            © {new Date().getFullYear()} Nicholas James Vidal. All rights reserved.
          </p>
          <p>
            Built with Next.js 14
          </p>
        </div>
      </div>
    </footer>
  );
}
