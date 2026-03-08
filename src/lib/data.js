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
    leetcode: "https://leetcode.com/u/rudra1337-dev/",
    linkedin: "https://www.linkedin.com/in/rudra-narayan-maharana/",
    twitter: "https://x.com/rudra1337_dev",
    resumeUrl: "/rudra-resume.pdf",
};
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
};
//PROJECT DATA
export const projects = [
    {
        id: "gatecrowd-platform",
        title: "GateCrowd - Crowd Tracking Platform",
        description: "GateCrowd is a full-stack crowd tracking platform designed to monitor and manage crowd flow at different entry points. The platform includes a secure authentication system, real-time crowd data tracking, and a user-friendly dashboard for monitoring crowd activity. It uses JWT-based authentication with bcrypt password hashing and provides protected API routes through Express middleware.",
        image: "/gatecrowd.png",
        tags: ["fullstack", "crowd-tracking", "authentication"],
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
        liveUrl: "https://gatecrowd.vercel.app",
        githubUrl: "https://github.com/rudra1337-dev/gatecrowd",
        featured: true,
    },
];



//BLOG POST DATA
export const blogs = [
    {
        id: "why-dsa-matters",
        title: "Why Every Developer Should Master Data Structures and Algorithms",
        description: "Understanding why Data Structures and Algorithms are essential for problem solving, system efficiency, and becoming a strong software engineer.",
        image: "https://img-c.udemycdn.com/course/480x270/6532335_b02e_2.jpg?w=3840&q=75",
        date: "2026-03-09",
        author: "Rudra",
        content: `
# Why Every Developer Should Master Data Structures and Algorithms

Data Structures and Algorithms (DSA) form the foundation of computer science. Whether you want to become a backend engineer, system developer, or competitive programmer, strong DSA skills are essential.

## Problem Solving Ability

DSA teaches you how to think logically about problems. Instead of writing random code, you learn how to analyze the problem, choose the correct data structure, and apply the right algorithm.

For example:
- Arrays help manage sequential data
- HashMaps allow fast lookups
- Trees help represent hierarchical data
- Graphs help model networks

Understanding these structures allows developers to design efficient solutions.

## Performance and Optimization

A program that works is good. A program that works efficiently is better.

Algorithms help you optimize:
- Time Complexity
- Space Complexity
- Scalability of applications

For example, searching an element in:
- Array (Linear Search) → O(n)
- Sorted Array (Binary Search) → O(log n)

Choosing the right algorithm can make a massive difference in performance.

## Real-World Applications

DSA is used everywhere:

- Search engines use graph algorithms
- Social media platforms use hashing
- Navigation systems use shortest path algorithms
- Databases rely on trees and indexing structures

This means learning DSA directly improves your ability to build real systems.

## My Learning Journey

Currently, I am focusing on mastering DSA step by step by learning the core concepts and solving problems consistently.

My focus areas include:
- Arrays and Strings
- Linked Lists
- Stacks and Queues
- Trees and Graphs
- Dynamic Programming

## Conclusion

Mastering DSA is not about memorizing algorithms. It is about developing the mindset to solve problems efficiently.

If you want to become a strong developer, investing time in Data Structures and Algorithms is one of the best decisions you can make.
    `,
        likes: 12,
    },
    {
        id: "web-authentication-basics",
        title: "How Authentication Works in Modern Web Applications",
        description: "A beginner-friendly explanation of how user authentication works using JWT, password hashing, and secure backend practices.",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20250410101010106698/Understanding-Web-Authentication-behind-the-login-screen.webp",
        date: "2026-03-08",
        author: "Rudra",
        content: `
# How Authentication Works in Modern Web Applications

Authentication is a core feature of almost every modern web application. Whether it is a social media platform, e-commerce site, or SaaS product, users need a secure way to log in and access their accounts.

## Step 1: User Registration

When a user signs up, the system collects basic information such as:

- Username
- Email
- Password

However, passwords should never be stored in plain text.

Instead, we hash them using libraries like bcrypt.

Example:
Password → bcrypt hash → stored in database

This ensures that even if the database is compromised, the actual passwords remain secure.

## Step 2: User Login

When the user logs in:

1. The user sends email and password
2. The server compares the password with the stored hashed password
3. If the password matches, the server generates an authentication token

## Step 3: JWT Token Generation

A JSON Web Token (JWT) is created and sent back to the client.

This token contains:
- User ID
- Expiration time
- Digital signature

The token acts like a digital identity for the user.

## Step 4: Accessing Protected Routes

Whenever the user requests protected resources:

- The token is sent in the request header
- The server verifies the token
- If valid, access is granted

This is commonly implemented using middleware in backend frameworks like Express.js.

## Real Project Example

In my project GateCrowd, I implemented authentication using:

- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt

The system allows users to register, log in, and access protected routes securely.

## Conclusion

Authentication is a fundamental part of backend development. Understanding how password hashing, token-based authentication, and middleware work is essential for building secure web applications.
    `,
        likes: 18,
    }
];
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
    tech: {
        start: "My journey into programming started during my BTech in Computer Science when I began exploring how software actually works behind the scenes. Starting with C programming and problem solving, I gradually developed a strong interest in algorithms, backend systems, and building real applications.",
        motivation: "What drives me is mastering the fundamentals of computer science and solving challenging problems through code. I enjoy breaking down complex problems using Data Structures and Algorithms and building secure backend systems that power real applications.",
        current: "Currently, I am focused on becoming a strong software engineer.I am actively practicing Data Structures and Algorithms, learning backend development with Node.js, Express.js, and MongoDB, and building projects such as authentication systems using JWT and bcrypt.My goal is to continuously improve my programming skills and contribute to impactful projects and open- source communities.",
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
};
