"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Zap, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/lib/data";
const highlights = [
    { icon: Code, label: "Clean Code", description: "Well-structured & maintainable" },
    { icon: Zap, label: "Fast Delivery", description: "Efficient development process" },
    { icon: Users, label: "Team Player", description: "Great collaboration skills" },
    { icon: Lightbulb, label: "Problem Solver", description: "Creative solutions" },
];
export function AboutSummary() {
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.6s ease-out",
        }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {aboutData.introduction}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {aboutData.techJourney.current}
              </p>
              <Button asChild className="gap-2 rounded-full">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="h-4 w-4"/>
                </Link>
              </Button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.6s ease-out 0.2s",
        }}>
              {highlights.map((item, index) => (<div key={item.label} className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg" style={{
                transitionDelay: `${index * 100}ms`,
            }}>
                  <div className="w-12 h-12 mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6"/>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
