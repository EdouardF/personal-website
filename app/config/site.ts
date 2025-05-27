export const siteConfig = {
  metadata: {
    title: 'Edouard Forgeau - Personal Website',
    description: 'Welcome to my personal space where I share my journey, experiences, and passions',
  },
  hero: {
    name: 'Edouard Forgeau',
    tagline: 'Welcome to my personal space where I share my journey, experiences, and passions',
    cta: 'Learn More',
  },
  about: {
    title: 'About Me',
    description: "I'm a passionate professional with expertise in software development. My journey in this field began with a deep curiosity for technology, and since then, I've been dedicated to creating impactful solutions.",
    values: "I believe in continuous learning and innovation, always seeking opportunities to grow and contribute to meaningful projects.",
    skills: [
      {
        icon: 'code',
        name: 'Frontend Development',
        description: 'Building responsive and intuitive user interfaces',
      },
      {
        icon: 'database',
        name: 'Backend Development',
        description: 'Designing robust and scalable server solutions',
      },
      {
        icon: 'globe',
        name: 'Web Technologies',
        description: 'Leveraging modern web technologies and frameworks',
      },
      {
        icon: 'layers',
        name: 'Full Stack Development',
        description: 'Creating end-to-end solutions and architectures',
      },
    ],
  },
  experience: {
    title: 'Professional Journey',
    description: 'My career path and key milestones',
    timeline: [
      {
        year: '2024',
        role: 'Senior Developer',
        company: 'Company Name',
        description: 'Leading development of innovative solutions',
      },
      {
        year: '2022',
        role: 'Full Stack Developer',
        company: 'Previous Company',
        description: 'Developed and maintained complex web applications',
      },
      {
        year: '2020',
        role: 'Frontend Developer',
        company: 'First Company',
        description: 'Started my professional journey in web development',
      },
    ],
  },
  hobbies: {
    title: 'My Hobbies & Interests',
    description: 'What I love to do in my free time',
    items: [
      {
        icon: 'camera',
        title: 'Photography',
        description: 'Capturing moments and exploring visual storytelling through photography.',
      },
      {
        icon: 'music',
        title: 'Music',
        description: 'Playing instruments and discovering new genres of music.',
      },
      {
        icon: 'book',
        title: 'Reading',
        description: 'Exploring different worlds and perspectives through books.',
      },
      {
        icon: 'code',
        title: 'Coding',
        description: 'Building side projects and learning new technologies.',
      },
    ],
  },
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'your.email@example.com',
  },
  misc: {
    title: 'More About Me',
    funFacts: [
      "I've visited 15 countries",
      "I speak 3 languages",
      "I love hiking and outdoor activities",
      "I've contributed to 20+ open source projects",
    ],
    achievements: [
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
    ],
  },
} as const 