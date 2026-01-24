"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Server, Database, FileCode, Wrench } from "lucide-react"
import { skills } from "@/lib/data"

const categories = [
  { key: "frontend", label: "Frontend", icon: Code, data: skills.frontend },
  { key: "backend", label: "Backend", icon: Server, data: skills.backend },
  { key: "database", label: "Database", icon: Database, data: skills.database },
  { key: "languages", label: "Languages", icon: FileCode, data: skills.languages },
  { key: "other", label: "Other Skills", icon: Wrench, data: skills.other },
]

export default function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("frontend")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getSkillLevel = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 75) return "Advanced"
    if (level >= 60) return "Intermediate"
    return "Learning"
  }

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive overview of my technical skills and the technologies I use to build amazing products.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-background border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {categories.map((category) => (
              <div
                key={category.key}
                className={activeCategory === category.key ? "block" : "hidden"}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.label}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.data.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-lg"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.5s ease-out",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <span className="text-sm font-bold">
                              {skill.name.slice(0, 2)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {skill.name}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                              {getSkillLevel(skill.level)}
                            </span>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Skill Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-1000"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 100 + 300}ms`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Skills Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category, catIndex) => {
                const avgLevel = Math.round(
                  category.data.reduce((acc, skill) => acc + skill.level, 0) /
                    category.data.length
                )
                return (
                  <div
                    key={category.key}
                    className="p-6 bg-card border border-border rounded-2xl text-center hover:border-primary/50 transition-all duration-300"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.5s ease-out",
                      transitionDelay: `${catIndex * 100}ms`,
                    }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                      <category.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {category.label}
                    </h3>
                    <div className="relative w-20 h-20 mx-auto mb-2">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-secondary"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-primary"
                          strokeDasharray={`${avgLevel * 2.2} 220`}
                          strokeLinecap="round"
                          style={{
                            transition: "stroke-dasharray 1s ease-out",
                            transitionDelay: `${catIndex * 200}ms`,
                          }}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-foreground">
                        {avgLevel}%
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.data.length} skills
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
