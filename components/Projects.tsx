'use client'

import { useParallax } from '@/hooks/useParallax'

export default function Projects() {
  const { ref, scrollY } = useParallax()
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Express", "PostgreSQL", "Redux"]
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with data visualization.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "D3.js", "OpenWeatherMap API"]
    }
  ]

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=1080&width=1920)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

