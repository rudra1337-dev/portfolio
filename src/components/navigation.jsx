"use client";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];
export function Navigation() {
    const { pathname } = useLocation();
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent")}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
            <Code2 className="h-6 w-6"/>
            <span>Rudra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (<Link key={link.href} to={link.href} className={cn("px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200", pathname === link.href
                ? "text-foreground bg-secondary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50")}>
                {link.label}
              </Link>))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (<Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-lg">
                {theme === "dark" ? (<Sun className="h-5 w-5"/>) : (<Moon className="h-5 w-5"/>)}
                <span className="sr-only">Toggle theme</span>
              </Button>)}

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden rounded-lg" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-4" : "max-h-0")}>
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (<Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={cn("px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", pathname === link.href
                ? "text-foreground bg-secondary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50")}>
                {link.label}
              </Link>))}
          </div>
        </div>
      </nav>
    </header>);
}
