"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skills } from "@/lib/data";
import { Interactive3DCard } from "@/components/3d/interactive-card";
import { Hover3DButton } from "@/components/3d/hover-button";
import { MagneticWrapper } from "@/components/3d/floating-element";
const topSkills = [
    ...skills.frontend.slice(0, 2),
    ...skills.backend.slice(0, 2),
    ...skills.database.slice(0, 1),
    ...skills.other.slice(0, 1),
];
export function SkillsSnapshot() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.2 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);
    return (<section ref={sectionRef} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12" style={{ perspective: "1000px" }}>
            {topSkills.map((skill, index) => (<motion.div key={skill.name} initial={{ opacity: 0, y: 30, rotateX: -15 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <MagneticWrapper strength={0.3}>
                  <Interactive3DCard rotationIntensity={15}>
                    <div className="group relative p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-xl">
                      <div className="text-center">
                        <motion.div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300" whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95 }}>
                          <span className="text-lg font-bold">{skill.name.slice(0, 2)}</span>
                        </motion.div>
                        <h3 className="font-semibold text-foreground mb-2 text-sm">
                          {skill.name}
                        </h3>
                        <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                          <motion.div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}/>
                        </div>
                        <span className="text-xs text-muted-foreground mt-2 block">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </Interactive3DCard>
                </MagneticWrapper>
              </motion.div>))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/skills">
              <Hover3DButton variant="outline" className="gap-2">
                View All Skills
                <ArrowRight className="h-4 w-4"/>
              </Hover3DButton>
            </Link>
          </div>
        </div>
      </div>
    </section>);
}
