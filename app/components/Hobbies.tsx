'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCamera, FiMusic, FiBook, FiCode, FiArrowRight } from 'react-icons/fi'

export function Hobbies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const hobbies = [
    {
      icon: <FiCamera />,
      title: 'Photography',
      description: 'Capturing moments and exploring visual storytelling through photography.',
      color: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: <FiMusic />,
      title: 'Music',
      description: 'Playing instruments and discovering new genres of music.',
      color: 'from-green-500/20 to-teal-500/20',
    },
    {
      icon: <FiBook />,
      title: 'Reading',
      description: 'Exploring different worlds and perspectives through books.',
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: <FiCode />,
      title: 'Coding',
      description: 'Building side projects and learning new technologies.',
      color: 'from-primary/20 to-secondary/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            className="mb-16 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
          >
            My Hobbies & Interests
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-900">
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${hobby.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  initial={false}
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Icon with rotating animation */}
                <motion.div
                  className="mb-4 text-4xl text-primary"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="mr-2">Learn more</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight />
                  </motion.div>
                </motion.div>

                {/* 3D tilt effect */}
                <motion.div
                  className="absolute inset-0 z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            These hobbies shape who I am and bring balance to my life.
            They inspire creativity and continuous learning in everything I do.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 