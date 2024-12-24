'use client'

import { useParallax } from '@/hooks/useParallax'

export default function Skills() {
  const { ref, scrollY } = useParallax()
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", 
    "HTML5", "CSS3", "Tailwind CSS", "Git", "Docker"
  ]

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=1080&width=1920)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6 bg-gray-800 bg-opacity-90 py-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

