"use client";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];
const socialLinks = [
    { href: personalInfo.github, icon: Github, label: "GitHub" },
    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: personalInfo.twitter, icon: Twitter, label: "Twitter" },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
];
export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (<footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <Code2 className="h-6 w-6"/>
              <span>{personalInfo.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
              {personalInfo.tagline} Let&apos;s build something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (<a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200" aria-label={social.label}>
                  <social.icon className="h-4 w-4"/>
                </a>))}
            </div>
          </div>








          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (<li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>))}
            </ul>
          </div>







          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-foreground transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>










        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <Button variant="outline" size="sm" onClick={scrollToTop} className="gap-2 bg-transparent">
            <ArrowUp className="h-4 w-4"/>
            Back to Top
          </Button>
        </div>
      </div>
    </footer>);
}
