'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCamera, FiMusic, FiBook, FiCode } from 'react-icons/fi'

export function Hobbies() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const hobbies = [
    {
      icon: <FiCamera className="h-8 w-8" />,
      title: 'Photography',
      description: 'Capturing moments and exploring visual storytelling through photography.',
    },
    {
      icon: <FiMusic className="h-8 w-8" />,
      title: 'Music',
      description: 'Playing instruments and discovering new genres of music.',
    },
    {
      icon: <FiBook className="h-8 w-8" />,
      title: 'Reading',
      description: 'Exploring different worlds and perspectives through books.',
    },
    {
      icon: <FiCode className="h-8 w-8" />,
      title: 'Coding',
      description: 'Building side projects and learning new technologies.',
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
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-16 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            My Hobbies & Interests
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-900"
            >
              <div className="mb-4 text-primary dark:text-primary">
                {hobby.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {hobby.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {hobby.description}
              </p>
              
              {/* Decorative gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
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