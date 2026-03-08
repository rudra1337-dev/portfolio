"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { blogs } from "@/lib/data";
import { Interactive3DCard } from "@/components/3d/interactive-card";
import { Hover3DButton } from "@/components/3d/hover-button";
const latestBlogs = blogs.slice(0, 3);
export function LatestBlogs() {
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
            month: "short",
            day: "numeric",
        });
    };
    return (<section ref={sectionRef} className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12" style={{ perspective: "1000px" }}>
            {latestBlogs.map((blog, index) => (<motion.article key={blog.id} className="group" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }}>
                <Link to={`/blog/${blog.id}`}>
                  <Interactive3DCard rotationIntensity={12}>
                    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
                      {/* Image */}
                      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                        <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                          <span className="text-7xl font-bold text-foreground/10">
                            {blog.title.slice(0, 2)}
                          </span>
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent"/>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4"/>
                          <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {blog.title}
                        </h3>

                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </Interactive3DCard>
                </Link>
              </motion.article>))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/blog">
              <Hover3DButton variant="outline" className="gap-2">
                View All Posts
                <ArrowRight className="h-4 w-4"/>
              </Hover3DButton>
            </Link>
          </div>
        </div>
      </div>
    </section>);
}
