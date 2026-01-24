"use client"

import { Button } from "@/components/ui/button"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"
import { Interactive3DCard } from "@/components/3d/interactive-card"
import { Hover3DButton } from "@/components/3d/hover-button"

const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

export function FeaturedProjects() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Some of my recent work that I&apos;m proud of
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12" style={{ perspective: "1000px" }}>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Interactive3DCard className="h-full" rotationIntensity={10}>
                  <article className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-7xl font-bold text-foreground/10">
                          {project.title.slice(0, 2)}
                        </span>
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-secondary/80 rounded-md text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-secondary/80 rounded-md text-muted-foreground">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                          aria-label="View code on GitHub"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </article>
                </Interactive3DCard>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/projects">
              <Hover3DButton variant="primary" className="gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Hover3DButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
