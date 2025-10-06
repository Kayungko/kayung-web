import { motion } from 'framer-motion'
import BlurText from './BlurText'
import AppleLiquidGlassButton from './AppleLiquidGlassButton'

export default function Hero() {
  return (
    <div className="relative h-full flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center relative z-10">
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
      </div>
    </div>
  )
}
