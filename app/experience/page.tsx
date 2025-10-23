"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
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
      {/* Hero Banner */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="orb orb-blue w-[500px] h-[500px] top-[-10%] right-[5%]" style={{ animationDelay: '4s' }} />
          <div className="orb orb-gold w-[400px] h-[400px] bottom-[10%] left-[5%]" style={{ animationDelay: '9s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-xl text-steel-600 leading-relaxed mb-6">
              A proven track record of leadership in cybersecurity operations, incident response, and strategic defense planning
            </p>
            <div className="accent-bar mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-pro bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-accent-500 hidden md:block" />

            <div className="space-y-16">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-5 -ml-4 w-6 h-6 bg-accent-600 rounded-full border-4 border-white shadow-md" />

                  {/* Content Card */}
                  <div className="md:ml-24">
                    <div className="card-cinematic">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-sapphire-50 flex items-center justify-center flex-shrink-0">
                              <Briefcase className="h-6 w-6 text-sapphire-600" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-serif font-bold text-steel-900">
                                {item.title}
                              </h3>
                              <p className="text-lg font-semibold text-sapphire-600">
                                {item.company}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 text-steel-600 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                          {item.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-steel-700 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-bold text-steel-900 uppercase tracking-wide mb-4">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {item.highlights.map((highlight, hIndex) => (
                            <motion.li
                              key={hIndex}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: hIndex * 0.1, duration: 0.5 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-accent-600" />
                              </div>
                              <span className="text-steel-700 leading-relaxed">
                                {highlight}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pro bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-steel-900 mb-6">
              Explore My Work
            </h2>
            <p className="text-xl text-steel-600 mb-8 max-w-2xl mx-auto">
              See how I apply this experience to real-world projects and solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent-600 hover:bg-accent-700 text-white" asChild>
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-steel-300 hover:border-accent-500 hover:bg-accent-50/50" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
