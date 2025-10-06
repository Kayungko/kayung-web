import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Baby, Brain, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)
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
  const y = useTransform(smoothProgress, [0, 1], [80, -80], {
    ease: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2 // easeInOutQuad
  })
  const titleY = useTransform(smoothProgress, [0, 0.5], [60, -60], {
    ease: (t) => 1 - Math.pow(1 - t, 3) // easeOutCubic
  })
  const statusY = useTransform(smoothProgress, [0.5, 1], [40, -40], {
    ease: (t) => t * t * (3 - 2 * t) // smoothstep
  })

  const projects = [
    {
      id: 'k-project',
      code: 'K Project',
      icon: Baby,
      title: '幼儿发展训练小游戏',
      subtitle: '医学增强版',
      description: '基于儿童神经科学、发育心理学及权威医学文献设计的幼儿发展训练应用',
      highlights: [
        '6大训练模块',
        '41篇权威医学文献支持',
        '多感官整合训练',
        '家长陪同设计'
      ],
      modules: [
        { name: '软萌触感配对', desc: '触觉-视觉-听觉多感官整合训练' },
        { name: '小手抓抓乐', desc: '精细运动与因果认知训练' },
        { name: '亲子找找看', desc: '视觉追踪与社交认知训练' },
        { name: '轻轻唱童谣', desc: '音乐感知与情绪调节训练' },
        { name: '玩具躲猫猫', desc: '客体永久性与记忆训练' },
        { name: '宝宝识世界', desc: '双语看图识物与词汇认知训练' }
      ],
      standards: [
        'AAP 2020年数字媒体指南',
        'WHO 2019年幼儿身体活动指南',
        'COPPA 儿童隐私保护法',
        'GDPR 儿童数据保护条款'
      ]
    },
    {
      id: 't-project',
      code: 'T Project',
      icon: Brain,
      title: 'TCSA 娱乐化干预训练',
      subtitle: '老年认知训练系统',
      description: '针对老年人认知能力的综合训练系统，覆盖6大认知维度',
      highlights: [
        '6大认知维度',
        '22个细分训练模块',
        '日常场景适配',
        '无障碍设计'
      ],
      modules: [
        { name: '注意力维度', desc: '警觉性、持续注意、选择性注意、分配注意' },
        { name: '记忆维度', desc: '瞬时记忆、短期记忆、工作记忆、情景记忆、程序记忆' },
        { name: '执行功能', desc: '目标设定、抑制控制、认知灵活性、问题解决' },
        { name: '视空间能力', desc: '视觉搜索、空间定位、深度知觉、视觉运动整合' },
        { name: '语言能力', desc: '语音知觉、语言理解、词汇提取、语言表达、语用能力' },
        { name: '社交认知', desc: '情绪识别、共情能力、心理理论、社交决策' }
      ],
      features: [
        '大按钮设计（≥5cm）',
        '语音控制支持',
        '可调音量（最大80分贝）',
        '放大镜功能',
        '难度自适应'
      ]
    }
  ]

  return (
    <section ref={ref} id="projects" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ y: titleY, willChange: 'transform' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-4 tracking-tight text-white">
            研发项目
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            基于医学循证的数字干预解决方案
          </p>
        </motion.div>

        <motion.div 
          style={{ y, willChange: 'transform' }}
          className="space-y-3"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            const isExpanded = expandedProject === project.id

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden pointer-events-auto"
              >
                {/* Project Header */}
                <div
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  className="p-8 cursor-pointer flex items-start gap-6 group"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg linear-border flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-white/60" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="text-xs text-white/40 mb-1.5 font-mono tracking-wide uppercase">
                          {project.code}
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-1.5 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-[15px] text-white/40 font-normal">
                          {project.subtitle}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4"
                      >
                        <ChevronRight className="w-5 h-5 text-white/30" strokeWidth={1.5} />
                      </motion.div>
                    </div>

                    <p className="text-white/50 mb-5 leading-relaxed font-normal text-[15px]">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs text-white/50 glass-tag"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 border-t border-white/[0.06] pt-8">
                    {/* Modules */}
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-white mb-4">
                        训练模块
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.modules.map((module, i) => (
                          <div
                            key={i}
                            className="glass-card p-5"
                          >
                            <div className="font-medium text-white mb-1.5 text-[15px]">
                              {module.name}
                            </div>
                            <div className="text-sm text-white/50 font-normal leading-relaxed">
                              {module.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Standards or Features */}
                    {project.standards && (
                      <div>
                        <h4 className="text-lg font-medium text-white mb-4">
                          合规标准
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.standards.map((standard, i) => (
                            <span
                              key={i}
                              className="px-4 py-2.5 text-sm text-white/60 glass-tag rounded-lg"
                            >
                              {standard}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.features && (
                      <div>
                        <h4 className="text-lg font-medium text-white mb-4">
                          无障碍特性
                        </h4>
                        <div className="grid md:grid-cols-3 gap-2">
                          {project.features.map((feature, i) => (
                            <div
                              key={i}
                              className="px-4 py-3 text-sm text-white/60 glass-tag rounded-lg text-center"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Project Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ y: statusY, willChange: 'transform' }}
          className="mt-16 text-center glass-card p-10 pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 glass-tag rounded-full mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="text-sm text-white/60 font-normal">项目状态</span>
          </div>
          <p className="text-xl text-white font-normal mb-2">
            两个项目目前处于<span className="text-white/90 font-medium">规划设计阶段</span>
          </p>
          <p className="text-white/50 font-normal text-[15px]">
            正在进行需求分析、用户研究和技术架构设计
          </p>
        </motion.div>
      </div>
    </section>
  )
}
