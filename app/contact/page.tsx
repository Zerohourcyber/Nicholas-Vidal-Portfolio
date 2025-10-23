"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/seo.config";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Vidal@NicholasVidal.tech",
    link: "mailto:Vidal@NicholasVidal.tech",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(618) 799-3850",
    link: "tel:+16187993850",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Portales, NM 88130",
    link: null,
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Form submission functionality to be implemented. For now, please email directly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="orb orb-blue w-[500px] h-[500px] top-[-10%] left-[20%]" style={{ animationDelay: '1s' }} />
          <div className="orb orb-gold w-[400px] h-[400px] bottom-[10%] right-[20%]" style={{ animationDelay: '6s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Available for consulting, advisory roles, and strategic cybersecurity initiatives. Let's discuss how we can strengthen your security posture.
            </p>
            <div className="accent-bar mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-pro bg-white">
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
                      className="card-cinematic text-center group block"
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sapphire-100 to-accent-100 rounded-2xl mb-4 transition-all">
                        <Icon className="h-7 w-7 text-sapphire-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-steel-500 uppercase tracking-wide mb-2">
                        {info.label}
                      </h3>
                      <p className="text-lg font-medium text-steel-900 group-hover:text-gradient transition-all">
                        {info.value}
                      </p>
                    </a>
                  ) : (
                    <div className="card-cinematic text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sapphire-100 to-accent-100 rounded-2xl mb-4">
                        <Icon className="h-7 w-7 text-sapphire-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-steel-500 uppercase tracking-wide mb-2">
                        {info.label}
                      </h3>
                      <p className="text-lg font-medium text-steel-900">
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
              className="card-cinematic"
            >
              <h2 className="text-3xl font-serif font-bold text-steel-900 mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-steel-700">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 border-steel-300 focus:border-accent-500 focus:ring-accent-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-steel-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 border-steel-300 focus:border-accent-500 focus:ring-accent-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-steel-700">
                    Company / Organization
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 border-steel-300 focus:border-accent-500 focus:ring-accent-500"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-steel-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 border-steel-300 focus:border-accent-500 focus:ring-accent-500"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <p className="text-steel-600 mb-4">Or connect with me on social media</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-steel-100 hover:bg-accent-600 flex items-center justify-center transition-all group"
                      aria-label={social.name}
                    >
                      <Icon className="h-6 w-6 text-steel-600 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
