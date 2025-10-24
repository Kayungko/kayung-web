# 从零开始搭建现代化React项目：Vite + TypeScript + Tailwind

## 引言

个人网站使用Vite + React + Tailwind CSS构建，相比传统的Create React App，开发体验提升明显。本文分享从零搭建现代化React项目的完整流程。

**为什么选择这个技术栈：**
- **Vite** - 极速的开发服务器和构建工具
- **React 18** - 最新特性（Concurrent Mode、Suspense）
- **Tailwind CSS** - 高效的样式开发
- **TypeScript**（可选）- 类型安全

---

## 一、创建项目

### 方式1：使用Vite（推荐）

```bash
# 创建项目
npm create vite@latest my-react-app

# 选择配置
✔ Select a framework: › React
✔ Select a variant: › JavaScript 或 TypeScript

# 进入目录
cd my-react-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

**初始目录结构：**
```
my-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

### 方式2：手动搭建（理解原理）

```bash
# 创建目录
mkdir my-react-app && cd my-react-app

# 初始化package.json
npm init -y

# 安装核心依赖
npm install react react-dom

# 安装开发依赖
npm install -D vite @vitejs/plugin-react
```

**创建 vite.config.js：**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**创建 index.html：**
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**创建 src/main.jsx：**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 二、配置Tailwind CSS

### 安装

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 配置tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 配置src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 自定义样式 */
@layer base {
  body {
    @apply bg-gray-900 text-white;
  }
}

@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors;
  }
}
```

### 测试Tailwind

```jsx
// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Hello Tailwind!
        </h1>
        <button className="btn-primary">
          Click Me
        </button>
      </div>
    </div>
  )
}
```

---

## 三、配置React Router

### 安装

```bash
npm install react-router-dom
```

### 配置路由

```jsx
// src/main.jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

```jsx
// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-800">
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
```

---

## 四、配置状态管理（Zustand）

### 为什么选择Zustand？

相比Redux：
- ✅ 更简单（无需reducer、action）
- ✅ 更小（~1KB）
- ✅ 无需Provider
- ✅ TypeScript友好

### 安装

```bash
npm install zustand
```

### 创建Store

```javascript
// src/store/useStore.js
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

export default useStore
```

### 使用Store

```jsx
// src/components/Counter.jsx
import useStore from '../store/useStore'

export default function Counter() {
  const { count, increment, decrement, reset } = useStore()
  
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Count: {count}</h2>
      <div className="flex gap-2 justify-center">
        <button onClick={increment} className="btn-primary">+</button>
        <button onClick={decrement} className="btn-primary">-</button>
        <button onClick={reset} className="btn-primary">Reset</button>
      </div>
    </div>
  )
}
```

---

## 五、配置UI动画（Framer Motion）

### 安装

```bash
npm install framer-motion
```

### 基础使用

```jsx
import { motion } from 'framer-motion'

export default function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-6 bg-gray-800 rounded-lg"
    >
      <h3>Animated Card</h3>
    </motion.div>
  )
}
```

### 页面过渡

```jsx
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, Routes, Route } from 'react-router-dom'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Home />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  )
}
```

---

## 六、配置环境变量

### 创建.env文件

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My React App
```

```bash
# .env.production
VITE_API_URL=https://production-api.example.com
```

### 使用环境变量

```javascript
// src/config.js
export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  appTitle: import.meta.env.VITE_APP_TITLE,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
}
```

**注意：**
- Vite使用 `import.meta.env` 而非 `process.env`
- 变量必须以 `VITE_` 开头才能在客户端访问

---

## 七、配置代码质量工具

### ESLint（代码规范）

```bash
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks
```

```javascript
// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
}
```

### Prettier（代码格式化）

```bash
npm install -D prettier
```

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### Husky + lint-staged（Git Hooks）

```bash
npm install -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

---

## 八、配置构建优化

### vite.config.js完整配置

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // 路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  
  // 开发服务器
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://api.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  
  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    // 静态资源目录
    assetsDir: 'assets',
    // 代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion'],
          'utils': ['zustand'],
        },
      },
    },
    // 压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // 生产环境移除console
      },
    },
    // Chunk大小警告阈值
    chunkSizeWarningLimit: 1000,
  },
})
```

---

## 九、目录结构最佳实践

### 推荐结构

```
src/
├── assets/          # 静态资源
│   ├── images/
│   └── fonts/
├── components/      # 公共组件
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   └── index.js
│   └── Card/
├── pages/           # 页面组件
│   ├── Home/
│   ├── About/
│   └── Blog/
├── hooks/           # 自定义Hooks
│   ├── useLocalStorage.js
│   └── useDebounce.js
├── store/           # 状态管理
│   ├── useStore.js
│   └── slices/
├── utils/           # 工具函数
│   ├── format.js
│   └── validate.js
├── services/        # API服务
│   ├── api.js
│   └── endpoints.js
├── styles/          # 全局样式
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## 十、部署

### 构建生产版本

```bash
npm run build
```

生成的 `dist/` 目录包含优化后的静态文件。

### 部署到Vercel

```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel
```

**vercel.json配置：**
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 部署到Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 十一、常用脚本

```json
// package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx",
    "lint:fix": "eslint src --ext js,jsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,css}\"",
    "test": "vitest",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 十二、性能优化技巧

### 1. 代码分割

```jsx
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  )
}
```

### 2. 图片优化

```jsx
// 使用动态import
const images = import.meta.glob('./assets/*.{png,jpg,jpeg,webp}', {
  eager: false
})

// 懒加载图片
<img loading="lazy" src="..." alt="..." />
```

### 3. 预加载关键资源

```html
<!-- index.html -->
<link rel="preload" as="font" href="/fonts/custom.woff2" type="font/woff2" crossorigin>
```

---

## 总结

**完整技术栈：**
- ⚡ Vite - 快速开发和构建
- ⚛️ React 18 - UI库
- 🎨 Tailwind CSS - 样式
- 🚦 React Router - 路由
- 🐻 Zustand - 状态管理
- 🎭 Framer Motion - 动画
- 📏 ESLint + Prettier - 代码质量

**优势：**
- 开发体验好
- 构建速度快
- 生态成熟
- 易于维护

---

## 参考资源

**官方文档：**
- vitejs.dev
- react.dev
- tailwindcss.com

**模板项目：**
- github.com/your-username/vite-react-template

**搜索关键词：**
- "Vite React setup guide"
- "modern React project structure"
- "Tailwind CSS best practices"
- "React performance optimization"

---

*本文基于个人网站的实际搭建经验撰写，提供完整的配置代码和最佳实践。*

