'use client';



//PERSONAL DATA



export const personalInfo = {
  name: "Rudra",
  title: "Full Stack Developer",
  tagline: "I build accessible, pixel-perfect digital experiences for the web.",
  email: "rudra1337.dev@gmail.com",
  phone: "+91 7205094809",
  location: "India IN",
  github: "https://github.com/rudra1337-dev",
  linkedin: "https://www.linkedin.com/in/rudra-narayan-maharana/",
  twitter: "https://x.com/rudra1337_dev",
  resumeUrl: "/rudra-resume.pdf",
}





//SKILLS DATA




export const skills = {
  frontend: [
    { name: "React", level: 80, description: "Built 4+ production apps", icon: "react" },
    //{ name: "Next.js", level: 90, description: "SSR, SSG, ISR expertise", icon: "nextjs" },
    //{ name: "TypeScript", level: 88, description: "Type-safe development", icon: "typescript" },
    { name: "Bootstrap CSS", level: 75, description: "Utility-first styling", icon: "bootstrap" },
    //{ name: "Vue.js", level: 75, description: "Component architecture", icon: "vue" },
  ],
  backend: [
    { name: "Node.js", level: 70, description: "REST APIs, microservices", icon: "nodejs" },
    //{ name: "Python", level: 10, description: "Django, FastAPI", icon: "python" },
    { name: "Express", level: 85, description: "Server-side apps", icon: "express" },
    //{ name: "GraphQL", level: 78, description: "API development", icon: "graphql" },
  ],
  database: [
    //{ name: "PostgreSQL", level: 85, description: "Relational data modeling", icon: "postgresql" },
    { name: "MongoDB", level: 80, description: "NoSQL solutions", icon: "mongodb" },
    //{ name: "Redis", level: 75, description: "Caching strategies", icon: "redis" },
    //{ name: "Prisma", level: 82, description: "ORM expertise", icon: "prisma" },
  ],
  languages: [
    { name: "JavaScript", level: 95, description: "ES6+, async patterns", icon: "javascript" },
    { name: "TypeScript", level: 20, description: "Advanced types", icon: "typescript" },
    { name: "Python", level: 10, description: "Scripting, automation", icon: "python" },
    { name: "Go", level: 5, description: "Learning journey", icon: "go" },
    { name: "Java", level: 90, descrription: "DSA Practice", icon: "java" },
    { name: "C", level: 90, descrription: "Strong fundamentals", icon: "c" },
  ],
  other: [
    { name: "Git", level: 90, description: "Version control", icon: "git" },
    { name: "Git-Hub", level: 80, description: "Opensourse practice", icon: "git hub" },
    //{ name: "Docker", level: 78, description: "Containerization", icon: "docker" },
    //{ name: "AWS", level: 72, description: "Cloud services", icon: "aws" },
    //{ name: "Figma", level: 70, description: "Design collaboration", icon: "figma" },
  ],
}













//PROJECT DATA


