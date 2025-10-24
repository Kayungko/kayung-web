import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section) => {
    if (!isHome) {
      // 如果不在首页，先导航到首页
      navigate('/')
      // 等待导航完成后滚动
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      // 如果在首页，直接滚动
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    }
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
          <Link 
            to="/"
            className="text-[15px] font-medium text-white hover:text-white/80 transition-colors"
          >
            像素治愈所
          </Link>

          <div className="flex gap-8">
            <button
              onClick={() => handleNavClick('about')}
              className="text-white/50 hover:text-white transition-colors duration-200 text-[14px] font-normal"
            >
              关于
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="text-white/50 hover:text-white transition-colors duration-200 text-[14px] font-normal"
            >
              项目
            </button>
            <Link
              to="/blog"
              className={`transition-colors duration-200 text-[14px] font-normal ${
                location.pathname.startsWith('/blog') 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              文章
            </Link>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-white/50 hover:text-white transition-colors duration-200 text-[14px] font-normal"
            >
              联系
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

