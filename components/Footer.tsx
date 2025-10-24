import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/NicholasV", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/nicholasvidal", icon: Linkedin },
  { name: "Email", href: "mailto:nick@n1x.io", icon: Mail },
];

const siteConfig = {
  contact: {
    email: "nick@n1x.io",
    phone: "(123) 456-7890",
    location: "United States",
  },
};

export default function Footer() {
  return (
    <footer className="relative glass-dark border-t border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center shadow-glow-cyan">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Nicholas Vidal
                </h3>
                <p className="text-sm text-neon-cyan">
                  Cybersecurity Director
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
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
                    className="w-10 h-10 rounded-lg glass-dark border border-neon-cyan/20 hover:border-neon-cyan/50 flex items-center justify-center transition-all group hover:shadow-glow-cyan"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-neon-cyan transition-colors" />
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
                    className="text-slate-400 hover:text-neon-cyan transition-colors text-sm group inline-flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-neon-cyan group-hover:w-4 transition-all duration-300" />
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
                  className="flex items-start gap-3 text-slate-400 hover:text-neon-cyan transition-colors text-sm group"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-neon-cyan/70 group-hover:text-neon-cyan" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-neon-cyan transition-colors text-sm group"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-neon-cyan/70 group-hover:text-neon-cyan" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-neon-cyan/70" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Neon Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent mb-8 shadow-glow-cyan" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Nicholas James Vidal. All rights reserved.
          </p>
        </div>
      </div>

      {/* Ambient Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50 blur-sm" />
    </footer>
  );
}
