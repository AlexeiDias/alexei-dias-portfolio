'use client'

import { useParallax } from '@/hooks/useParallax'

export default function Hero() {
  const { ref, scrollY } = useParallax()

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=1080&width=1920)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Alexei Dias</h1>
          <h2 className="text-3xl mb-6">Full Stack Web Developer</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting elegant, efficient, and user-friendly web solutions. 
            Turning ideas into reality, one line of code at a time.
          </p>
        </div>
      </div>
    </div>
  )
}

