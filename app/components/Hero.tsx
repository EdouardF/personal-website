'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex h-full items-center justify-center px-4 text-center"
      >
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Hello, I'm <span className="text-primary">Edouard Forgeau</span>
          </h1>
          <p className="mb-8 text-xl text-gray-200 sm:text-2xl">
            Welcome to my personal space where I share my journey, experiences, and passions
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#about"
              className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-secondary"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 