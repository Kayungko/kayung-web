import { motion } from 'framer-motion'
import { Brain, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import SimpleGlassCard from './SimpleGlassCard'

export default function ProjectsT() {
  const [expandedProject, setExpandedProject] = useState(null)

  const project = {
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
  
  const Icon = project.icon
  const isExpanded = expandedProject === project.id

  return (
    <div id="projects-t" className="relative h-full flex items-start justify-center px-6 pt-32 pb-16 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SimpleGlassCard
            borderRadius="rounded-xl"
            className="overflow-hidden pointer-events-auto w-full"
            interactive={false}
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
                      <SimpleGlassCard
                        key={i}
                        borderRadius="rounded-lg"
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
                      </SimpleGlassCard>
                    ))}
                  </div>
                </div>

                {/* Features */}
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
          </SimpleGlassCard>
        </motion.div>

        {/* Project Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <SimpleGlassCard
            borderRadius="rounded-xl"
            className="text-center p-10 pointer-events-auto"
          >
            <div className="w-full">
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
            </div>
          </SimpleGlassCard>
        </motion.div>
      </div>
    </div>
  )
}

