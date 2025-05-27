'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiInstagram, FiMail, FiExternalLink, FiX } from 'react-icons/fi'

export function Misc() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    {
      icon: <FiGithub />,
      label: 'GitHub',
      href: 'https://github.com/edouardf',
      color: 'hover:bg-gray-800 dark:hover:bg-gray-700',
    },
    {
      icon: <FiX />,
      label: 'X',
      href: 'https://x.com/edouardforgeau',
      color: 'hover:bg-gray-500',
    },
    {
      icon: <FiInstagram />,
      label: 'Instagram',
      href: 'https://instagram.com/edouard.f',
      color: 'hover:bg-pink-500',
    },
    {
      icon: <FiMail />,
      label: 'Email',
      href: 'mailto:edouard.forgeau@gmail.com',
      color: 'hover:bg-red-500',
    },
  ]

  const funFacts = [
    "I've visited X countries",
    "I speak Y languages",
    "I love Z hobby",
    "I've contributed to N open source projects",
  ]

  const achievements = [
    {
      year: '2024',
      title: 'Achievement 1',
      description: 'Description of the achievement',
    },
    {
      year: '2023',
      title: 'Achievement 2',
      description: 'Description of the achievement',
    },
    {
      year: '2022',
      title: 'Achievement 3',
      description: 'Description of the achievement',
    },
  ]

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <svg className="absolute h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle cx="25" cy="25" r="8" fill="currentColor" className="text-primary" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
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
            More About Me
          </motion.h2>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900 dark:text-white">
            Let's Connect
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-2 rounded-full bg-gray-100 px-6 py-3 text-gray-700 transition-all dark:bg-gray-800 dark:text-gray-300 ${link.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FiExternalLink className="ml-1" />
                </motion.span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900 dark:text-white">
            Fun Facts
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-50 p-6 dark:bg-gray-800"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-gray-700 dark:text-gray-300">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900 dark:text-white">
            Notable Achievements
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-0 top-0 h-full w-0.5 bg-primary/20 md:left-1/2"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  className={`flex ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center justify-center gap-8`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-full md:w-5/12">
                    <motion.div
                      className="group relative rounded-lg bg-gray-50 p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
                      whileHover={{ y: -5 }}
                    >
                      <div className="mb-2 text-sm font-semibold text-primary">
                        {achievement.year}
                      </div>
                      <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                      <motion.div
                        className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100"
                        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute left-0 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-ml-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.2, delay: index * 0.2 }}
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