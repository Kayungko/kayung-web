# 快速部署参考

## 🚀 三步部署

### 1️⃣ 构建
```bash
npm run build
```

### 2️⃣ 上传到服务器
**方式 A - 使用部署脚本（推荐）：**
```bash
./deploy.sh 你的服务器IP /opt/1panel/apps/openresty/openresty/www/sites/你的网站名称/index
```

**方式 B - 手动上传：**
```bash
scp -r dist/* root@你的服务器IP:/网站目录/
```

**方式 C - 使用 1Panel 文件管理：**
- 登录 1Panel
- 进入文件管理
- 导航到网站目录
- 上传 `dist` 目录下所有文件

### 3️⃣ 验证
访问您的域名检查部署是否成功

---

## 📁 目录结构

```
kayungWebsit/
├── dist/                          # 构建产物（上传这个目录的内容）
│   ├── index.html
│   └── assets/
├── 1PANEL_DEPLOYMENT_GUIDE.md    # 详细部署指南
├── deploy.sh                      # 自动部署脚本
├── nginx.conf                     # Nginx 配置文件
├── Dockerfile                     # Docker 部署配置
└── package.json
```

---

## 🔧 常用命令

```bash
# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 部署到服务器
./deploy.sh [服务器IP] [网站目录]
```

---

## 📍 1Panel 默认路径

```
网站目录: /opt/1panel/apps/openresty/openresty/www/sites/[网站名称]/index
Nginx配置: /opt/1panel/apps/openresty/openresty/conf/conf.d/[网站名称].conf
```

---

## ✅ 部署检查清单

- [ ] `npm run build` 成功执行
- [ ] `dist` 目录包含 `index.html` 和 `assets` 文件夹
- [ ] 服务器 SSH 连接正常
- [ ] 网站目录权限正确（755）
- [ ] Nginx 配置正确
- [ ] SSL 证书已配置（可选）
- [ ] 网站可以访问
- [ ] 所有功能正常

---

## 🆘 遇到问题？

查看详细文档：`1PANEL_DEPLOYMENT_GUIDE.md`

或检查：
1. 文件是否上传完整
2. Nginx 配置是否正确
3. 防火墙端口是否开放
4. 域名 DNS 是否解析

---

**构建信息：**
- 构建工具：Vite 5.4.20
- 生产包大小：
  - HTML: 0.49 kB (gzip: 0.37 kB)
  - CSS: 19.01 kB (gzip: 4.23 kB)
  - JS: 320.29 kB (gzip: 102.08 kB)
- 总大小（gzip）：约 106 kB

**性能优化已启用：**
- ✅ 代码压缩
- ✅ Tree Shaking
- ✅ 资源哈希命名
- ✅ Gzip 压缩支持



