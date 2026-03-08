"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { FloatingElement, MagneticWrapper, GlowingOrb } from "@/components/3d/floating-element";
import { Hover3DButton } from "@/components/3d/hover-button";
export function HeroSection() {
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = container.getBoundingClientRect();
            const x = (clientX - left - width / 2) / 25;
            const y = (clientY - top - height / 2) / 25;
            container.style.setProperty("--mouse-x", `${x}px`);
            container.style.setProperty("--mouse-y", `${y}px`);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (<section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" style={{ "--mouse-x": "0px", "--mouse-y": "0px" }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background/80"/>
      <GlowingOrb color="accent" size={400} className="top-1/4 left-1/4" pulseIntensity={1.3}/>
      <GlowingOrb color="primary" size={350} className="bottom-1/4 right-1/4" pulseIntensity={1.2}/>
      <GlowingOrb color="accent" size={200} className="top-1/2 right-1/3" pulseIntensity={1.4}/>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <FloatingElement delay={0} duration={4} yOffset={15} className="mb-8 inline-block">
            <MagneticWrapper strength={0.2}>


              <motion.div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto cursor-pointer" whileHover={{ scale: 1.1, rotateY: 10 }} whileTap={{ scale: 0.95 }} style={{ transformStyle: "preserve-3d" }}>
                {/* Rotating gradient ring */}
                <motion.div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-40" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}/>

                {/* Glass background */}
                <div className="absolute inset-[6px] rounded-full bg-background/90 backdrop-blur-md"/>

                {/* Image container (no overlap) */}
                <div className="absolute inset-[12px] rounded-full overflow-hidden border border-primary/20">
                  <img
                    src="/profile-pic.jpeg"
                    alt="Rudra Narayan Maharana"
                    className="h-full w-full object-cover transition-all duration-500 hover:grayscale"
                  />
                </div>
              </motion.div>

            </MagneticWrapper>
          </FloatingElement>








          {/* Title */}
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <span className="text-balance">{personalInfo.name}</span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-primary font-medium mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            {personalInfo.title}
          </motion.p>

          <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-balance" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            {personalInfo.tagline}
          </motion.p>







          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap items-center justify-center gap-4 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Link to="/projects">
              <Hover3DButton variant="primary" className="gap-2 px-8">
                View My Work
                <ArrowRight className="h-4 w-4"/>
              </Hover3DButton>
            </Link>
            <a href={personalInfo.resumeUrl} download>
              <Hover3DButton variant="outline" className="gap-2 px-8">
                <Download className="h-4 w-4"/>
                Download Resume
              </Hover3DButton>
            </a>
          </motion.div>







          {/* Social Links */}
          <motion.div className="flex items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}>
            {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: personalInfo.twitter, icon: Twitter, label: "Twitter" },
        ].map((social, index) => (<MagneticWrapper key={social.label} strength={0.4}>
                <motion.a href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/80 backdrop-blur-sm border border-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors duration-300" aria-label={social.label} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 + index * 0.1 }}>
                  <social.icon className="h-5 w-5"/>
                </motion.a>
              </MagneticWrapper>))}
          </motion.div>
        </div>








        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse"/>
          </div>
        </div>
      </div>
    </section>);
}
