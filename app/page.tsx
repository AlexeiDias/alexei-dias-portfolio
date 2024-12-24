import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParallaxSection from './components/ParallaxSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <Hero />
        <ParallaxSection 
          image="/placeholder.svg?height=1080&width=1920"
          height="300px"
        >
          <h2 className="text-4xl font-bold">Crafting Digital Experiences</h2>
        </ParallaxSection>
        <Skills />
        <ParallaxSection 
          image="/placeholder.svg?height=1080&width=1920"
          height="300px"
        >
          <h2 className="text-4xl font-bold">Bringing Ideas to Life</h2>
        </ParallaxSection>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

