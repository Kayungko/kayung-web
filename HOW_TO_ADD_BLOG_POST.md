# 如何添加新的博客文章

## 📁 新的文件结构

现在每篇文章都在独立的 Markdown 文件中，更易于管理和维护！

```
src/data/
├── blogData.js           # 只包含文章元数据
└── posts/                # 文章内容目录
    ├── design-insights/  # 设计研究类
    │   ├── medical-ui-design-standards.md
    │   ├── accessibility-design-practice.md
    │   ├── ui-animation-balance.md
    │   ├── game-ui-beyond-beautiful.md
    │   └── children-ui-principles.md
    ├── dev-notes/        # 开发笔记类
    │   ├── react-glassmorphism.md
    │   └── unity-ui-optimization.md
    ├── medical-evidence/ # 医学循证类
    │   └── aap-2020-guidelines.md
    ├── project-review/   # 项目复盘类
    │   └── k-project-journey.md
    └── industry-insights/ # 行业观察类
        └── (待添加)
```

---

## ✍️ 添加新文章的步骤

### 步骤1：创建 Markdown 文件

在对应的类别目录下创建 `.md` 文件：

```bash
# 例如：添加一篇设计研究类文章
touch src/data/posts/design-insights/my-new-article.md
```

**文件命名规范：**
- 使用小写字母
- 单词之间用连字符 `-` 分隔
- 使用英文命名
- 例如：`color-psychology-ui-design.md`

### 步骤2：编写文章内容

在 Markdown 文件中撰写文章：

```markdown
# 文章标题

## 引言

文章内容...

## 第一章节

### 小节标题

内容...

**加粗文本**

*斜体文本*

- 列表项1
- 列表项2

\`\`\`javascript
// 代码块
const example = 'Hello World'
\`\`\`

---

## 参考资料

- 资料1
- 资料2
```

### 步骤3：在 blogData.js 添加元数据

打开 `src/data/blogData.js`，在 `blogPosts` 数组中添加新文章的元数据：

```javascript
export const blogPosts = [
  // ... 现有文章 ...
  
  // 你的新文章
  {
    id: 'my-new-article',                    // 唯一ID
    slug: 'my-new-article',                  // URL slug（与ID相同）
    title: '我的新文章标题',                 // 显示的标题
    category: 'design-insights',             // 所属类别
    excerpt: '文章简介，会显示在卡片上',    // 摘要
    date: '2025-01-20',                     // 发布日期 YYYY-MM-DD
    readTime: 10,                           // 阅读时长（分钟）
    tags: ['标签1', '标签2', '标签3'],      // 标签
    author: 'Kayung',                       // 作者
    featured: false,                        // 是否为精选文章
    contentFile: 'design-insights/my-new-article.md'  // 文件路径（相对于posts/）
  }
]
```

**重要字段说明：**

| 字段 | 说明 | 示例 |
|------|------|------|
| `id` | 唯一标识符，不可重复 | `'color-psychology'` |
| `slug` | URL路径，通常与id相同 | `'color-psychology'` |
| `category` | 文章类别ID，见下表 | `'design-insights'` |
| `contentFile` | 文件路径（相对于posts/目录） | `'design-insights/color-psychology.md'` |
| `featured` | 是否在首页精选区显示 | `true` / `false` |

**可用的类别（category）：**

| ID | 中文名 | 说明 |
|----|----|------|
| `design-insights` | 设计研究 | 游戏UI、医疗应用、无障碍设计方法论 |
| `dev-notes` | 开发笔记 | Unity、React技术分享与实战经验 |
| `medical-evidence` | 医学循证 | 认知训练、儿童发展、医学文献解读 |
| `project-review` | 项目复盘 | 产品设计到上线的完整历程 |
| `industry-insights` | 行业观察 | 数字医疗趋势与优秀案例分析 |

### 步骤4：测试

运行开发服务器查看效果：

```bash
npm run dev
```

访问：`http://localhost:5173/blog`

点击你的新文章，确认：
- ✅ 文章能正常加载
- ✅ 标题、日期、标签等信息正确显示
- ✅ Markdown渲染正常
- ✅ 代码高亮正常
- ✅ 图片正常显示（如果有）

---

## 📝 Markdown 写作技巧

### 支持的语法

#### 1. 标题
```markdown
# 一级标题（文章标题）
## 二级标题（章节）
### 三级标题（小节）
```

