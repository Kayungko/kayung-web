import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react'
import AppleLiquidGlassButton from './AppleLiquidGlassButton'

export default function Contact() {
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
  const y = useTransform(smoothProgress, [0, 1], [60, -60], {
    ease: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2 // easeInOutQuad
  })
  const titleY = useTransform(smoothProgress, [0, 0.5], [50, -50], {
    ease: (t) => 1 - Math.pow(1 - t, 3) // easeOutCubic
  })
  const ctaY = useTransform(smoothProgress, [0.3, 1], [30, -30], {
    ease: (t) => t * t * (3 - 2 * t) // smoothstep
  })
  const contacts = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kayung',
      link: 'https://github.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kayung',
      link: 'https://linkedin.com'
    },
    {
      icon: MessageCircle,
      label: '微信',
      value: 'WeChat ID',
      link: '#'
    }
  ]

  return (
    <section ref={ref} id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ y: titleY, willChange: 'transform' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-4 tracking-tight text-white">
            联系方式
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            欢迎交流数字医疗、产品设计或开发相关话题
          </p>
        </motion.div>

        <motion.div 
          style={{ y, willChange: 'transform' }}
          className="grid md:grid-cols-2 gap-3 mb-12"
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-6 cursor-pointer group flex items-center gap-4 pointer-events-auto"
              >
                <div className="w-10 h-10 rounded-lg linear-border flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white/60" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/40 mb-1 font-normal uppercase tracking-wide">
                    {contact.label}
                  </div>
                  <div className="text-[15px] font-normal text-white/80">
                    {contact.value}
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ y: ctaY, willChange: 'transform' }}
          className="glass-card p-12 text-center pointer-events-auto"
        >
          <h3 className="text-3xl font-medium text-white mb-4 tracking-tight">
            让我们一起创造有意义的产品
          </h3>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto font-normal text-[15px] leading-relaxed">
            如果你对数字医疗、认知训练或儿童发展项目感兴趣，欢迎与我取得联系
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <AppleLiquidGlassButton
              variant="primary"
              size="medium"
            >
              发送邮件
            </AppleLiquidGlassButton>
            <AppleLiquidGlassButton
              variant="secondary"
              size="medium"
            >
              查看简历
            </AppleLiquidGlassButton>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 glass-tag rounded-full">
            <span className="text-sm text-white/40 font-normal">
              ℹ️ 以上联系方式为占位符，请替换为实际信息
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
