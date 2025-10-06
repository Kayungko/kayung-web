import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react'
import AppleLiquidGlassButton from './AppleLiquidGlassButton'
import GlassSurface from './GlassSurface'

export default function Contact() {
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
    <div id="contact" className="relative h-full flex items-center px-6 py-16">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-4 tracking-tight text-white">
            联系方式
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            欢迎交流数字医疗、产品设计或开发相关话题
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 mb-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <GlassSurface
                  borderRadius={12}
                  displace={6}
                  distortionScale={-165}
                  redOffset={2}
                  greenOffset={6}
                  blueOffset={12}
                  className="pointer-events-auto"
                >
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 cursor-pointer group flex items-center gap-4 w-full"
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
                  </a>
                </GlassSurface>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GlassSurface
            borderRadius={16}
            displace={8}
            distortionScale={-155}
            redOffset={3}
            greenOffset={8}
            blueOffset={15}
            className="p-12 text-center pointer-events-auto"
          >
            <div className="w-full">
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
            </div>
          </GlassSurface>
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
    </div>
  )
}
