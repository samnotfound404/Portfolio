'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { FlipWords } from '@/components/ui/flip-words'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = ['home', 'projects', 'experience', 'achievements']
  const words = ["Frontend", "Backend", "Full Stack"];
  const projects = [
    { id: 4, title: 'Weather App', description: 'A basic weather app that displays weather trends of a place with graphical representation also. A very basic project.' },
    { id: 5, title: 'Emotion Analyzer Video Calling Platform', description: 'Real-time emotion analyzer video calling platform where users can socialize by making friends.' },
    { id: 6, title: 'Inter IIT Website 2024', description: 'Contributor towards making of Inter IIT Website 2024.' },
  ]

  const experiences = [
    { id: 3, role: 'Gymkhana Member', company: 'Gymkhana Team', period: '', description: 'Contributing to college websites like Inter IIT and Training and Placement Cell.' },
    { id: 4, role: 'Intern', company: 'Venture Sync', period: 'Summer 2024', description: 'Worked on various projects in a Bangalore-based startup.' },
  ]

  const achievements = [
    { id: 3, title: 'Gold Medal in IITI SOC for Emotion Analyzer', year: '2024' },
    { id: 4, title: 'JEE Advanced Rank 2288', year: '2023' },
    { id: 5, title: 'JEE Mains Percentile 99.72', year: '2023' },
  ]

  const techStack = [
    { icon: FaReact, name: 'React', color: 'text-blue-500' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-700' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-300' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-teal-500' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-black' },
    { icon: FaDatabase, name: 'Databases', color: 'text-purple-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <ul className="flex justify-center space-x-4 p-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => {
                  setActiveSection(section)
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`capitalize ${
                  activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.img
            src="/portfolio.jpg"
            alt="Your Name"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-400 shadow-lg"
            whileTap={{ scale: 0.9 }}
          />
          <h1 className="text-4xl font-bold mb-2">Sameer Choudhary</h1>
          <div className='flex items-center justify-center mb-2'> <FlipWords duration={1000} className='text-2xl text-white font-bold' words={words} /><p className='text-2xl text-white'>Developer</p></div>
          
          <div className="flex justify-center space-x-4 mt-8 mb-8">
            <a href="https://github.com/samnotfound404" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-300 hover:text-white" />
            </a>
            <a href="https://www.instagram.com/samnotfound404" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-pink-500 hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-blue-700 hover:text-white" />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="tooltip"
                data-tip={tech.name}
              >
                <tech.icon className={`text-3xl ${tech.color}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a
                    href={
                      project.title === 'Weather App'
                        ? 'https://github.com/samnotfound404/Weatherly'
                        : project.title === 'Emotion Analyzer Video Calling Platform'
                        ? 'https://videovive-production.vercel.app/'
                        : project.title === 'Inter IIT Website 2024'
                        ? 'https://interiit2024.iiti.ac.in/'
                        : '#'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {project.title}
                  </a>
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-400">{exp.period}</p>
                {exp.description && <p className="text-gray-400">{exp.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:bg-opacity-20 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}