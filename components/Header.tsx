import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-10">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-8">
          <li><Link href="#home" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="#skills" className="hover:text-blue-400 transition-colors">Skills</Link></li>
          <li><Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

