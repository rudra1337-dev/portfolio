import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SceneBackground } from "@/components/3d/scene-background"

import HomePage from "@/app/page"
import AboutPage from "@/app/about/page"
import SkillsPage from "@/app/skills/page"
import ProjectsPage from "@/app/projects/page"
import BlogPage from "@/app/blog/page"
import BlogDetailPage from "@/app/blog/[id]/page"
import ContactPage from "@/app/contact/page"
import AdminPage from "@/app/admin/page"

function AppLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <SceneBackground />
      <Navigation />
      <main className="min-h-screen relative">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
