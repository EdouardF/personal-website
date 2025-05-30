'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Multiple parallax layers with different speeds
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const middleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  // Enhanced floating animation variants
  const floatingAnimation = {
    y: [-20, 20],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }

  // Create dots with different sizes for the header
  const dots = Array.from({ length: 30 }, (_, i) => ({
    size: Math.random() * 6 + 2, // Random size between 2-8px
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    xOffset: useTransform(scrollYProgress, [0, 1], ['0%', `${(Math.random() - 0.5) * 100}%`]),
    yOffset: useTransform(scrollYProgress, [0, 1], ['0%', `${(Math.random() - 0.5) * 100}%`]),
    opacity: Math.random() * 0.5 + 0.2, // Random opacity between 0.2-0.7
  }))

  // Define size classes for floating elements
  const floatingElementSizes = [
    'h-8 w-8',
    'h-12 w-12',
    'h-16 w-16',
    'h-20 w-20',
    'h-24 w-24'
  ]

  // Define size classes for geometric shapes
  const shapesSizes = [
    'h-16 w-16',
    'h-24 w-24',
    'h-32 w-32'
  ]

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Layer */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
      </motion.div>

      {/* Dots Layer */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.initialX}%`,
              top: `${dot.initialY}%`,
              opacity: dot.opacity,
              x: dot.xOffset,
              y: dot.yOffset,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [dot.opacity, dot.opacity * 1.5, dot.opacity],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
              y: useTransform(scrollYProgress, [0, 1], ['0%', `${30 + i * 10}%`]),
            }}
            animate={floatingAnimation}
            transition={{
              delay: i * 0.2,
              duration: 3 + i * 0.5,
            }}
          >
            <div className={`${floatingElementSizes[i]} rounded-full bg-primary/10 backdrop-blur-sm`} />
          </motion.div>
        ))}
      </div>

      {/* Middle Layer with geometric shapes */}
      <motion.div
        style={{ y: middleY }}
        className="absolute inset-0 z-30"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              right: `${10 + i * 25}%`,
              top: `${30 + i * 20}%`,
              y: useTransform(scrollYProgress, [0, 1], ['0%', `${20 + i * 15}%`]),
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className={`${shapesSizes[i]} bg-secondary/5 backdrop-blur-md ${i === 0 ? '' : i === 1 ? 'rotate-45' : 'rotate-90'}`} />
          </motion.div>
        ))}
      </motion.div>

      {/* Content Layer */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-40 flex h-full items-center justify-center px-4 text-center"
      >
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
          >
            Hello, I'm{" "}
            <motion.span 
              className="text-primary"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundImage: "linear-gradient(90deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)",
              }}
            >
              Edouard Forgeau
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-xl text-gray-200 sm:text-2xl"
          >
            Welcome to my personal space where I share my journey, experiences, and passions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="#about"
              className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 