import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function AppleLiquidGlassButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ...props 
}) {
  const buttonRef = useRef(null)

  const sizeClasses = {
    small: 'px-5 py-2.5 text-sm',
    medium: 'px-8 py-3.5 text-base',
    large: 'px-10 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'text-white font-medium',
    secondary: 'text-white/90 font-medium',
    accent: 'text-white font-semibold'
  }

  // Mouse tracking effect for glass-card hover
  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      button.style.setProperty('--mouse-x', `${x}%`)
      button.style.setProperty('--mouse-y', `${y}%`)
    }

    button.addEventListener('mousemove', handleMouseMove)
    return () => button.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.button
      ref={buttonRef}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={disabled ? {} : { 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      className={`
        glass-card
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        min-w-[140px]
        inline-flex items-center justify-center
        transition-all duration-300
        select-none
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  )
}
