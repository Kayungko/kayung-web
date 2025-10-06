import { motion } from 'framer-motion'
import { Briefcase, Award, Target } from 'lucide-react'
import GlassSurface from './GlassSurface'

export default function About() {
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
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-4 tracking-tight text-white">
            专业能力
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            从设计到开发，打造完整的数字医疗产品
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:grid-rows-1">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <GlassSurface 
                  borderRadius={12}
                  displace={6}
                  distortionScale={-160}
                  redOffset={2}
                  greenOffset={6}
                  blueOffset={12}
                  className="pointer-events-auto flex-1"
                >
                  <div className="flex flex-col h-full w-full p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                      <h3 className="text-xl font-medium text-white">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-2.5 flex-1">
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
                </GlassSurface>
              </motion.div>
            )
          })}
        </div>

        {/* Stats - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
