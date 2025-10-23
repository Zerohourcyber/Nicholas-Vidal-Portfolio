"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Shield, Brain, Cloud, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    icon: Shield,
    title: "DFIR",
    description: "Digital Forensics & Incident Response",
  },
  {
    icon: Brain,
    title: "AI Security",
    description: "AI-augmented threat detection",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "AWS, Azure, GCP architecture",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb orb-blue w-[600px] h-[600px] top-[-10%] left-[-5%]" style={{ animationDelay: '0s' }} />
          <div className="orb orb-gold w-[500px] h-[500px] bottom-[-10%] right-[-5%]" style={{ animationDelay: '5s' }} />
          <div className="orb orb-blue w-[400px] h-[400px] top-[40%] right-[10%]" style={{ animationDelay: '10s' }} />
        </div>

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full"
              >
                <Sparkles className="h-4 w-4 text-accent-600" />
                <span className="text-sm font-semibold text-steel-800">
                  Nicholas James Vidal
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-[1.1] tracking-tight"
              >
                Senior Cybersecurity Director &{" "}
                <span className="text-gradient block mt-2">
                  DFIR Expert
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-steel-600 leading-relaxed"
              >
                <span className="font-semibold text-steel-900">15 years</span> leading cyber defense strategy, incident response, and secure infrastructure design. Proficient in{" "}
                <span className="text-gradient-blue font-medium">DFIR, malware analysis</span>, and{" "}
                <span className="text-gradient-gold font-medium">AI-augmented security automation</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button size="lg" className="shadow-glow-accent group" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </Button>

                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass hover:bg-white/90 group"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Let&apos;s Connect
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              {/* Stats with Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-12"
              >
                {[
                  { value: "15+", label: "Years Experience", icon: Shield, color: "cyber" },
                  { value: "260+", label: "Systems Secured", icon: Cloud, color: "sapphire" },
                  { value: "46K", label: "Users Protected", icon: Brain, color: "accent" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="glass p-4 rounded-xl text-center group hover:shadow-card transition-all"
                  >
                    <stat.icon className={`h-6 w-6 mx-auto mb-2 text-${stat.color}-500`} />
                    <p className="text-3xl md:text-4xl font-bold text-steel-900 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-steel-600">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image with Cinematic Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative w-[450px] h-[500px]">
                {/* Animated Glow Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-sapphire-400 to-accent-400 rounded-full blur-3xl"
                />
                
                {/* Glass Frame */}
                <div className="relative w-full h-full glass rounded-full overflow-hidden shadow-depth ring-2 ring-white/50">
                  <Image
                    src="/profile.jpg.jfif"
                    alt="Nicholas Vidal"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sapphire-500/5 to-accent-500/5 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent-500 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-accent-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Competencies Section */}
      <section className="section-pro bg-gradient-to-br from-white via-cyber-50/20 to-sapphire-50/20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Core <span className="text-gradient">Competencies</span>
            </h2>
            <div className="accent-bar mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-cinematic text-center group cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sapphire-100 to-accent-100 rounded-2xl mb-6 group-hover:shadow-glow-blue transition-all duration-300">
                    <Icon className="h-8 w-8 text-sapphire-600" />
                  </div>
                  <h3 className="text-xl font-bold text-steel-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-steel-600">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-pro overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-900 via-cyber-800 to-steel-900" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sapphire-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Strengthen Your Cyber Defenses?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how 15 years of cybersecurity expertise can help protect your organization&apos;s critical infrastructure.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent-500 to-sunset-500 hover:from-accent-600 hover:to-sunset-600 text-white shadow-glow-accent text-lg px-10 hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
