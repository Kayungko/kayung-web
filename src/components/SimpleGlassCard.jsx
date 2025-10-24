import { motion } from 'framer-motion'

export default function SimpleGlassCard({ 
  children, 
  className = '',
  borderRadius = 'rounded-xl',
  interactive = true,
  ...props 
}) {
  const baseClasses = `
    backdrop-blur-md ${borderRadius} relative overflow-hidden
    bg-gradient-to-br from-white/8 to-white/2
    border border-white/10
    shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.1)]
    transition-all duration-300
  `
  
  const interactiveClasses = interactive ? `
    hover:from-white/12 hover:to-white/4
    hover:border-white/20
    hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)]
  ` : ''

  return (
    <div 
      className={`${baseClasses} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// 专门用于可点击卡片的版本
export function InteractiveGlassCard({ 
  children, 
  className = '',
  onClick,
  ...props 
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`
        backdrop-blur-md rounded-xl relative overflow-hidden cursor-pointer
        bg-gradient-to-br from-white/8 to-white/2
        border border-white/10
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.1)]
        transition-all duration-300
        hover:from-white/12 hover:to-white/4
        hover:border-white/20
        hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)]
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