export const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["fullstack", "e-commerce"],
    techStack: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, team workspaces, and Kanban boards.",
    image: "/projects/taskapp.jpg",
    tags: ["fullstack", "productivity"],
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "ai-chatbot",
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by GPT-4 with context awareness and multi-language support.",
    image: "/projects/chatbot.jpg",
    tags: ["ai", "frontend"],
    techStack: ["Next.js", "OpenAI", "Tailwind", "Vercel AI SDK"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    description: "Dynamic portfolio website generator with customizable themes and content management.",
    image: "/projects/portfolio.jpg",
    tags: ["frontend", "ui-clone"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "MDX"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather tracking with interactive maps and 7-day forecasts.",
    image: "/projects/weather.jpg",
    tags: ["frontend", "api"],
    techStack: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "social-media-clone",
    title: "Social Media Clone",
    description: "Instagram-inspired social platform with stories, posts, and real-time messaging.",
    image: "/projects/social.jpg",
    tags: ["fullstack", "ui-clone"],
    techStack: ["Next.js", "Supabase", "Tailwind", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]















//BLOG POST DATA






export const blogs = [
  {
    id: "mastering-react-hooks",
    title: "Mastering React Hooks: A Complete Guide",
    description: "Deep dive into useState, useEffect, useContext, and custom hooks with practical examples.",
    image: "/blogs/react-hooks.jpg",
    date: "2025-12-15",
    author: "Rudra",
    content: `
# Mastering React Hooks: A Complete Guide

React Hooks have revolutionized how we write React components. In this comprehensive guide, we'll explore the most essential hooks and learn how to create custom ones.

## Introduction to Hooks

Hooks allow you to use state and other React features without writing a class. They let you reuse stateful logic between components.

## useState Hook

The useState hook is the most basic hook. It allows you to add state to functional components.

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## useEffect Hook

useEffect lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions. A custom hook is a JavaScript function whose name starts with "use".

## Conclusion

React Hooks provide a more direct API to the React concepts you already know. They allow you to organize the logic inside a component into reusable isolated units.
    `,
    likes: 142,
  },
  {
    id: "nextjs-15-features",
    title: "What's New in Next.js 15: A Developer's Perspective",
    description: "Exploring the latest features, improvements, and breaking changes in Next.js 15.",
    image: "/blogs/nextjs.jpg",
    date: "2025-11-28",
    author: "Rudra",
    content: `
# What's New in Next.js 15

Next.js 15 brings exciting new features and improvements. Let's explore what's new and how it affects your development workflow.

## Turbopack Stability

Turbopack is now stable and provides significantly faster build times compared to webpack.

## Server Actions Improvements

Server Actions have been enhanced with better error handling and improved type safety.

## Enhanced Caching

The new caching strategies in Next.js 15 provide better control over how your data is cached and revalidated.

## Conclusion

Next.js 15 represents a significant step forward for the framework, with improvements across performance, developer experience, and functionality.
    `,
    likes: 98,
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for 2025",
    description: "Learn the latest TypeScript patterns and practices to write better, more maintainable code.",
    image: "/blogs/typescript.jpg",
    date: "2025-10-20",
    author: "Rudra",
    content: `
# TypeScript Best Practices for 2025

TypeScript continues to evolve, and so do the best practices for using it effectively. Here are the latest patterns and practices.

## Use Strict Mode

Always enable strict mode in your tsconfig.json for better type safety.

## Prefer Interfaces for Object Types

While types and interfaces are similar, interfaces are generally preferred for object shapes.

## Use Discriminated Unions

Discriminated unions are powerful for handling different variants of a type.

## Conclusion

Following these best practices will help you write more maintainable and type-safe TypeScript code.
    `,
    likes: 76,
  },
]




















//ABOUT DATA



export const aboutData = {
  // introduction: "I'm a passionate full-stack developer with 5+ years of experience building web applications. I love turning complex problems into simple, beautiful solutions.",

  introduction: "I’m a Computer Science undergraduate focused on building strong fundamentals and real-world skills. I work with React, Next.js, backend development, and core CS concepts, and I believe consistency and deep learning matter more than shortcuts. My goal is to grow into a skilled software engineer and contribute to impactful projects.",

  responsibilities: [
    "Developing and maintaining web applications using React and backend technologies",
    "Building scalable backend services with Node.js and Express.js",
    "Collaborating with design teams to implement pixel-perfect systems",
    //"Code reviews and mentoring junior developers",
    "Writing technical documentation and best practices guides",
  ],

  strengths: [
    { title: "Problem Solving", description: "Breaking down complex challenges into manageable solutions" },
    { title: "Clean Code", description: "Writing maintainable, well-documented, and tested code" },
    { title: "Communication", description: "Effectively collaborating with cross-functional teams" },
    { title: "Continuous Learning", description: "Always staying updated with the latest technologies" },
  ],
  techJourney: {
    start: "My journey began in 2019 when I built my first website using HTML, CSS, and JavaScript. That spark of creating something from nothing ignited a passion that hasn't faded.",
    motivation: "What drives me is the ability to solve real-world problems through code. Seeing users interact with something I've built gives me immense satisfaction.",
    current: "Today, I specialize in full-stack development with a focus on React ecosystem. I'm constantly exploring new technologies and contributing to open-source projects.",
  },
  goals: [
    "Lead engineering teams at innovative tech companies",
    "Contribute to major open-source projects",
    "Participate in and win hackathons",
    "Build products that impact millions of users",
  ],
  personality: {
    hobbies: ["Photography", "Hiking", "Reading tech blogs"],
    mindset: "I believe in continuous improvement and the power of collaboration. Every line of code is an opportunity to learn and grow.",
  },
}
