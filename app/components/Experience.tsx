'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLinkedin, FiCalendar, FiBriefcase } from 'react-icons/fi'

export function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Position 1',
      company: 'Société Générale Corporate & Investment Banking',
      period: '2024 - Present',
      description: 'Description of your responsibilities and achievements in this role.',
    },
    {
      title: 'Senior Consultant',
      company: 'Amaris Consulting',
      period: '2020 - 2022',
      description: 'Description of your responsibilities and achievements in this role.',
    },
    {
      title: 'Position 3',
      company: 'Company 3',
      period: '2018 - 2020',
      description: 'Description of your responsibilities and achievements in this role.',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Professional Experience
          </h2>
          
          <a
            href="https://linkedin.com/in/edouardforgeau"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-12 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
          >
            <FiLinkedin className="mr-2" />
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 md:left-1/2" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-8 flex md:justify-between ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="ml-8 md:ml-0 md:w-5/12">
                  <div className="rounded-lg bg-gray-50 p-6 shadow-lg dark:bg-gray-800">
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
                    <p className="text-gray-700 dark:text-gray-300">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 