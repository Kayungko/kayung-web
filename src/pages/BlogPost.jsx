import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import SimpleGlassCard from '../components/SimpleGlassCard'
import BlogCard from '../components/BlogCard'
import { getPostBySlug, getRelatedPosts, formatDate, categories } from '../data/blogData'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  // 加载文章内容
  useEffect(() => {
    const loadContent = async () => {
      if (!post || !post.contentFile) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        // 使用fetch加载markdown文件
        const response = await fetch(`/src/data/posts/${post.contentFile}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const text = await response.text()
        setContent(text)
      } catch (error) {
        console.error('Failed to load post content:', error)
        setContent(`# 文章加载失败\n\n无法加载文章内容：${post.contentFile}\n\n请稍后重试。`)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [post])

  if (!post) {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-white mb-4">
            文章未找到
          </h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-white/50 hover:text-white/70 transition-colors"
          >
            返回文章列表
          </button>
        </div>
      </div>
    )
  }

  const category = categories.find(cat => cat.id === post.category)
  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <div className="relative min-h-screen px-6 py-32">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回文章列表</span>
          </Link>
        </motion.div>

        {/* 文章头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* 分类标签 */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">{category?.icon}</span>
            <span className="text-sm text-white/40 uppercase tracking-wide">
              {category?.name}
            </span>
          </div>

          {/* 标题 */}
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} 分钟阅读</span>
            </div>
            <div className="flex items-center gap-2">
              <span>作者：{post.author}</span>
            </div>
          </div>

          {/* 标签 */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-white/40" />
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm text-white/40 bg-white/5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* 文章内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SimpleGlassCard className="p-8 md:p-12">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white/20 mb-4"></div>
                  <p className="text-white/40">加载文章中...</p>
                </div>
              </div>
            ) : (
              <article className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <pre className="bg-black/40 rounded-lg p-4 overflow-x-auto my-4">
                        <code className={`language-${match[1]} text-sm text-white/80`} {...props}>
                          {String(children).replace(/\n$/, '')}
                        </code>
                      </pre>
                    ) : (
                      <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white/90" {...props}>
                        {children}
                      </code>
                    )
                  },
                  h2: ({children}) => (
                    <h2 className="text-2xl font-medium text-white mt-12 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({children}) => (
                    <h3 className="text-xl font-medium text-white mt-8 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({children}) => (
                    <p className="text-white/70 leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                  ul: ({children}) => (
                    <ul className="text-white/70 space-y-2 mb-6">
                      {children}
                    </ul>
                  ),
                  ol: ({children}) => (
                    <ol className="text-white/70 space-y-2 mb-6">
                      {children}
                    </ol>
                  ),
                  a: ({href, children}) => (
                    <a
                      href={href}
                      className="text-white/90 hover:text-white underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-white/20 pl-4 italic text-white/60 my-6">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
              </article>
            )}
          </SimpleGlassCard>
        </motion.div>

        {/* 相关文章 */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-medium text-white mb-8">
              相关文章
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

