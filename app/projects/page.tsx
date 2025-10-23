"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI-Powered Live Resume Platform",
    description:
      "Built a flagship AI-powered personal portfolio and live resume website using Next.js 14, featuring modern professional design, Framer Motion animations, and hooks for future RAG chatbot integration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    gradient: "from-sapphire-500/20 to-cyber-500/20",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Augmented DevSecOps & IaC Lab",
    description:
      "Built a local AI-powered security automation framework using Ollama (Mistral model) and LangChain agents. Designed workflows to analyze and remediate YAML, IaC, and Docker misconfigurations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
    tags: ["Ollama", "Mistral", "LangChain", "GitHub Actions", "Docker"],
    gradient: "from-accent-500/20 to-sunset-500/20",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cyber Range Lab & Cloud Security Architecture",
    description:
      "Built an enterprise-grade cyber range using Proxmox and pfSense to simulate red/blue team ops across segmented VLANs. Deployed Windows/Linux VMs for threat emulation and IR testing.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&q=80",
    tags: ["Proxmox", "pfSense", "Wazuh SIEM", "Grafana", "Pi-hole"],
    gradient: "from-cyber-500/20 to-sapphire-500/20",
    demoUrl: "#",
  },
  {
    title: "N8N RAG Agent Automation Platform",
    description:
      "Developed intelligent RAG (Retrieval-Augmented Generation) agents using N8N workflow automation, integrating with LLMs for context-aware security analysis and automated threat response workflows.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop&q=80",
    tags: ["N8N", "RAG", "LLM Integration", "Automation", "AI Agents"],
    gradient: "from-sapphire-500/20 to-accent-500/20",
    demoUrl: "#",
  },
  {
    title: "MCP Server for Personal Assistant Management",
    description:
      "Architected and deployed an MCP (Model Context Protocol) server to enable AI personal assistants to manage and orchestrate multiple servers, providing unified control plane for infrastructure automation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    tags: ["MCP", "Server Management", "AI Integration", "Infrastructure"],
    gradient: "from-sunset-500/20 to-accent-500/20",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NIST Compliance Automation Framework (N8N)",
    description:
      "Developed automated frameworks within N8N for NIST standards compliance, providing GRC teams with streamlined workflows for security control implementation, auditing, and continuous monitoring.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=600&fit=crop&q=80",
    tags: ["N8N", "NIST", "GRC", "Compliance", "Automation"],
    gradient: "from-cyber-500/20 to-sunset-500/20",
    demoUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Cinematic Background */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="orb orb-blue w-[500px] h-[500px] top-[-10%] right-[-5%]" style={{ animationDelay: '2s' }} />
          <div className="orb orb-gold w-[400px] h-[400px] bottom-[10%] left-[-5%]" style={{ animationDelay: '7s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-2 glass rounded-full mb-8"
            >
              <Sparkles className="h-5 w-5 text-accent-600" />
              <span className="text-sm font-semibold text-steel-800">Portfolio Showcase</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-steel-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Innovation in cybersecurity through AI, automation, and hands-on security research
            </p>
            <div className="accent-bar mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-pro bg-gradient-to-br from-white via-cyber-50/10 to-sapphire-50/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="card-elevated p-0 overflow-hidden parallax-hover">
                  {/* Project Image with Gradient Overlay */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Cinematic Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 via-transparent to-transparent" />
                    
                    {/* Action Buttons on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-sapphire-500 to-sapphire-600 hover:from-sapphire-600 hover:to-sapphire-700 text-white shadow-glow-blue"
                          asChild
                        >
                          <Link href={project.demoUrl}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="glass hover:bg-white/90"
                          asChild
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-steel-900 mb-3 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-steel-700 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags with Gradient Background */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 glass rounded-full text-sm font-medium text-steel-700 hover:bg-white/90 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Cinematic Background */}
      <section className="relative section-pro overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-900 via-steel-900 to-cyber-900" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-sapphire-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can work together on innovative cybersecurity solutions
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent-500 to-sunset-500 hover:from-accent-600 hover:to-sunset-600 text-white shadow-glow-accent hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
