# 1Panel 部署指南

## 📋 前置准备

### 1. 服务器要求
- 已安装 1Panel 面板
- 已安装 Nginx（通过 1Panel 应用商店安装）
- 有域名并已完成 DNS 解析指向服务器 IP

### 2. 本地构建
```bash
npm run build
```
✅ 已完成构建，生成的文件在 `dist/` 目录

## 🚀 部署步骤

### 方式一：通过 1Panel 网站管理（推荐）

#### Step 1: 创建网站
1. 登录 1Panel 管理面板
2. 进入 **网站** 菜单
3. 点击 **创建网站**
4. 填写以下信息：
   - **网站类型**：静态网站
   - **域名**：您的域名（例如：www.example.com）
   - **网站名称**：kayung-website
   - **网站描述**：像素治愈所个人网站
   - **选择运行环境**：静态网站（无需 PHP/Node.js）

#### Step 2: 上传文件
1. 创建成功后，点击网站名称进入详情
2. 找到 **网站目录**，通常是：`/opt/1panel/apps/openresty/openresty/www/sites/[网站名称]/index`
3. 通过以下方式上传文件：

   **方式 A - 使用 1Panel 文件管理**
   - 进入 **文件** 菜单
   - 导航到网站目录
   - 上传本地 `dist/` 目录下的所有文件
   - 确保文件结构：
     ```
     /网站目录/
     ├── index.html
     └── assets/
         ├── index-xxxxx.css
         └── index-xxxxx.js
     ```

   **方式 B - 使用 SFTP/SCP**
   ```bash
   # 从本地上传
   scp -r dist/* root@your-server-ip:/opt/1panel/apps/openresty/openresty/www/sites/kayung-website/index/
   ```

#### Step 3: 配置 Nginx
1Panel 会自动生成 Nginx 配置，但需要确保支持 SPA 路由：

1. 在网站详情中，点击 **配置文件**
2. 添加/确认以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /opt/1panel/apps/openresty/openresty/www/sites/kayung-website/index;
    index index.html;
    
    # 支持 React Router（如果需要）
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip 压缩
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
    gzip_comp_level 6;
}
```

3. 点击 **保存** 并 **重载 Nginx**

#### Step 4: 配置 SSL（推荐）
1. 在网站详情中，找到 **SSL** 选项
2. 选择 **Let's Encrypt 自动申请**
3. 填写邮箱地址
4. 点击 **申请证书**
5. 等待几分钟，证书自动配置完成
6. 开启 **强制 HTTPS**

### 方式二：通过 Docker（可选）

如果您更喜欢使用 Docker 部署：

#### Step 1: 创建 Nginx 配置
在项目根目录创建 `nginx.conf`：

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    gzip on;
    gzip_types text/css application/javascript;
}
```

#### Step 2: 创建 Dockerfile
在项目根目录创建 `Dockerfile`：

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Step 3: 在 1Panel 中部署
1. 进入 **容器** 菜单
2. 点击 **创建容器**
3. 选择 **从 Dockerfile 创建**
4. 上传项目文件
5. 配置端口映射：80 -> 你的端口
6. 启动容器

## ✅ 验证部署

### 1. 检查网站访问
- 访问 `http://your-domain.com`
- 检查所有页面是否正常加载
- 测试导航功能
- 查看控制台是否有错误

### 2. 性能检查
```bash
# 测试 Gzip 是否生效
curl -H "Accept-Encoding: gzip" -I http://your-domain.com/assets/index-xxxxx.js

# 应该看到：
# Content-Encoding: gzip
```

### 3. SSL 证书检查（如果配置了）
- 访问 `https://your-domain.com`
- 检查浏览器地址栏是否显示安全锁
- 证书有效期应为 3 个月（Let's Encrypt 会自动续期）

## 🔄 更新部署

当您更新了网站代码后：

1. **本地构建新版本**
   ```bash
   npm run build
   ```

2. **备份旧版本（推荐）**
   - 在 1Panel 文件管理中，将网站目录打包备份

3. **上传新文件**
   - 删除旧的 `assets` 目录
   - 上传新的 `dist` 目录内容

4. **清除缓存**
   - 浏览器清除缓存或使用隐私模式访问
   - 或者访问时加上时间戳：`?v=202501`

## 🛡️ 安全建议

1. **定期更新依赖**
   ```bash
   npm audit
   npm update
   ```

2. **配置防火墙**
   - 在 1Panel 中配置防火墙
   - 只开放必要的端口（80, 443）

3. **设置访问日志**
   - 在 Nginx 配置中启用访问日志
   - 定期检查异常访问

4. **定期备份**
   - 使用 1Panel 的备份功能
   - 定期备份网站文件和数据库（如果有）

## 📊 性能优化

1. **CDN 加速（可选）**
   - 使用阿里云/腾讯云 CDN
   - 配置 CDN 回源到您的服务器

2. **图片优化**
   - 如果后续添加图片，使用 WebP 格式
   - 使用图片懒加载

3. **监控配置**
   - 在 1Panel 中查看网站监控
   - 设置告警规则

## 🐛 常见问题

### 问题 1: 页面显示 403 Forbidden
**解决方案：**
- 检查文件权限：`chmod -R 755 /网站目录`
- 检查 Nginx 用户是否有权限访问

### 问题 2: 刷新页面出现 404
**解决方案：**
- 确保 Nginx 配置了 `try_files $uri $uri/ /index.html;`

### 问题 3: SSL 证书申请失败
**解决方案：**
- 确保域名已正确解析
- 检查防火墙是否开放 80 端口
- 等待几分钟后重试

### 问题 4: 网站更新后没有变化
**解决方案：**
- 清除浏览器缓存
- 检查是否上传了正确的文件
- 重启 Nginx

## 📝 部署检查清单

- [ ] 服务器已安装 1Panel
- [ ] 已安装 Nginx
- [ ] 域名已完成 DNS 解析
- [ ] 本地构建成功（dist 目录存在）
- [ ] 文件已上传到服务器
- [ ] Nginx 配置正确
- [ ] SSL 证书已配置（推荐）
- [ ] 网站可以正常访问
- [ ] 所有页面功能正常
- [ ] ICP 备案信息正确显示

## 📞 技术支持

- 1Panel 官方文档：https://1panel.cn/docs/
- Nginx 配置文档：https://nginx.org/en/docs/

---

**部署完成后记得：**
1. 测试所有功能
2. 分享给朋友测试
3. 提交 ICP 备案（如果是中国大陆服务器）
4. 设置定期备份

祝部署顺利！🚀

