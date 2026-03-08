"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Heart } from "lucide-react";
import { blogs, personalInfo } from "@/lib/data";
export default function BlogPage() {
    const [isVisible, setIsVisible] = useState(false);
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
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12)
            return "Good morning";
        if (hour < 18)
            return "Good afternoon";
        return "Good evening";
    };
    return (<div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-2">{getGreeting()}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Thoughts, tutorials, and insights on web development, design patterns, and building great software.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogs.map((blog, index) => (<article key={blog.id} className="group" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.5s ease-out",
                transitionDelay: `${index * 100}ms`,
            }}>
                  <Link to={`/blog/${blog.id}`}>
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-52 bg-gradient-to-br from-secondary to-muted overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-7xl font-bold text-foreground/5">
                            {blog.title.slice(0, 2)}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"/>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4"/>
                            <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4"/>
                            <span>{blog.likes}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {blog.title}
                        </h2>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                          {blog.description}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                            <span className="text-xs font-bold">
                              {personalInfo.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {blog.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>))}
            </div>
          </div>
        </div>
      </section>
    </div>);
}
