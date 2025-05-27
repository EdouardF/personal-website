'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiCamera, FiMusic, FiBook, FiCode, FiArrowRight } from 'react-icons/fi'
import { siteConfig } from '../config/site'

export function Hobbies() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const hobbies = [
    {
      icon: <FiCamera />,
      title: siteConfig.hobbies.items[0].title,
      description: siteConfig.hobbies.items[0].description,
      color: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: <FiMusic />,
      title: siteConfig.hobbies.items[1].title,
      description: siteConfig.hobbies.items[1].description,
      color: 'from-green-500/20 to-teal-500/20',
    },
    {
      icon: <FiBook />,
      title: siteConfig.hobbies.items[2].title,
      description: siteConfig.hobbies.items[2].description,
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: <FiCode />,
      title: siteConfig.hobbies.items[3].title,
      description: siteConfig.hobbies.items[3].description,
      color: 'from-primary/20 to-secondary/20',
    },
  ]

  // Create scroll-based animations for each hobby
  const hobbyAnimations = hobbies.map((_, i) => ({
    y: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [`${-30 + i * 15}%`, '0%', `${30 - i * 15}%`]
    ),
    rotate: useTransform(
      scrollYProgress,
      [0, 1],
      [0, i % 2 === 0 ? 180 : -180]
    ),
    scale: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0.9, 1 + i * 0.03, 0.9]
    ),
  }))

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]),
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]),
          }}
          className="mb-16 text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
        >
          {siteConfig.hobbies.title}
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="group relative"
              style={{
                y: hobbyAnimations[index].y,
                scale: hobbyAnimations[index].scale,
              }}
            >
              <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-900">
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${hobby.color}`}
                  style={{
                    opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]),
                  }}
                />

                {/* Icon with scroll-based rotation */}
                <motion.div
                  className="mb-4 text-4xl text-primary"
                  style={{ rotate: hobbyAnimations[index].rotate }}
                >
                  {hobby.icon}
                </motion.div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {hobby.title}
                </h3>

                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {hobby.description}
                </p>

                {/* Learn more link with arrow animation */}
                <motion.div
                  className="mt-4 flex items-center text-primary"
                  style={{
                    x: useTransform(scrollYProgress, [0, 1], ['0%', `${(index % 2 === 0 ? 20 : -20)}%`]),
                  }}
                >
                  <span className="mr-2">Learn more</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]),
          }}
          className="mt-16 text-center text-lg text-gray-600 dark:text-gray-400"
        >
          {siteConfig.hobbies.description}
        </motion.p>
      </div>
    </div>
  )
} 