"use client";

import { motion } from "framer-motion";
import { Award, Shield, Brain, Cloud, Code, Lock, Zap, Database } from "lucide-react";

const certifications = [
  "CompTIA Security+",
  "CISSP (Expected 3/2026)",
  "A+",
];

const skillCategories = [
  {
    title: "Digital Forensics & Incident Response",
    icon: Shield,
    skills: [
      "Volatility Framework",
      "FTK / EnCase",
      "Log Analysis",
      "Malware Triage & Reverse Engineering",
      "Network Forensics (Wireshark, Zeek)",
      "Memory Forensics",
    ],
  },
  {
    title: "Cloud & Infrastructure Security",
    icon: Cloud,
    skills: [
      "AWS (EC2, S3, IAM, VPC, GuardDuty)",
      "Azure (Active Directory, Sentinel)",
      "GCP (Compute, IAM, Security Command Center)",
      "Infrastructure as Code (Terraform, Ansible)",
      "Container Security (Docker, Kubernetes)",
    ],
  },
  {
    title: "Security Operations & Tools",
    icon: Lock,
    skills: [
      "SIEM (Splunk, Wazuh, ELK)",
      "EDR/XDR Solutions",
      "IDS/IPS (Snort, Suricata)",
      "Vulnerability Management (Nessus, Qualys)",
      "Penetration Testing (Metasploit, Burp Suite)",
    ],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: [
      "RAG Agents",
      "N8N Automation",
      "MCP Servers",
      "Python Scripting",
      "PowerShell",
      "Bash/Shell Scripting",
    ],
  },
  {
    title: "Programming & Development",
    icon: Code,
    skills: [
      "Python (Security Automation)",
      "JavaScript / TypeScript",
      "Next.js / React",
      "SQL / NoSQL Databases",
      "API Development",
    ],
  },
  {
    title: "Technical Skills",
    icon: Database,
    skills: [
      "Network Architecture & Design",
      "Active Directory Administration",
      "Virtualization (Proxmox, VMware, Hyper-V)",
      "N8N Workflows",
      "CI/CD Pipelines",
    ],
  },
];

export default function AboutPage() {
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
          <div className="orb-cyan w-[500px] h-[500px] top-[-10%] left-[10%] opacity-20" style={{ animationDelay: '3s' }} />
          <div className="orb-red w-[400px] h-[400px] bottom-[10%] right-[10%] opacity-20" style={{ animationDelay: '8s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
              About <span className="text-gradient-neon">Nicholas James Vidal</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              15 years leading cyber defense strategy, incident response, and secure infrastructure design
            </p>
            <div className="accent-bar-neon mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Biography & Certifications Section */}
      <section className="section-cinematic relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-white flex items-center gap-3">
                <Zap className="h-8 w-8 text-neon-cyan" />
                My Story
              </h2>
              <div className="accent-bar-neon" />
              
              <p className="text-lg text-slate-300 leading-relaxed">
                With over 15 years of experience in cybersecurity, I&apos;ve dedicated my career to protecting organizations from evolving cyber threats through strategic defense planning, incident response, and secure infrastructure design.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently serving as a Senior Cybersecurity Director in the United States Air Force, I lead division-wide cyber defense initiatives, manage critical incident responses, and ensure compliance with NIST and AFI standards across multi-million-dollar network infrastructures.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                My expertise spans Digital Forensics & Incident Response (DFIR), malware analysis, cloud security architecture, and AI-augmented security automation. I&apos;m passionate about leveraging cutting-edge technology to stay ahead of adversaries and build resilient defense systems.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Beyond traditional cybersecurity, I&apos;m actively developing AI-powered tools including RAG agents, N8N automation workflows, and MCP servers to enhance operational efficiency and threat detection capabilities.
              </p>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-holographic p-8"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                <Award className="h-7 w-7 text-neon-cyan" />
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={cert}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-300 border-b border-neon-cyan/20 pb-3"
                  >
                    <span className="text-neon-cyan text-2xl">▸</span>
                    <span className="text-lg">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-cinematic relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Technical <span className="text-gradient-cyber">Expertise</span>
            </h2>
            <div className="accent-bar-neon mx-auto" />
            <p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto">
              Advanced capabilities across security operations, cloud architecture, and AI-powered automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card-holographic p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-red/20 flex items-center justify-center border border-neon-cyan/30">
                      <Icon className="h-6 w-6 text-neon-cyan" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-slate-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-neon-cyan mt-1">▸</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
