"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Interactive3DCard } from "@/components/3d/interactive-card";
import { Hover3DButton } from "@/components/3d/hover-button";
import { MagneticWrapper, GlowingOrb } from "@/components/3d/floating-element";
export function ContactSnippet() {
    return (<section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <GlowingOrb color="primary" size={300} className="top-0 left-1/4 -translate-y-1/2"/>
      <GlowingOrb color="accent" size={250} className="bottom-0 right-1/4 translate-y-1/2"/>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Interactive3DCard rotationIntensity={8}>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-12 text-center shadow-xl">
                <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  Let&apos;s Work Together
                </motion.h2>
                <motion.p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  Have a project in mind? I&apos;d love to hear about it. Let&apos;s chat and see how I can help bring your ideas to life.
                </motion.p>

                {/* Contact Info */}
                <motion.div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <MagneticWrapper strength={0.3}>
                    <motion.a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Mail className="h-5 w-5"/>
                      <span>{personalInfo.email}</span>
                    </motion.a>
                  </MagneticWrapper>
                  <MagneticWrapper strength={0.3}>
                    <motion.a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Phone className="h-5 w-5"/>
                      <span>{personalInfo.phone}</span>
                    </motion.a>
                  </MagneticWrapper>
                  <MagneticWrapper strength={0.3}>
                    <span className="flex items-center gap-2 text-muted-foreground p-2">
                      <MapPin className="h-5 w-5"/>
                      <span>{personalInfo.location}</span>
                    </span>
                  </MagneticWrapper>
                </motion.div>

                <Link to="/contact">
                  <Hover3DButton variant="primary" className="gap-2 px-8 text-lg">
                    Get In Touch
                    <ArrowRight className="h-5 w-5"/>
                  </Hover3DButton>
                </Link>
              </div>
            </Interactive3DCard>
          </motion.div>
        </div>
      </div>
    </section>);
}
