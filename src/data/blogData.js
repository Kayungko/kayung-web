// 文章分类配置
export const categories = [
  {
    id: 'design-insights',
    name: '设计研究',
    description: '游戏UI、医疗应用、无障碍设计方法论',
    icon: '🎨',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'dev-notes',
    name: '开发笔记',
    description: 'Unity、React技术分享与实战经验',
    icon: '💻',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'medical-evidence',
    name: '医学循证',
    description: '认知训练、儿童发展、医学文献解读',
    icon: '📚',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'project-review',
    name: '项目复盘',
    description: '产品设计到上线的完整历程',
    icon: '🔄',
    color: 'from-orange-500/20 to-yellow-500/20'
  },
  {
    id: 'industry-insights',
    name: '行业观察',
    description: '数字医疗趋势与优秀案例分析',
    icon: '🔍',
    color: 'from-indigo-500/20 to-purple-500/20'
  }
]

// 文章元数据（文章内容在独立文件中）
export const blogPosts = [
  // 🎨 设计研究类
  {
    id: 'medical-ui-design-standards',
    slug: 'medical-ui-design-standards',
    title: '医疗应用界面设计规范与实践',
    category: 'design-insights',
    excerpt: '医疗应用的设计不仅要美观易用，更要符合HIPAA等法规要求，确保数据安全和用户信任。本文总结医疗UI设计的核心规范。',
    date: '2025-01-12',
    readTime: 12,
    tags: ['医疗设计', 'HIPAA', '用户信任'],
    author: 'Kayung',
    featured: false,
    contentFile: 'design-insights/medical-ui-design-standards.md'
  },
  {
    id: 'accessibility-design-practice',
    slug: 'accessibility-design-practice',
    title: '无障碍设计实践指南：让每个人都能使用你的产品',
    category: 'design-insights',
    excerpt: '无障碍设计不仅是道德责任，也是商业价值。全球约15%的人口有不同程度的障碍，你的设计能包容他们吗？',
    date: '2025-01-08',
    readTime: 15,
    tags: ['无障碍设计', 'WCAG', '包容性设计'],
    author: 'Kayung',
    featured: false,
    contentFile: 'design-insights/accessibility-design-practice.md'
  },
  {
    id: 'ui-animation-balance',
    slug: 'ui-animation-balance',
    title: 'UI动画设计的度：不过度也不平淡',
    category: 'design-insights',
    excerpt: '好的UI动画能提升用户体验，过度的动画会让人烦躁，没有动画则显得生硬。如何找到这个平衡点？',
    date: '2025-01-05',
    readTime: 10,
    tags: ['动画设计', '用户体验', 'Motion Design'],
    author: 'Kayung',
    featured: false,
    contentFile: 'design-insights/ui-animation-balance.md'
  },
  {
    id: 'game-ui-beyond-beautiful',
    slug: 'game-ui-beyond-beautiful',
    title: '为什么游戏UI不仅仅是好看',
    category: 'design-insights',
    excerpt: '好的游戏UI设计不只是视觉上的美观，更重要的是如何服务于玩家体验。本文探讨游戏UI设计中的功能性、可用性和情感设计。',
    date: '2025-01-15',
    readTime: 8,
    tags: ['UI设计', '游戏', '用户体验'],
    author: 'Kayung',
    featured: true,
    contentFile: 'design-insights/game-ui-beyond-beautiful.md'
  },
  {
    id: 'children-ui-principles',
    slug: 'children-ui-principles',
    title: '儿童应用界面设计的7个原则',
    category: 'design-insights',
    excerpt: '设计儿童应用不是把UI做得"更可爱"就行了。基于儿童发展心理学和实践经验，总结7个关键原则。',
    date: '2025-01-10',
    readTime: 10,
    tags: ['儿童设计', 'UI设计', '发展心理学'],
    author: 'Kayung',
    featured: true,
    contentFile: 'design-insights/children-ui-principles.md'
  },

  // 💻 开发笔记类
  {
    id: 'react-glassmorphism',
    slug: 'react-glassmorphism',
    title: 'React玻璃拟态效果的3种实现方式',
    category: 'dev-notes',
    excerpt: '从简单的CSS到复杂的SVG滤镜，对比三种玻璃拟态实现方案的性能与效果。',
    date: '2024-12-28',
    readTime: 10,
    tags: ['React', 'CSS', '性能优化'],
    author: 'Kayung',
    featured: false,
    contentFile: 'dev-notes/react-glassmorphism.md'
  },
  {
    id: 'unity-ui-optimization',
    slug: 'unity-ui-optimization',
    title: 'Unity UI性能优化实战',
    category: 'dev-notes',
    excerpt: '在开发K Project时遇到的UI性能问题及解决方案。从60fps掉到20fps，再优化回稳定60fps的全过程。',
    date: '2025-01-08',
    readTime: 12,
    tags: ['Unity', '性能优化', '技术实战'],
    author: 'Kayung',
    featured: false,
    contentFile: 'dev-notes/unity-ui-optimization.md'
  },
  {
    id: 'unity-react-comparison',
    slug: 'unity-react-comparison',
    title: 'Unity与React：两个世界的技术对比',
    category: 'dev-notes',
    excerpt: '作为同时使用Unity和React的开发者，对比这两个技术栈的异同，分享跨栈开发的思考。',
    date: '2025-01-03',
    readTime: 15,
    tags: ['Unity', 'React', '技术对比'],
    author: 'Kayung',
    featured: false,
    contentFile: 'dev-notes/unity-react-comparison.md'
  },
  {
    id: 'frontend-performance-monitoring',
    slug: 'frontend-performance-monitoring',
    title: '前端性能监控与优化实战指南',
    category: 'dev-notes',
    excerpt: '从发现问题到解决问题的完整流程。个人网站性能提升75%的实战经验，附完整的优化前后数据对比。',
    date: '2024-12-25',
    readTime: 18,
    tags: ['性能优化', 'Web Vitals', '监控'],
    author: 'Kayung',
    featured: true,
    contentFile: 'dev-notes/frontend-performance-monitoring.md'
  },
  {
    id: 'vite-react-project-setup',
    slug: 'vite-react-project-setup',
    title: '从零开始搭建现代化React项目',
    category: 'dev-notes',
    excerpt: 'Vite + React + Tailwind CSS完整搭建指南。从项目初始化到部署上线，包含最佳实践和性能优化。',
    date: '2024-12-20',
    readTime: 20,
    tags: ['Vite', 'React', 'Tailwind CSS'],
    author: 'Kayung',
    featured: false,
    contentFile: 'dev-notes/vite-react-project-setup.md'
  },

  // 📚 医学循证类
  {
    id: 'aap-2020-guidelines',
    slug: 'aap-2020-guidelines',
    title: 'AAP 2020数字媒体指南解读',
    category: 'medical-evidence',
    excerpt: '美国儿科学会2020年发布的儿童数字媒体使用指南，对儿童应用开发者有哪些启示？',
    date: '2025-01-05',
    readTime: 15,
    tags: ['医学指南', '儿童健康', 'AAP'],
    author: 'Kayung',
    featured: true,
    contentFile: 'medical-evidence/aap-2020-guidelines.md'
  },
  {
    id: 'who-physical-activity-guidelines',
    slug: 'who-physical-activity-guidelines',
    title: 'WHO幼儿身体活动指南：屏幕时间的另一面',
    category: 'medical-evidence',
    excerpt: '世界卫生组织2019年发布的5岁以下儿童身体活动指南。健康不是单一维度的，而是睡眠、活动、久坐的整体平衡。',
    date: '2025-01-18',
    readTime: 18,
    tags: ['WHO指南', '身体活动', '儿童健康', '屏幕时间'],
    author: 'Kayung',
    featured: true,
    contentFile: 'medical-evidence/who-physical-activity-guidelines.md'
  },
  {
    id: 'child-development-milestones',
    slug: 'child-development-milestones',
    title: '儿童发展里程碑与应用设计',
    category: 'medical-evidence',
    excerpt: '基于儿童发展心理学，总结各年龄段的发展里程碑，分享如何应用到产品设计中。',
    date: '2025-01-08',
    readTime: 12,
    tags: ['儿童发展', '认知心理学', '产品设计'],
    author: 'Kayung',
    featured: false,
    contentFile: 'medical-evidence/child-development-milestones.md'
  },
  {
    id: 'cognitive-training-effectiveness',
    slug: 'cognitive-training-effectiveness',
    title: '认知训练真的有效吗？',
    category: 'medical-evidence',
    excerpt: '基于41篇认知科学文献，深入分析认知训练的有效性、迁移效应和争议。',
    date: '2025-01-03',
    readTime: 20,
    tags: ['认知训练', '科学研究', '迁移效应'],
    author: 'Kayung',
    featured: false,
    contentFile: 'medical-evidence/cognitive-training-effectiveness.md'
  },
  {
    id: 'elderly-cognitive-health',
    slug: 'elderly-cognitive-health',
    title: '老年认知健康：从正常老化到认知障碍',
    category: 'medical-evidence',
    excerpt: '理解正常认知老化和病理性衰退的区别，为T Project的设计提供科学依据。',
    date: '2024-12-28',
    readTime: 15,
    tags: ['老年健康', '认知老化', '阿尔茨海默病'],
    author: 'Kayung',
    featured: false,
    contentFile: 'medical-evidence/elderly-cognitive-health.md'
  },

  // 🔄 项目复盘类
  {
    id: 'k-project-journey',
    slug: 'k-project-journey',
    title: 'K Project：从想法到产品的180天',
    category: 'project-review',
    excerpt: '记录K Project从最初想法到第一个可用版本的完整历程，包括设计决策、技术选型和踩过的坑。',
    date: '2025-01-01',
    readTime: 20,
    tags: ['项目复盘', 'K Project', '产品开发'],
    author: 'Kayung',
    featured: true,
    contentFile: 'project-review/k-project-journey.md'
  },

  // 🔍 行业观察类
  {
    id: 'digital-health-trends-2024',
    slug: 'digital-health-trends-2024',
    title: '数字医疗行业2024-2025趋势观察：从炒作到落地',
    category: 'industry-insights',
    excerpt: '数字医疗行业进入关键转折点。分析7大趋势：AI从辅助到核心、远程医疗常态化、可穿戴设备医疗化、心理健康爆发等。',
    date: '2025-01-20',
    readTime: 25,
    tags: ['数字医疗', '行业趋势', 'AI', '远程医疗'],
    author: 'Kayung',
    featured: true,
    contentFile: 'industry-insights/digital-health-trends-2024.md'
  },
  {
    id: 'children-app-case-studies',
    slug: 'children-app-case-studies',
    title: '优秀儿童应用案例分析：他们做对了什么？',
    category: 'industry-insights',
    excerpt: '深度分析Duolingo、Khan Academy Kids、Toca Boca等7个优秀儿童应用，总结他们的设计亮点和K Project的借鉴。',
    date: '2025-01-22',
    readTime: 22,
    tags: ['案例分析', '儿童应用', '产品设计', '用户体验'],
    author: 'Kayung',
    featured: true,
    contentFile: 'industry-insights/children-app-case-studies.md'
  }
]

// 获取所有文章
export const getAllPosts = () => {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// 根据分类获取文章
export const getPostsByCategory = (categoryId) => {
  return blogPosts
    .filter(post => post.category === categoryId)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

// 获取特色文章
export const getFeaturedPosts = () => {
  return blogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
}

// 根据slug获取文章元数据
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

// 获取分类信息
export const getCategories = () => {
  return categories.map(cat => cat.name)
}

// 异步加载文章内容
export const loadPostContent = async (contentFile) => {
  try {
    const module = await import(`./posts/${contentFile}?raw`)
    return module.default
  } catch (error) {
    console.error(`Failed to load post content: ${contentFile}`, error)
    return `# 文章加载失败\n\n无法加载文章内容，请稍后重试。`
  }
}

// 获取相关文章
export const getRelatedPosts = (currentPost, limit = 3) => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.category === currentPost.category
    )
    .slice(0, limit)
}

// 格式化日期
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
