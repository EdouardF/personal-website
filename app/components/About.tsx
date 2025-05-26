"use client";

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export function About() {
  const containerRef = useRef(null)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-50 dark:bg-gray-800">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800" />
      </motion.div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            About Me
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a passionate professional with expertise in [Your Field]. 
                My journey in this field began [Your Background], and since then, 
                I've been dedicated to [Your Goals/Mission].
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I believe in [Your Values/Principles] and am constantly seeking 
                opportunities to learn and grow in my field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Key Skills
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Skill 1</li>
                  <li>• Skill 2</li>
                  <li>• Skill 3</li>
                  <li>• Skill 4</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 