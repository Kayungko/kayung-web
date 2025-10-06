import { motion } from 'framer-motion'
import { Baby, Brain, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import GlassSurface from './GlassSurface'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)

  const project = {
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
  }
  
  const Icon = project.icon
  const isExpanded = expandedProject === project.id

  return (
    <div id="projects" className="relative h-full flex items-start justify-center px-6 pt-32 pb-16 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-4 tracking-tight text-white">
            研发项目
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            基于医学循证的数字干预解决方案
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
                <GlassSurface
                  borderRadius={12}
                  displace={8}
                  distortionScale={-150}
                  redOffset={3}
                  greenOffset={8}
                  blueOffset={15}
                  className="overflow-hidden pointer-events-auto w-full [&>div]:!justify-start"
                >
                {/* Project Header */}
                <div
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  className="p-8 cursor-pointer flex items-start gap-6 group w-full"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg linear-border flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-white/60" strokeWidth={1.5} />
                  </div>

                  {/* Content - Vertical Stack */}
                  <div className="flex-1 min-w-0 space-y-4">
                    {/* Row 1: Project Code + Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/40 font-mono tracking-wide uppercase">
                        {project.code}
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5 text-white/30" strokeWidth={1.5} />
                      </motion.div>
                    </div>

                    {/* Row 2: Title + Subtitle (same line) */}
                    <div>
                      <h3 className="text-2xl font-medium text-white tracking-tight inline">
                        {project.title}
                      </h3>
                      <span className="text-[15px] text-white/40 font-normal ml-3">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Row 3: Description */}
                    <p className="text-white/50 leading-relaxed font-normal text-[15px]">
                      {project.description}
                    </p>

                    {/* Row 4: Highlights Grid (4 columns) */}
                    <div className="grid grid-cols-4 gap-3">
                      {project.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="px-4 py-3 text-sm text-white/60 border border-white/10 rounded-lg text-center backdrop-blur-sm bg-white/5"
                        >
                          {highlight}
                        </div>
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
                  <div className="px-8 pb-8 border-t border-white/[0.06] pt-6">
                    {/* Modules */}
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-white mb-3.5">
                        训练模块
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {project.modules.map((module, i) => (
                          <GlassSurface
                            key={i}
                            borderRadius={8}
                            displace={4}
                            distortionScale={-180}
                            redOffset={1}
                            greenOffset={3}
                            blueOffset={6}
                            className="p-4"
                          >
                            <div className="w-full">
                              <div className="font-medium text-white mb-1 text-[15px]">
                                {module.name}
                              </div>
                              <div className="text-sm text-white/50 font-normal leading-relaxed">
                                {module.desc}
                              </div>
                            </div>
                          </GlassSurface>
                        ))}
                      </div>
                    </div>

                    {/* Standards or Features */}
                    {project.standards && (
                      <div>
                        <h4 className="text-lg font-medium text-white mb-3.5">
                          合规标准
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
                          {project.standards.map((standard, i) => (
                            <div
                              key={i}
                              className="px-3 py-2 text-sm text-white/60 glass-tag rounded-lg text-center"
                            >
                              {standard}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.features && (
                      <div>
                        <h4 className="text-lg font-medium text-white mb-3.5">
                          无障碍特性
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                          {project.features.map((feature, i) => (
                            <div
                              key={i}
                              className="px-3 py-2.5 text-sm text-white/60 glass-tag rounded-lg text-center"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
                </GlassSurface>
        </motion.div>
      </div>
    </div>
  )
}
