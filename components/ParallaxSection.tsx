'use client'

import { useParallax } from '@/hooks/useParallax'

interface ParallaxSectionProps {
  image: string
  height: string
  children: React.ReactNode
}

export default function ParallaxSection({ image, height, children }: ParallaxSectionProps) {
  const { ref, scrollY } = useParallax()

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white p-8 bg-black bg-opacity-50">
          {children}
        </div>
      </div>
    </div>
  )
}

