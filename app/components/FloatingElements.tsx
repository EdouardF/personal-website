'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiStar, FiCircle, FiSquare, FiTriangle } from 'react-icons/fi'

export function FloatingElements() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Create multiple layers of elements with different parallax effects
  const elements = [
    {
      icon: <FiCode />,
      size: 'text-4xl',
      color: 'text-primary/30',
      x: useTransform(scrollYProgress, [0, 1], ['0%', '20%']),
      y: useTransform(scrollYProgress, [0, 1], ['0%', '40%']),
    },
    {
      icon: <FiStar />,
      size: 'text-3xl',
      color: 'text-secondary/30',
      x: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']),
      y: useTransform(scrollYProgress, [0, 1], ['0%', '25%']),
    },
    {
      icon: <FiCircle />,
      size: 'text-2xl',
      color: 'text-primary/20',
      x: useTransform(scrollYProgress, [0, 1], ['0%', '15%']),
      y: useTransform(scrollYProgress, [0, 1], ['0%', '-35%']),
    },
    {
      icon: <FiSquare />,
      size: 'text-xl',
      color: 'text-secondary/20',
      x: useTransform(scrollYProgress, [0, 1], ['0%', '-25%']),
      y: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']),
    },
    {
      icon: <FiTriangle />,
      size: 'text-3xl',
      color: 'text-primary/25',
      x: useTransform(scrollYProgress, [0, 1], ['0%', '35%']),
      y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']),
    },
  ]

  // Create dots with different sizes
  const dots = Array.from({ length: 20 }, (_, i) => ({
    size: Math.random() * 4 + 2, // Random size between 2-6px
    x: useTransform(scrollYProgress, [0, 1], ['0%', `${(Math.random() - 0.5) * 50}%`]),
    y: useTransform(scrollYProgress, [0, 1], ['0%', `${(Math.random() - 0.5) * 50}%`]),
    opacity: Math.random() * 0.5 + 0.2, // Random opacity between 0.2-0.7
  }))

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Floating icons */}
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color}`}
          style={{
            left: `${20 + index * 20}%`,
            top: `${10 + index * 15}%`,
            x: element.x,
            y: element.y,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Floating dots */}
      {dots.map((dot, index) => (
        <motion.div
          key={`dot-${index}`}
          className="absolute rounded-full bg-primary"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: dot.opacity,
            x: dot.x,
            y: dot.y,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: dot.opacity }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        />
      ))}
    </div>
  )
} 