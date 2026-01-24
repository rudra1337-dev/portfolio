"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 3,
  yOffset = 10,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
        rotateZ: [-1, 1, -1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

interface MagneticWrapperProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticWrapper({
  children,
  className = "",
  strength = 0.3,
}: MagneticWrapperProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.05,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        e.currentTarget.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.05)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0px, 0px) scale(1)"
      }}
      style={{
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxCardProps {
  children: ReactNode
  className?: string
  depth?: number
}

export function ParallaxCard({
  children,
  className = "",
  depth = 50,
}: ParallaxCardProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        z: depth,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  )
}

interface GlowingOrbProps {
  color?: string
  size?: number
  className?: string
  pulseIntensity?: number
}

export function GlowingOrb({
  color = "primary",
  size = 200,
  className = "",
  pulseIntensity = 1.2,
}: GlowingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `var(--${color})`,
        opacity: 0.1,
      }}
      animate={{
        scale: [1, pulseIntensity, 1],
        opacity: [0.1, 0.15, 0.1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}
