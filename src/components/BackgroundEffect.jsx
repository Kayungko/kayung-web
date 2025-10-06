import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function BackgroundEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // 启用GPU加速的Canvas渲染
    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true,  // 低延迟渲染
      willReadFrequently: false  // 优化GPU性能
    })
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create noise texture - Reflect style
    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 15
        data[i] = noise     // R
        data[i + 1] = noise // G
        data[i + 2] = noise // B
        data[i + 3] = 3     // A - very low opacity
      }

      ctx.putImageData(imageData, 0, 0)
    }

    createNoise()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createNoise()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Noise texture canvas - Reflect style */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ 
          mixBlendMode: 'overlay', 
          zIndex: 1
        }}
      />

      {/* Ultra-subtle gradient orbs - barely visible */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(90, 90, 110, 0.015) 0%, transparent 65%)',
          top: '5%',
          left: '10%',
          filter: 'blur(120px)',
          zIndex: 2,
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(70, 70, 90, 0.012) 0%, transparent 65%)',
          bottom: '10%',
          right: '8%',
          filter: 'blur(120px)',
          zIndex: 2,
        }}
        animate={{
          x: [0, -35, 0],
          y: [0, -25, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(60, 60, 80, 0.01) 0%, transparent 70%)',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(100px)',
          zIndex: 2,
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Ultra-minimal grid - almost invisible */}
      <div 
        className="absolute inset-0 opacity-[0.005] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Subtle vignette */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />
    </div>
  )
}
