"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI-Powered Live Resume Platform",
    description:
      "Built a flagship AI-powered personal portfolio and live resume website using Next.js 16, featuring modern professional design, Framer Motion animations, and hooks for future RAG chatbot integration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    highlights: [
      "Cinematic AI-inspired design with animated glow effects",
      "Integrated RAG chatbot for interactive career showcase",
      "SEO-optimized with Next.js 16 App Router and SSR",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Augmented DevSecOps & IaC Lab",
    description:
      "Built a local AI-powered security automation framework using Ollama (Mistral model) and LangChain agents. Designed workflows to analyze and remediate YAML, IaC, and Docker misconfigurations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
    tags: ["Ollama", "Mistral", "LangChain", "GitHub Actions", "Docker"],
    highlights: [
      "Automated IaC vulnerability scanning and remediation",
      "LangChain agents for intelligent security analysis",
      "CI/CD integration for DevSecOps pipelines",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cyber Range Lab & Cloud Security Architecture",
    description:
      "Built an enterprise-grade cyber range using Proxmox and pfSense to simulate red/blue team ops across segmented VLANs. Deployed Windows/Linux VMs for threat emulation and IR testing.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&q=80",
    tags: ["Proxmox", "pfSense", "Wazuh SIEM", "Grafana", "Pi-hole"],
    highlights: [
      "Multi-VLAN network segmentation for red/blue team exercises",
      "Integrated Wazuh SIEM for real-time threat monitoring",
      "Automated threat emulation scenarios",
    ],
    demoUrl: "#",
  },
  {
    title: "N8N RAG Agent Automation Platform",
    description:
      "Developed intelligent RAG (Retrieval-Augmented Generation) agents using N8N workflow automation, integrating with LLMs for context-aware security analysis and automated threat response workflows.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop&q=80",
    tags: ["N8N", "RAG", "LLM Integration", "Automation", "AI Agents"],
    highlights: [
      "Context-aware security incident analysis using RAG",
      "Automated threat response workflows with LLMs",
      "Integrated with multiple security data sources",
    ],
    demoUrl: "#",
  },
  {
    title: "MCP Server for Personal Assistant Management",
    description:
      "Architected and deployed an MCP (Model Context Protocol) server to enable AI personal assistants to manage and orchestrate multiple servers, providing unified control plane for infrastructure automation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    tags: ["MCP", "Server Management", "AI Integration", "Infrastructure"],
    highlights: [
      "Unified control plane for multi-server orchestration",
      "AI-driven infrastructure automation",
      "Model Context Protocol implementation",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NIST Compliance Automation Framework (N8N)",
    description:
      "Developed automated frameworks within N8N for NIST standards compliance, providing GRC teams with streamlined workflows for security control implementation, auditing, and continuous monitoring.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=600&fit=crop&q=80",
    tags: ["N8N", "NIST", "GRC", "Compliance", "Automation"],
    highlights: [
      "Automated NIST 800-53 control implementation",
      "Continuous compliance monitoring workflows",
      "GRC dashboard with real-time compliance metrics",
    ],
    demoUrl: "#",
  },
];

export default function ProjectsPage() {
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
          <div className="orb-cyan w-[500px] h-[500px] top-[-10%] right-[5%] opacity-20" style={{ animationDelay: '2s' }} />
          <div className="orb-red w-[400px] h-[400px] bottom-[10%] left-[5%] opacity-20" style={{ animationDelay: '7s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-2 glass-dark border border-neon-cyan/30 rounded-full mb-8"
            >
              <Zap className="h-5 w-5 text-neon-cyan" />
              <span className="text-sm font-semibold text-white">Portfolio Showcase</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 text-white">
              Featured <span className="text-gradient-cyber">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Innovation in cybersecurity through AI, automation, and hands-on security research
            </p>
            <div className="accent-bar-neon mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-cinematic relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Holographic Card */}
                <div className="card-holographic overflow-hidden hover:shadow-card-hover transition-all duration-500 ease-out">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-red/20 mix-blend-overlay z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                      {project.demoUrl && (
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-neon-cyan text-space-900 p-3 rounded-full shadow-neon-cyan hover:shadow-glow-cyan transition-all font-bold"
                            aria-label="View Demo"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.button>
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-neon-red text-white p-3 rounded-full shadow-neon-red hover:shadow-glow-red transition-all font-bold"
                            aria-label="View GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </motion.button>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-glow-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="list-none text-slate-400 text-sm space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-neon-cyan mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cinematic relative overflow-hidden">
        <div className="absolute inset-0 bg-genie-glow opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Interested in <span className="text-glow-red">Collaborating</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can work together on innovative cybersecurity solutions
            </p>
            <Button 
              size="lg" 
              className="btn-neon-cyan text-white font-bold hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
