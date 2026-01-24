"use client"

import React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Heart, User, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogs, personalInfo } from "@/lib/data"

interface Comment {
  id: number
  name: string
  content: string
  date: string
}

export default function BlogDetailPage() {
  const params = useParams()
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      content: "Great article! Really helped me understand the concepts better.",
      date: "2025-12-20",
    },
    {
      id: 2,
      name: "Mike Chen",
      content: "Thanks for sharing this. The code examples are very clear.",
      date: "2025-12-18",
    },
  ])
  const [newComment, setNewComment] = useState("")
  const [commentName, setCommentName] = useState("")

  const blog = blogs.find((b) => b.id === params.id)

  useEffect(() => {
    if (blog) {
      setLikes(blog.likes)
    }
  }, [blog])

  if (!blog) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog not found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1)
      setHasLiked(true)
    } else {
      setLikes((prev) => prev - 1)
      setHasLiked(false)
    }
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() && commentName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        name: commentName,
        content: newComment,
        date: new Date().toISOString().split("T")[0],
      }
      setComments((prev) => [comment, ...prev])
      setNewComment("")
      setCommentName("")
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-bold">
                    {personalInfo.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-medium">{blog.author}</p>
                  <p className="text-sm">Full Stack Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={blog.date}>{formatDate(blog.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>{comments.length} comments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto -mt-8">
            <div className="h-64 md:h-80 lg:h-96 bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-bold text-foreground/5">
                  {blog.title.slice(0, 2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {blog.content}
              </div>
            </article>

            {/* Like Button */}
            <div className="flex items-center justify-center py-12 border-t border-b border-border my-12">
              <button
                onClick={handleLike}
                className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 ${
                  hasLiked
                    ? "bg-red-500/10 text-red-500"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <Heart className={`h-6 w-6 ${hasLiked ? "fill-current" : ""}`} />
                <span className="text-lg font-medium">{likes} Likes</span>
              </button>
            </div>

            {/* Comments Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <MessageCircle className="h-6 w-6" />
                Comments ({comments.length})
              </h2>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="mb-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-foreground mb-2">
                      Your Comment
                    </label>
                    <textarea
                      id="comment"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts..."
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>
                  <Button type="submit" className="gap-2">
                    <Send className="h-4 w-4" />
                    Post Comment
                  </Button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-card border border-border rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">
                            {comment.name}
                          </h4>
                          <time className="text-sm text-muted-foreground">
                            {formatDate(comment.date)}
                          </time>
                        </div>
                        <p className="text-muted-foreground">{comment.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
