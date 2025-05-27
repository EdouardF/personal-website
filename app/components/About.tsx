"use client";

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiGlobe, FiLayers } from 'react-icons/fi'
import { siteConfig } from '../config/site'

export function About() {
  const containerRef = useRef(null)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const skills = [
    { icon: <FiCode />, name: siteConfig.about.skills[0].name, description: siteConfig.about.skills[0].description },
    { icon: <FiDatabase />, name: siteConfig.about.skills[1].name, description: siteConfig.about.skills[1].description },
    { icon: <FiGlobe />, name: siteConfig.about.skills[2].name, description: siteConfig.about.skills[2].description },
    { icon: <FiLayers />, name: siteConfig.about.skills[3].name, description: siteConfig.about.skills[3].description },
  ]

  // Create scroll-based animations for each skill
  const skillAnimations = skills.map((_, i) => ({
    y: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [`${-50 + i * 20}%`, '0%', `${50 - i * 20}%`]
    ),
    rotate: useTransform(
      scrollYProgress,
      [0, 1],
      [0, i % 2 === 0 ? 360 : -360]
    ),
    scale: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0.8, 1 + i * 0.05, 0.8]
    ),
  }))

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
        style={{
          scale,
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]),
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mx-auto max-w-6xl"
        >
          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
          >
            {siteConfig.about.title}
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.div
                  style={{ y }}
                  className="rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900"
                >
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {siteConfig.about.description}
                  </p>
                </motion.div>
                <motion.div
                  style={{ rotate }}
                  className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/20 backdrop-blur-lg"
                />
              </div>

              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']) }}
                className="rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {siteConfig.about.values}
                </p>
              </motion.div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-900"
                  style={{
                    y: skillAnimations[i].y,
                    scale: skillAnimations[i].scale,
                  }}
                >
                  <motion.div
                    className="mb-4 text-3xl text-primary"
                    style={{ rotate: skillAnimations[i].rotate }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-secondary/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 