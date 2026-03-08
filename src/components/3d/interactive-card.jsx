"use client";
import React from "react";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
export function Interactive3DCard({ children, className = "", glareEnabled = true, rotationIntensity = 15, }) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotationIntensity, -rotationIntensity]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotationIntensity, rotationIntensity]);
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
    const handleMouseMove = (e) => {
        if (!cardRef.current)
            return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = (e.clientX - centerX) / rect.width;
        const mouseY = (e.clientY - centerY) / rect.height;
        x.set(mouseX);
        y.set(mouseY);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };
    return (<motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave} style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
        }} className={`relative ${className}`}>
      <div style={{ transform: "translateZ(0)" }}>
        {children}
      </div>
      
      {glareEnabled && isHovered && (<motion.div className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden" style={{
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            }}/>)}
    </motion.div>);
}