#### 2. 文本样式
```markdown
**加粗文本**
*斜体文本*
~~删除线~~
`行内代码`
```

#### 3. 列表
```markdown
无序列表：
- 项目1
- 项目2
  - 子项目

有序列表：
1. 第一步
2. 第二步
3. 第三步
```

#### 4. 代码块
````markdown
```javascript
const greeting = 'Hello World'
console.log(greeting)
```

```python
def hello():
    print("Hello World")
```

```css
.class-name {
  color: white;
}
```
````

**支持的语言：**
`javascript`, `typescript`, `jsx`, `tsx`, `python`, `css`, `html`, `json`, `bash`, `sql`, `java`, `go`, `rust`, 等

#### 5. 链接
```markdown
[链接文字](https://example.com)
[相对链接](/blog)
```

#### 6. 图片
```markdown
![图片描述](./images/example.png)
![网络图片](https://example.com/image.png)
```

#### 7. 引用
```markdown
> 这是一段引用文字
> 可以多行
```

#### 8. 表格
```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |
```

#### 9. 分隔线
```markdown
---
或
***
```

#### 10. 任务列表
```markdown
- [ ] 未完成任务
- [x] 已完成任务
```

---

## 🎨 写作风格建议

### 1. 结构清晰
- 使用明确的标题层级
- 每个章节聚焦一个主题
- 适当使用分隔线划分章节

### 2. 可读性
- 段落不要太长（3-5行为宜）
- 使用列表归纳要点
- 适当使用加粗强调关键词

### 3. 代码示例
- 提供完整的可运行代码
- 添加注释说明关键部分
- 展示前后对比（优化类文章）

### 4. 数据支撑
- 引用真实的研究或数据
- 提供优化前后的对比数据
- 包含测试结果和截图

### 5. 实用性
- 提供可操作的建议
- 分享实际踩过的坑
- 给出具体的解决方案

---

## 📊 现有文章状态

### 🎨 设计研究（5/5篇）
1. ✅ 医疗应用界面设计规范与实践
2. ✅ 无障碍设计实践指南
3. ✅ UI动画设计的度
4. ⚠️ 游戏UI设计（占位符，需填充）
5. ⚠️ 儿童应用UI原则（占位符，需填充）

### 💻 开发笔记（2/5篇）
1. ⚠️ React玻璃拟态实现（占位符，**推荐优先完成**）
2. ⚠️ Unity UI性能优化（占位符，需填充）
3. ⬜ 需要新增3篇

### 📚 医学循证（1/5篇）
1. ⚠️ AAP 2020指南解读（占位符，需填充）
2. ⬜ 需要新增4篇

### 🔄 项目复盘（1/5篇）
1. ⚠️ K Project历程（占位符，**推荐优先完成**）
2. ⬜ 需要新增4篇

### 🔍 行业观察（0/5篇）
1. ⬜ 需要新增5篇

**图例：**
- ✅ 完整内容
- ⚠️ 占位符（需填充真实内容）
- ⬜ 未创建

---

## 🚀 推荐优先完成的文章

### 第一优先级（最容易完成）：
1. **React玻璃拟态实现** - 代码和数据都有，2-3天完成
2. **K Project历程** - 整理项目资料即可，最有价值

### 第二优先级（需要调研）：
3. **AAP指南解读** - 阅读官方文档
4. **儿童UI设计原则** - 查阅研究文献

---

## ❓ 常见问题

### Q: 文章加载失败怎么办？
**A:** 检查：
1. 文件路径是否正确（`contentFile`字段）
2. 文件是否存在于对应目录
3. 文件扩展名是否为 `.md`
4. 控制台是否有错误信息

### Q: 代码高亮不显示？
**A:** 确保：
1. 代码块指定了语言：````javascript`
2. 语言名称拼写正确
3. 已安装 `react-syntax-highlighter`

### Q: 图片不显示？
**A:** 
1. 使用相对路径：`./images/pic.png`
2. 或使用绝对路径：`/src/assets/pic.png`
3. 或使用网络图片：`https://...`

### Q: 如何修改现有文章？
**A:** 直接编辑对应的 `.md` 文件即可，保存后刷新页面。

---

## 📚 参考资料

- [Markdown 语法指南](https://www.markdownguide.org/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [代码高亮语言列表](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD)

---

**祝写作愉快！** ✨

