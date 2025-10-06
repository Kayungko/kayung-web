import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Award, Target } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // 使用 spring 平滑滚动值
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // 使用缓动函数让动画更流畅
  const y = useTransform(smoothProgress, [0, 1], [100, -100], {
    ease: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2 // easeInOutQuad
  })
  const titleY = useTransform(smoothProgress, [0, 0.5], [50, -50], {
    ease: (t) => 1 - Math.pow(1 - t, 3) // easeOutCubic
  })
  const statsY = useTransform(smoothProgress, [0.3, 1], [30, -30], {
    ease: (t) => t * t * (3 - 2 * t) // smoothstep
  })
  const experiences = [
    {
      icon: Briefcase,
      title: '职业背景',
      items: [
        '主职：设计师（游戏UI、应用UI）',
        '副职：应用开发',
        '前上海某数字医疗公司初创团队'
      ]
    },
    {
      icon: Award,
      title: '研发项目',
      items: [
        'TCSA 数字筛查干预',
        'PDD 数字干预',
        'ADHD 数字干预',
        '惊恐障碍数字干预'
      ]
    },
    {
      icon: Target,
      title: '专业能力',
      items: [
        '游戏UI设计 · 应用UI设计',
        'Unity UI开发',
        '数字健康产品设计',
        '医学干预应用开发'
      ]
    }
  ]

  return (
    <section ref={ref} id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ y: titleY, willChange: 'transform' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-4 tracking-tight text-white">
            专业能力
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            从设计到开发，打造完整的数字医疗产品
          </p>
        </motion.div>

        <motion.div 
          style={{ y, willChange: 'transform' }}
          className="grid md:grid-cols-3 gap-4"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card p-8 h-full pointer-events-auto">
                  <div className="mb-6">
                    <Icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-6 text-white">
                    {exp.title}
                  </h3>
                  
                  <ul className="space-y-2.5">
                    {exp.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-white/50 text-[15px] font-normal leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ y: statsY, willChange: 'transform' }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: '研发项目', value: '4+' },
            { label: '设计领域', value: '游戏+应用' },
            { label: '开发引擎', value: 'Unity' },
            { label: '医学支撑', value: '循证' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className={`font-medium text-white mb-1.5 ${stat.value.length > 4 ? 'text-2xl' : 'text-3xl'}`}>
                {stat.value}
              </div>
              <div className="text-white/40 text-sm font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
