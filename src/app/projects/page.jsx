"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
export default function ProjectsPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);
    const sectionRef = useRef(null);
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
    const filteredProjects = activeFilter
        ? projects.filter((p) => p.tags.includes(activeFilter))
        : projects;
    return (<div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of projects I&apos;ve built, from full-stack applications to UI experiments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="h-4 w-4"/>
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <button onClick={() => setActiveFilter(null)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === null
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                All Projects
              </button>
              {allTags.map((tag) => (<button key={tag} onClick={() => setActiveFilter(tag)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${activeFilter === tag
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                  {tag}
                </button>))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (<article key={project.id} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.5s ease-out",
                transitionDelay: `${index * 100}ms`,
            }}>
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/5"/>
                    
                    {/* Featured Badge */}
                    {project.featured && (<div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>)}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (<Badge key={tag} variant="secondary" className="text-xs capitalize">
                          {tag}
                        </Badge>))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (<span key={tech} className="text-xs px-2.5 py-1 bg-secondary rounded-md text-muted-foreground font-medium">
                          {tech}
                        </span>))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                        <ExternalLink className="h-4 w-4"/>
                        Live Demo
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2.5 border border-border rounded-xl hover:bg-secondary transition-colors" aria-label="View source code on GitHub">
                        <Github className="h-5 w-5"/>
                      </a>
                    </div>
                  </div>
                </article>))}
            </div>

            {filteredProjects.length === 0 && (<div className="text-center py-16">
                <p className="text-muted-foreground">
                  No projects found with the selected filter.
                </p>
              </div>)}
          </div>
        </div>
      </section>
    </div>);
}
