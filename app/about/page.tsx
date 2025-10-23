"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Code, Rocket, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = [
  {
    category: "Cybersecurity Core",
    icon: Award,
    items: ["Digital Forensics", "Cloud Security", "Risk Mitigation", "Threat Hunting & Analysis", "Vulnerability Management", "Complex Problem Solving"],
  },
  {
    category: "Technical Skills",
    icon: Code,
    items: ["Nmap", "OpenVAS", "SIEM (Wazuh, Grafana)", "Proxmox", "pfSense", "Docker", "Terraform", "GitHub Actions CI/CD", "N8N Workflows"],
  },
  {
    category: "AI & Automation",
    icon: Rocket,
    items: ["Ollama + Mistral LLM", "LangChain + CrewAI", "RAG Agents", "N8N Automation", "MCP Servers", "AI Agents for Security", "YAML/IaC Config Auditing"],
  },
  {
    category: "Leadership & Compliance",
    icon: BookOpen,
    items: ["Cyber Incident Management", "NIST SP 800-53/800-37", "RMF & FedRAMP Frameworks", "Strategic Planning", "Cross-functional Team Leadership"],
  },
];

const certifications = [
  "CISSP - Certified Information Systems Security Professional (Expected 3/2026)",
  "CompTIA Security+",
  "CompTIA A+",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="orb orb-blue w-[500px] h-[500px] top-[-10%] left-[10%]" style={{ animationDelay: '3s' }} />
          <div className="orb orb-gold w-[400px] h-[400px] bottom-[10%] right-[10%]" style={{ animationDelay: '8s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About <span className="text-gradient">Nicholas James Vidal</span>
            </h1>
            <p className="text-xl text-steel-600 leading-relaxed mb-6">
              15 years leading cyber defense strategy, incident response, and secure infrastructure design
            </p>
            <div className="accent-bar mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Biography & Certifications Section */}
      <section className="section-pro bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-steel-900">My Story</h2>
              <div className="accent-bar" />
              
              <p className="text-lg text-steel-700 leading-relaxed">
                With over 15 years of experience in cybersecurity, I've dedicated my career to protecting organizations from evolving cyber threats through strategic defense planning, incident response, and secure infrastructure design.
              </p>
              
              <p className="text-lg text-steel-700 leading-relaxed">
                Currently serving as a Senior Cybersecurity Director in the United States Air Force, I lead division-wide cyber defense initiatives, manage critical incident responses, and ensure compliance with NIST and AFI standards across multi-million-dollar network infrastructures.
              </p>
              
              <p className="text-lg text-steel-700 leading-relaxed">
                My expertise spans Digital Forensics & Incident Response (DFIR), malware analysis, cloud security architecture, and AI-augmented security automation. I'm passionate about leveraging cutting-edge technology to stay ahead of adversaries and build resilient defense systems.
              </p>

              <p className="text-lg text-steel-700 leading-relaxed">
                Beyond traditional cybersecurity, I'm actively developing AI-powered tools including RAG agents, N8N automation workflows, and MCP servers to enhance operational efficiency and threat detection capabilities.
              </p>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="card-elevated sticky top-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sapphire-50 flex items-center justify-center">
                  <Award className="h-6 w-6 text-sapphire-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-steel-900">Certifications</h3>
              </div>
              
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-steel-700 leading-relaxed">{cert}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-steel-200">
                <Button className="w-full bg-accent-600 hover:bg-accent-700 text-white" asChild>
                  <Link href="/experience">
                    View Experience
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="section-pro bg-gradient-to-br from-cyber-50/20 via-white to-sapphire-50/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="orb orb-blue w-[400px] h-[400px] top-[20%] right-[-10%]" style={{ animationDelay: '5s' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Technical Expertise"
            subtitle="A comprehensive skill set built through years of hands-on experience in cybersecurity operations, development, and leadership"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, categoryIndex) => {
              const Icon = skillCategory.icon;
              return (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="card-cinematic"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sapphire-100 to-accent-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-sapphire-600" />
                    </div>
                    <h3 className="text-xl font-bold text-steel-900">
                      {skillCategory.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                        className="px-4 py-2 glass hover:bg-white/90 text-steel-700 rounded-full text-sm font-medium transition-all cursor-default hover:scale-105"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pro bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-steel-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-steel-600 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or discussing cybersecurity strategies? I'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent-600 hover:bg-accent-700 text-white" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-steel-300 hover:border-accent-500 hover:bg-accent-50/50" asChild>
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
