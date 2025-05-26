'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiLinkedin, FiCalendar, FiBriefcase, FiAward } from 'react-icons/fi'

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'Head of SG Markets FOREX',
      company: 'Société Générale Corporate & Investment Banking',
      period: '2024 - Present',
      description: 'Description of your responsibilities and achievements in this role.',
      achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
    },
    {
      title: 'Senior Consultant',
      company: 'Amaris Consulting',
      period: '2022 - 2024',
      description: 'Description of your responsibilities and achievements in this role.',
      achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
    },
    {
      title: 'IT Consultant',
      company: 'Aubay',
      period: '2019 - 2022',
      description: 'Description of your responsibilities and achievements in this role.',
      achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
    },
    {
      title: 'IT Consultant',
      company: 'Accenture',
      period: '2014 - 2019',
      description: 'Description of your responsibilities and achievements in this role.',
      achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
    },
  ]

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path
                d="M0 32V0h32"
                fill="none"
                stroke="currentColor"
                className="text-gray-200 dark:text-gray-800"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
            transition={{ duration: 0.5 }}
            className="mb-8 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
          >
            Professional Experience
          </motion.h2>
          
          <motion.a
            href="https://linkedin.com/in/edouardforgeau"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-12 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-white transition-all hover:bg-red-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin className="mr-2" />
            <span>Connect on LinkedIn</span>
            <motion.span
              className="ml-2 opacity-0 transition-opacity group-hover:opacity-100"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        <div className="relative mt-12">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 md:left-1/2"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-8 flex md:justify-between ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative ml-8 md:ml-0 md:w-5/12">
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-12 top-5 h-4 w-4 rounded-full bg-primary md:-left-6"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
                />

                <motion.div
                  className="group rounded-lg bg-gray-50 p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <div className="mb-4 flex items-center text-gray-600 dark:text-gray-400">
                    <FiBriefcase className="mr-2" />
                    {experience.company}
                  </div>
                  <div className="mb-4 flex items-center text-gray-600 dark:text-gray-400">
                    <FiCalendar className="mr-2" />
                    {experience.period}
                  </div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {experience.description}
                  </p>
                  <div className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FiAward className="mr-2 text-primary" />
                        {achievement}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100"
                    initial={false}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 