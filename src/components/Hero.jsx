import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import BlurText from './BlurText'
import AppleLiquidGlassButton from './AppleLiquidGlassButton'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // 使用 spring 平滑滚动值，减少卡顿
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // 使用缓动函数让动画更流畅
  const y = useTransform(smoothProgress, [0, 1], [0, -150], {
    ease: (t) => t * t * (3 - 2 * t) // smoothstep
  })
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.3], {
    ease: (t) => 1 - Math.pow(1 - t, 3) // easeOutCubic
  })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div 
        style={{ 
          y, 
          opacity,
          willChange: 'transform, opacity'
        }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* Main headline - Linear/Reflect style */}
          <div className="pointer-events-none">
            <BlurText
              text="游戏不止是娱乐"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.1] text-white"
            />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-normal leading-relaxed pointer-events-none">
            专注于认知训练与儿童发展领域的设计师与开发者
          </p>

          {/* CTA Buttons - Apple Liquid Glass style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 pointer-events-auto">
            <AppleLiquidGlassButton
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
              size="medium"
            >
              查看项目
            </AppleLiquidGlassButton>
            <AppleLiquidGlassButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="secondary"
              size="medium"
            >
              联系我
            </AppleLiquidGlassButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
