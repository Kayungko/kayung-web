# Kayung 个人网站

一个现代化的个人开发者网站，采用蓝紫科技风格，展示数字医疗项目和专业背景。

## 🎨 设计风格

- **Linear 风格**：简洁、现代、流畅的动画效果
- **配色方案**：蓝紫渐变科技风
- **视觉效果**：玻璃拟态（Glassmorphism）、动态背景、流畅过渡

## 🚀 技术栈

- **React 18** - 现代化 UI 框架
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 原子化 CSS 框架
- **Framer Motion** - 流畅的动画库
- **Lucide React** - 精美的图标库

## 📦 安装和运行

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📁 项目结构

```
kayungWebsit/
├── src/
│   ├── components/
│   │   ├── BackgroundEffect.jsx  # 动态背景效果
│   │   ├── Navigation.jsx        # 导航栏
│   │   ├── Hero.jsx             # 首页 Hero 区域
│   │   ├── About.jsx            # 关于我
│   │   ├── Projects.jsx         # 项目展示
│   │   └── Contact.jsx          # 联系方式
│   ├── App.jsx                  # 主应用组件
│   ├── main.jsx                 # 入口文件
│   └── index.css                # 全局样式
├── index.html                   # HTML 模板
├── package.json                 # 项目配置
├── vite.config.js              # Vite 配置
└── tailwind.config.js          # Tailwind 配置
```

## 🎯 功能特性

### 1. Hero 区域
- 动态欢迎文字
- 职业标识（设计师 + 开发者）
- 平滑滚动导航
- 呼吸效果的滚动指示器

### 2. 关于我
- 职业背景展示
- 研发项目列表
- 专业方向说明
- 统计数据可视化

### 3. 项目展示
- **K Project**：幼儿发展训练小游戏
  - 6大训练模块
  - 41篇医学文献支持
  - 多感官整合训练
  
- **T Project**：TCSA 老年认知训练
  - 6大认知维度
  - 22个训练模块
  - 无障碍设计

### 4. 联系方式
- 邮箱、GitHub、LinkedIn、微信
- 可点击跳转
- CTA 行动号召区域

## 🎨 自定义配置

### 修改颜色主题
编辑 `tailwind.config.js` 中的 `colors` 配置：

```js
colors: {
  primary: {
    // 自定义你的主色调
  }
}
```

### 修改个人信息
编辑 `src/components/Contact.jsx` 中的联系方式：

```js
const contacts = [
  {
    icon: Mail,
    label: '邮箱',
    value: 'your.email@example.com',  // 修改为你的邮箱
    link: 'mailto:your.email@example.com',
  },
  // ...
]
```

### 修改项目内容
编辑 `src/components/About.jsx` 和 `src/components/Projects.jsx` 中的项目信息。

## 📱 响应式设计

网站完全响应式，适配：
- 桌面端（1920px+）
- 平板端（768px - 1919px）
- 移动端（< 768px）

## 🌟 特色效果

1. **玻璃拟态卡片**：半透明背景 + 模糊效果
2. **动态渐变背景**：缓慢移动的彩色光球
3. **流畅动画**：Framer Motion 驱动的页面过渡
4. **悬停效果**：卡片缩放、发光、颜色变化
5. **滚动动画**：进入视口时触发的淡入效果

## 📝 待办事项

- [ ] 替换联系方式占位符为真实信息
- [ ] 添加简历下载功能
- [ ] 集成联系表单（可选）
- [ ] 添加博客模块（可选）
- [ ] SEO 优化
- [ ] 添加多语言支持（可选）

## 📄 许可证

MIT License

---

**开发者**: Kayung  
**设计风格**: Linear-inspired  
**最后更新**: 2025年10月

