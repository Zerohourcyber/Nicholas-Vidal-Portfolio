"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail, Shield, Brain, Cloud, Sparkles, Zap, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    icon: Shield,
    title: "DFIR & Incident Response",
    description: "15+ years of digital forensics and rapid threat mitigation",
  },
  {
    icon: Brain,
    title: "AI-Augmented Security",
    description: "RAG agents, automation, and intelligent threat detection",
  },
  {
    icon: Cloud,
    title: "Cloud Security Architecture",
    description: "AWS, Azure, GCP infrastructure hardening & compliance",
  },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      {/* Hero Section - Cinematic Dark with Cosmic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Luminous Spiral Background Video */}
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
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-space-900/60 via-space-900/40 to-space-900/80" />
        </div>
        
        {/* Subtle Animated Orbs (lighter now that we have video) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-cyan w-[400px] h-[400px] top-[-10%] left-[5%] opacity-30" style={{ animationDelay: '0s' }} />
          <div className="orb-red w-[300px] h-[300px] bottom-[10%] right-[5%] opacity-30" style={{ animationDelay: '5s' }} />
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-full border border-neon-cyan/30"
              >
                <Sparkles className="h-4 w-4 text-glow-cyan" />
                <span className="text-sm font-semibold text-neon-cyan">
                  Nicholas James Vidal
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-[1.1] tracking-tight text-white"
              >
                Senior Cybersecurity Director &{" "}
                <span className="text-gradient-neon block mt-2">
                  DFIR Expert
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-slate-300 leading-relaxed"
              >
                <span className="font-semibold text-glow-cyan">15 years</span> leading cyber defense strategy, incident response, and secure infrastructure design. Proficient in{" "}
                <span className="text-neon-cyan font-medium">DFIR, malware analysis</span>, and{" "}
                <span className="text-neon-red font-medium">AI-augmented security automation</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a href="/resume.pdf" download className="btn-neon-cyan text-white font-bold shadow-neon-cyan inline-flex items-center justify-center px-8 py-4 text-lg rounded-lg group">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>

                <Link href="/contact" className="glass-dark border-2 border-neon-cyan/30 hover:border-neon-red/50 text-white font-bold group transition-all inline-flex items-center justify-center px-8 py-4 text-lg rounded-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Let&apos;s Connect
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-12"
              >
                {[
                  { value: "15+", label: "Years Experience", icon: Shield },
                  { value: "260+", label: "Systems Secured", icon: Lock },
                  { value: "46K", label: "Users Protected", icon: Zap },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      className="glass-dark p-4 rounded-xl text-center group hover:border-neon-cyan/30 border border-transparent transition-all"
                    >
                      <Icon className="h-6 w-6 mx-auto mb-2 text-neon-cyan" />
                      <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-400">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Profile Video with Genie Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative w-[350px] h-[350px]">
                {/* Animated Glow Rings - Blue to Red Pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-red rounded-full blur-3xl"
                  style={{ filter: 'blur(100px)' }}
                />

                {/* Secondary Pulse Ring */}
                <motion.div
                  animate={{
                    scale: [1.1, 1.2, 1.1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-neon-red to-neon-cyan rounded-full blur-3xl"
                  style={{ filter: 'blur(120px)' }}
                />
                
                {/* Profile Image Container with Holographic Border */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neon-cyan/40 shadow-neon-cyan neon-border">
                  <Image
                    src="/nick 4.jpg"
                    alt="Nicholas James Vidal"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    priority
                  />
                  {/* Holographic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-red/10 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center pt-2 shadow-glow-cyan"
          >
            <motion.div className="w-1 h-2 bg-neon-cyan rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Competencies Section */}
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
              Core <span className="text-gradient-cyber">Competencies</span>
            </h2>
            <div className="accent-bar-neon mx-auto" />
            <p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto">
              Defending critical infrastructure through advanced security operations and AI-powered automation
            </p>
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
                  whileHover={{ y: -8 }}
                  className="card-holographic p-8 text-center group cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-red/20 rounded-2xl mb-6 group-hover:shadow-glow-cyan transition-all duration-300 border border-neon-cyan/30">
                    <Icon className="h-8 w-8 text-neon-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-slate-400">{skill.description}</p>
                </motion.div>
              );
            })}
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
              Ready to <span className="text-glow-cyan">Strengthen</span> Your Cyber Defenses?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how 15 years of cybersecurity expertise can help protect your organization&apos;s critical infrastructure.
            </p>
            <Link href="/contact" className="btn-neon-red text-white text-lg px-10 font-bold hover:scale-105 transition-transform inline-flex items-center justify-center py-4 rounded-lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
