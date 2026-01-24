import { HeroSection } from "@/components/home/hero-section"
import { SkillsSnapshot } from "@/components/home/skills-snapshot"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { AboutSummary } from "@/components/home/about-summary"
import { LatestBlogs } from "@/components/home/latest-blogs"
import { ContactSnippet } from "@/components/home/contact-snippet"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSnapshot />
      <FeaturedProjects />
      <AboutSummary />
      <LatestBlogs />
      <ContactSnippet />
    </div>
  )
}
