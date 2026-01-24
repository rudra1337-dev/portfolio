"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, FileText, FolderOpen, Settings, LogOut, Search, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { blogs, projects } from "@/lib/data"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Loading from "./loading"

type Tab = "blogs" | "projects" | "settings"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("blogs")
  const [searchQuery, setSearchQuery] = useState("")
  const [blogsList, setBlogsList] = useState(blogs)
  const [projectsList, setProjectsList] = useState(projects)
  const searchParams = useSearchParams()

  const filteredBlogs = blogsList.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredProjects = projectsList.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDeleteBlog = (id: string) => {
    setBlogsList((prev) => prev.filter((blog) => blog.id !== id))
  }

  const handleDeleteProject = (id: string) => {
    setProjectsList((prev) => prev.filter((project) => project.id !== id))
  }

  const tabs = [
    { id: "blogs" as Tab, label: "Blog Posts", icon: FileText, count: blogsList.length },
    { id: "projects" as Tab, label: "Projects", icon: FolderOpen, count: projectsList.length },
    { id: "settings" as Tab, label: "Settings", icon: Settings, count: null },
  ]

  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-20 min-h-screen bg-background">
        <div className="flex">
          {/* Sidebar */}
          <aside className="fixed left-0 top-20 bottom-0 w-64 bg-card border-r border-border p-4 hidden lg:block">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-foreground mb-1">Admin Panel</h2>
                <p className="text-sm text-muted-foreground">Manage your content</p>
              </div>

              <nav className="space-y-1 flex-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <tab.icon className="h-5 w-5" />
                      {tab.label}
                    </div>
                    {tab.count !== null && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === tab.id
                          ? "bg-primary-foreground/20"
                          : "bg-secondary"
                        }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              <button className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-destructive transition-colors">
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-64">
            <div className="p-6 lg:p-8">
              {/* Mobile Tab Navigation */}
              <div className="lg:hidden mb-6 flex gap-2 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                      }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    {activeTab === "blogs" && "Blog Posts"}
                    {activeTab === "projects" && "Projects"}
                    {activeTab === "settings" && "Settings"}
                  </h1>
                  <p className="text-muted-foreground">
                    {activeTab === "blogs" && "Manage your blog posts and articles"}
                    {activeTab === "projects" && "Manage your portfolio projects"}
                    {activeTab === "settings" && "Configure your portfolio settings"}
                  </p>
                </div>
                {activeTab !== "settings" && (
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add New
                  </Button>
                )}
              </div>

              {/* Search */}
              {activeTab !== "settings" && (
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={`Search ${activeTab}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              )}

              {/* Blog Posts Tab */}
              {activeTab === "blogs" && (
                <div className="space-y-4">
                  {filteredBlogs.length === 0 ? (
                    <div className="text-center py-12 bg-card border border-border rounded-2xl">
                      <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">No blog posts found</p>
                    </div>
                  ) : (
                    filteredBlogs.map((blog) => (
                      <div
                        key={blog.id}
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold text-muted-foreground">
                            {blog.title.slice(0, 2)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground truncate">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-muted-foreground truncate">
                            {blog.description}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">
                              {new Date(blog.date).toLocaleDateString()}
                            </span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">
                              {blog.likes} likes
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 text-destructive hover:text-destructive"
                            onClick={() => handleDeleteBlog(blog.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === "projects" && (
                <div className="space-y-4">
                  {filteredProjects.length === 0 ? (
                    <div className="text-center py-12 bg-card border border-border rounded-2xl">
                      <FolderOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">No projects found</p>
                    </div>
                  ) : (
                    filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold text-muted-foreground">
                            {project.title.slice(0, 2)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground truncate">
                              {project.title}
                            </h3>
                            {project.featured && (
                              <Badge variant="secondary" className="text-xs">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-0.5 bg-secondary rounded text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 text-destructive hover:text-destructive"
                            onClick={() => handleDeleteProject(project.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Profile Settings
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Display Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Alex Chen"
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="alex@example.com"
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={3}
                          defaultValue="Full Stack Developer specializing in React and Node.js"
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        />
                      </div>
                    </div>
                    <Button className="mt-4">Save Changes</Button>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Social Links
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          GitHub
                        </label>
                        <input
                          type="url"
                          defaultValue="https://github.com"
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          LinkedIn
                        </label>
                        <input
                          type="url"
                          defaultValue="https://linkedin.com"
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Twitter
                        </label>
                        <input
                          type="url"
                          defaultValue="https://twitter.com"
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    <Button className="mt-4">Save Changes</Button>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-destructive mb-2">
                      Danger Zone
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </Suspense>
  )
}
