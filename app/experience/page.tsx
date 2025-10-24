"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TimelineItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
}

const experienceData: TimelineItem[] = [
  {
    title: "Senior Cybersecurity Director",
    company: "United States Air Force",
    location: "Various Domestic and Global Locations",
    period: "August 2023 - Present",
    description:
      "Spearhead cybersecurity strategy and operations, ensuring adherence to NIST and AFI standards across a multi-million-dollar network infrastructure.",
    highlights: [
      "Lead division-wide cyber defense initiative, coordinating cyber incident responses, risk assessments, and continuous threat monitoring",
      "Serve as executive point of contact for cybersecurity-related incidents, providing leadership during high-pressure situations",
      "Managed cybersecurity inspections and risk mitigation for critical IT systems using NIST SP 800-53 and SP 800-37 standards",
      "Conducted post-incident analysis, collaborating with cross-functional teams to drive process improvements and develop proactive defense measures",
    ],
  },
  {
    title: "Cybersecurity Analyst",
    company: "United States Air Force",
    location: "Various Domestic and Global Locations",
    period: "August 2021 – August 2023",
    description:
      "Managed and secured 260 classified and unclassified cyber systems across 9 bases, supporting 46,000 users with mission-critical IT services.",
    highlights: [
      "Led Defense Cyber Operations, implementing proactive security measures and responding to real-time cyber incidents",
      "Directed a $500K cybersecurity budget, allocating resources effectively to improve network security and incident response capabilities",
      "Conducted incident analysis and remediation, ensuring compliance with cybersecurity frameworks",
      "Improved organizational readiness for cyber threats through continuous security assessments",
    ],
  },
  {
    title: "Enterprise Communication Operations Lead",
    company: "United States Air Force",
    location: "Various Domestic and Global Locations",
    period: "June 2017 – March 2021",
    description:
      "Led the secure deployment of communication packages for a major U.S. Air Force network, collaborating with security teams to strengthen network defenses.",
    highlights: [
      "Directed communication operations for a 46,000-user enterprise network, ensuring secure connectivity across 9 geographically separated bases",
      "Collaborated with cybersecurity teams to implement secure communication protocols aligned with DoD requirements",
      "Managed incident response procedures, minimizing downtime and ensuring continuity of mission-critical services",
      "Supervised a team of 30 personnel, providing training and technical guidance on secure communication systems",
    ],
  },
  {
    title: "Senior IT Program Manager",
    company: "United States Air Force",
    location: "Various Domestic and Global Locations",
    period: "May 2014 – June 2017",
    description:
      "Oversaw IT operations and project management initiatives, coordinating infrastructure upgrades and security improvements.",
    highlights: [
      "Managed multi-million-dollar IT infrastructure projects, ensuring on-time delivery and compliance with security standards",
      "Developed and executed strategic plans to modernize legacy systems and improve network resilience",
      "Coordinated with cybersecurity teams to integrate security best practices into IT operations",
      "Led cross-functional teams in implementing enterprise-wide technology solutions",
    ],
  },
];

export default function ExperiencePage() {
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
          <div className="orb-cyan w-[500px] h-[500px] top-[-10%] left-[10%] opacity-20" style={{ animationDelay: '4s' }} />
          <div className="orb-red w-[400px] h-[400px] bottom-[10%] right-[10%] opacity-20" style={{ animationDelay: '9s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
              Professional <span className="text-gradient-neon">Experience</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              15+ years of cybersecurity leadership across critical defense infrastructure
            </p>
            <div className="accent-bar-neon mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-cinematic relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-red to-neon-cyan" />

            {/* Timeline Items */}
            {experienceData.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 pb-16 last:pb-0"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-6 top-2 w-5 h-5 rounded-full bg-neon-cyan shadow-glow-cyan border-4 border-space-300"
                />

                {/* Content Card */}
                <div className="card-holographic p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400 text-sm mb-4">
                      <span className="flex items-center gap-2 text-neon-cyan font-semibold">
                        <Briefcase className="h-4 w-4" />
                        {item.company}
                      </span>
                      {item.location && (
                        <>
                          <span className="hidden sm:inline text-neon-cyan">•</span>
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <Calendar className="h-4 w-4 text-neon-red" />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Shield className="h-5 w-5 text-neon-cyan" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                          className="flex items-start gap-3 text-slate-400"
                        >
                          <CheckCircle2 className="h-5 w-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
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
              Ready to Work <span className="text-glow-red">Together</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how 15 years of cybersecurity leadership can benefit your organization
            </p>
            <Button 
              size="lg" 
              className="btn-neon-cyan text-white font-bold hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
