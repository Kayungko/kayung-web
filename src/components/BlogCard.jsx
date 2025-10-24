import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SimpleGlassCard from './SimpleGlassCard'
import { formatDate, categories } from '../data/blogData'

export default function BlogCard({ post, index = 0 }) {
  const category = categories.find(cat => cat.id === post.category)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/post/${post.slug}`}>
        <SimpleGlassCard className="p-6 group cursor-pointer h-full flex flex-col">
          {/* 分类标签 */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{category?.icon}</span>
            <span className="text-xs text-white/40 uppercase tracking-wide">
              {category?.name}
            </span>
          </div>

          {/* 标题 */}
          <h3 className="text-xl font-medium text-white mb-3 group-hover:text-white/90 transition-colors">
            {post.title}
          </h3>

          {/* 摘要 */}
          <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
            {post.excerpt}
          </p>

          {/* 元信息 */}
          <div className="flex items-center gap-4 text-xs text-white/30 pt-4 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime} 分钟</span>
            </div>
            <div className="ml-auto flex items-center gap-1 text-white/40 group-hover:text-white/60 transition-colors">
              <span>阅读</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 标签 */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs text-white/40 bg-white/5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </SimpleGlassCard>
      </Link>
    </motion.div>
  )
}

