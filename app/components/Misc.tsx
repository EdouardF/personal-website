'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiMail, FiExternalLink, FiX, FiLinkedin } from 'react-icons/fi'

export function Misc() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const socialLinks = [
    {
      icon: <FiLinkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/edouardforgeau',
    },
    {
      icon: <FiGithub className="h-6 w-6" />,
      name: 'GitHub',
      url: 'https://github.com/EdouardF',
    },
    {
      icon: <FiX className="h-6 w-6" />,
      name: 'X',
      url: 'https://x.com/EdouardForgeau',
    },
    {
      icon: <FiMail className="h-6 w-6" />,
      name: 'Email',
      url: 'mailto:edouard.forgeau@gmail.com',
    },
  ]

  const miscContent = [
    {
      title: 'Blog Posts',
      items: [
        {
          name: 'Article Title 1',
          description: 'Brief description of the article.',
          url: '#',
        },
        {
          name: 'Article Title 2',
          description: 'Brief description of the article.',
          url: '#',
        },
      ],
    },
    {
      title: 'Projects',
      items: [
        {
          name: 'Project 1',
          description: 'Brief description of the project.',
          url: '#',
        },
        {
          name: 'Project 2',
          description: 'Brief description of the project.',
          url: '#',
        },
      ],
    },
  ]

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
          <h2 className="mb-16 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            More About Me
          </h2>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Misc Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {miscContent.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + sectionIndex * 0.2 }}
              className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800"
            >
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md dark:bg-gray-900"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h4>
                      <FiExternalLink className="text-gray-400" />
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 