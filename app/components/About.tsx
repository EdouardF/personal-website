"use client";

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiGlobe, FiLayers } from 'react-icons/fi'

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
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const skills = [
    { icon: <FiCode />, name: 'Frontend Development' },
    { icon: <FiDatabase />, name: 'Backend Development' },
    { icon: <FiGlobe />, name: 'Web Technologies' },
    { icon: <FiLayers />, name: 'Full Stack Development' },
  ]

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  const floatingAnimation = {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `radial-gradient(circle, var(--tw-gradient-from) 0%, transparent 70%)`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800" />
      </motion.div>

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
            About Me
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
                  animate={floatingAnimation}
                  className="rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900"
                >
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I'm a passionate professional with expertise in [Your Field]. 
                    My journey in this field began [Your Background], and since then, 
                    I've been dedicated to [Your Goals/Mission].
                  </p>
                </motion.div>
                <motion.div
                  style={{ rotate }}
                  className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/20 backdrop-blur-lg"
                />
              </div>

              <motion.div
                animate={floatingAnimation}
                transition={{ delay: 0.2 }}
                className="rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I believe in [Your Values/Principles] and am constantly seeking 
                  opportunities to learn and grow in my field.
                </p>
              </motion.div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05, rotate: [-1, 1] }}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-900"
                >
                  <motion.div
                    className="mb-4 text-3xl text-primary"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
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