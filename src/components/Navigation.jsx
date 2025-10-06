import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'glass-minimal border-white/[0.15]' : 'border-white/[0.12]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-[15px] font-medium text-white">
            像素治愈所
          </div>

          <div className="flex gap-8">
            {['关于', '项目', '联系'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === '关于' ? 'about' : item === '项目' ? 'projects' : 'contact')}
                className="text-white/50 hover:text-white transition-colors duration-200 text-[14px] font-normal"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

