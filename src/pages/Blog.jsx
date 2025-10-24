import { motion } from 'framer-motion'
import { useState } from 'react'
import BlogCard from '../components/BlogCard'
import { getAllPosts, categories, getPostsByCategory } from '../data/blogData'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const posts = selectedCategory === 'all' 
    ? getAllPosts() 
    : getPostsByCategory(selectedCategory)

  return (
    <div className="relative min-h-screen px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-medium mb-4 tracking-tight text-white">
            文章
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            设计思考、开发实践、医学循证与项目复盘
          </p>
        </motion.div>

        {/* 分类筛选 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`
              px-6 py-3 rounded-xl font-medium transition-all duration-300
              ${selectedCategory === 'all'
                ? 'bg-white/10 text-white border border-white/20'
                : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/8 hover:text-white/70'
              }
            `}
          >
            全部
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2
                ${selectedCategory === category.id
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/8 hover:text-white/70'
                }
              `}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* 文章列表 */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/30 text-lg">
              该分类暂无文章
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

