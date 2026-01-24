"use client"

import React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Hover3DButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
}

export function Hover3DButton({
  children,
  className = "",
  onClick,
  variant = "primary",
}: Hover3DButtonProps) {
  const baseStyles = "relative px-6 py-3 rounded-full font-medium overflow-hidden"
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border-2 border-primary text-primary bg-transparent",
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={{ 
        scale: 1.05,
        rotateX: -5,
        rotateY: 5,
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
      }}
      whileTap={{ 
        scale: 0.95,
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        whileHover={{ z: 20 }}
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </motion.span>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
