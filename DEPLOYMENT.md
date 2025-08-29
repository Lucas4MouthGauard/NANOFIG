# Vercel 部署指南

## 🚀 自动部署到 Vercel

### 方法1：通过 GitHub 自动部署（推荐）

1. **访问 [Vercel](https://vercel.com)**
   - 使用 GitHub 账户登录
   - 点击 "New Project"

2. **导入 GitHub 仓库**
   - 选择 `Lucas4MouthGauard/NANOFIG` 仓库
   - Vercel 会自动检测到这是一个 Next.js 项目

3. **配置环境变量**
   - 在部署设置中添加环境变量：
   ```
   GEMINI_API_KEY=your_actual_gemini_api_key
   ```

4. **部署设置**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. **点击 Deploy**
   - Vercel 会自动构建和部署项目

### 方法2：手动部署

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```

## 🔧 部署配置说明

### vercel.json
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next",
  "regions": ["hkg1"],
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "env": {
    "GEMINI_API_KEY": "@gemini_api_key"
  }
}
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'picsum.photos'],
    unoptimized: true,
  },
  output: 'standalone',
}

module.exports = nextConfig
```

## 🌍 环境变量配置

### 必需的环境变量
- `GEMINI_API_KEY`: Google Gemini AI API 密钥

### 获取 Gemini API 密钥
1. 访问 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 登录 Google 账户
3. 创建新的 API 密钥
4. 复制密钥到 Vercel 环境变量

## 📱 部署后功能

- ✅ 强制教程系统
- ✅ AI 图像生成
- ✅ Gemini AI 集成
- ✅ 响应式设计
- ✅ 多种艺术风格
- ✅ 完整的用户界面

## 🔍 故障排除

### 如果 Vercel 没有检测到项目
1. 确保 `package.json` 中有正确的 Next.js 依赖
2. 检查 `next.config.js` 配置
3. 确保有 `vercel.json` 配置文件
4. 重新推送代码到 GitHub

### 构建失败
1. 检查环境变量是否正确设置
2. 查看 Vercel 构建日志
3. 确保所有依赖都已安装

## 📞 支持

如果遇到部署问题，请：
1. 检查 Vercel 构建日志
2. 确认环境变量配置
3. 验证 GitHub 仓库设置
4. 联系 Vercel 支持团队

---

**项目已配置为 Vercel 部署就绪！** 🎉
