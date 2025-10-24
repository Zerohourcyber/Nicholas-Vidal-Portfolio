"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nick@n1x.io",
    link: "mailto:nick@n1x.io",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(123) 456-7890",
    link: "tel:+11234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/nicholasvidal",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/NicholasV",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Cosmic Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/u5229825193_Abstract_luminous_spiral_of_light_and_darkness_gl_25541650-9ece-423d-9efa-828ead8d5510_0.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-space-900/70 via-space-900/50 to-space-900/90" />
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-cyan w-[500px] h-[500px] top-[-10%] left-[20%] opacity-20" style={{ animationDelay: '1s' }} />
          <div className="orb-red w-[400px] h-[400px] bottom-[10%] right-[20%] opacity-20" style={{ animationDelay: '6s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 text-white">
              Let&apos;s <span className="text-gradient-cyber">Connect</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Available for consulting, advisory roles, and strategic cybersecurity initiatives. Let&apos;s discuss how we can strengthen your security posture.
            </p>
            <div className="accent-bar-neon mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-cinematic relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="card-holographic text-center group block p-8 hover:border-neon-cyan/50"
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-neon-cyan/20 to-neon-red/20 rounded-2xl mb-4 border border-neon-cyan/30 group-hover:shadow-glow-cyan transition-all">
                        <Icon className="h-7 w-7 text-neon-cyan" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">
                        {info.label}
                      </h3>
                      <p className="text-lg font-medium text-white group-hover:text-neon-cyan transition-colors">
                        {info.value}
                      </p>
                    </a>
                  ) : (
                    <div className="card-holographic text-center p-8">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-neon-cyan/20 to-neon-red/20 rounded-2xl mb-4 border border-neon-cyan/30">
                        <Icon className="h-7 w-7 text-neon-cyan" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">
                        {info.label}
                      </h3>
                      <p className="text-lg font-medium text-white">
                        {info.value}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-holographic p-8 md:p-10"
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-300 font-semibold">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full bg-space-200/50 border-neon-cyan/30 text-white placeholder-slate-500 focus:border-neon-cyan focus:ring-neon-cyan/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-300 font-semibold">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full bg-space-200/50 border-neon-cyan/30 text-white placeholder-slate-500 focus:border-neon-cyan focus:ring-neon-cyan/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-slate-300 font-semibold">Company (Optional)</Label>
                  <Input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 block w-full bg-space-200/50 border-neon-cyan/30 text-white placeholder-slate-500 focus:border-neon-cyan focus:ring-neon-cyan/50"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-300 font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-2 block w-full bg-space-200/50 border-neon-cyan/30 text-white placeholder-slate-500 focus:border-neon-cyan focus:ring-neon-cyan/50"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-neon-red text-white font-bold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-neon-cyan/20">
                <p className="text-center text-slate-400 mb-4">Or connect via social</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg glass-dark border border-neon-cyan/20 hover:border-neon-cyan/50 flex items-center justify-center transition-all group hover:shadow-glow-cyan"
                        aria-label={social.name}
                      >
                        <Icon className="h-6 w-6 text-slate-400 group-hover:text-neon-cyan transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="section-cinematic relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Or Schedule a Direct Call
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Book a convenient time directly on my calendar to discuss your cybersecurity needs.
            </p>
            {/* Placeholder for Calendly embed */}
            <div className="card-holographic h-96 flex items-center justify-center">
              <p className="text-slate-400">Calendly Embed Placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
