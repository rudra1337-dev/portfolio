"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, Heart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutData, skills } from "@/lib/data";
export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const techJourney = aboutData.techJourney ?? aboutData.tech ?? {};
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);
    const allSkills = [
        ...skills.frontend.slice(0, 3),
        ...skills.backend.slice(0, 2),
        ...skills.database.slice(0, 2),
    ];
    return (<div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-10 text-center">
              About Me
            </h1>
            <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-10 items-center">
              <div className="mx-auto md:mx-0 w-full max-w-[320px]">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <img
                    src="/profile-pic.jpeg"
                    alt="Rudra Narayan Maharana"
                    className="h-[360px] w-full object-cover"
                  />
                </div>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-left">
                {aboutData.introduction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.6s ease-out",
        }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What I Do
                </h2>
                <ul className="space-y-4">
                  {aboutData.responsibilities.map((item, index) => (<li key={index} className="flex items-start gap-3" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.5s ease-out",
                transitionDelay: `${index * 100}ms`,
            }}>
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"/>
                      <span className="text-muted-foreground">{item}</span>
                    </li>))}
                </ul>
              </div>

              {/* Strengths */}
              <div className="grid grid-cols-2 gap-4" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.6s ease-out 0.2s",
        }}>
                {aboutData.strengths.map((strength, index) => (<div key={strength.title} className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300" style={{
                transitionDelay: `${index * 100}ms`,
            }}>
                    <h3 className="font-semibold text-foreground mb-2">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Technologies I Work With
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {allSkills.map((skill) => (<span key={skill.name} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  {skill.name}
                </span>))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Journey */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              My Journey
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6"/>
                  </div>
                  <div className="w-0.5 h-full bg-border mt-4"/>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    How It Started
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {techJourney.start ?? ""}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-foreground flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6"/>
                  </div>
                  <div className="w-0.5 h-full bg-border mt-4"/>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    What Drives Me
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {techJourney.motivation ?? ""}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-foreground flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6"/>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Where I Am Now
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {techJourney.current ?? ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              My Goals
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutData.goals.map((goal, index) => (<div key={index} className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-foreground">{goal}</p>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </section>

      {/* Personality */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Beyond the Code
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Hobbies & Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.personality.hobbies.map((hobby) => (<span key={hobby} className="px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground">
                      {hobby}
                    </span>))}
                </div>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  My Mindset
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutData.personality.mindset}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Want to know more?
            </h2>
            <p className="text-muted-foreground mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button asChild size="lg" className="gap-2 rounded-full">
              <Link to="/contact">
                Contact Me
                <ArrowRight className="h-4 w-4"/>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>);
}
