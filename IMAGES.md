# 图片资源使用说明

## 📸 项目图片资源

### 图片文件位置
- **源文件**: `/images/` 目录
- **公共访问**: `/public/` 目录（用于网站显示）

### 图片用途说明

#### 1. NANOFIG.png - 原型图片
- **用途**: 用作网站Logo和原型展示
- **位置**: 
  - 源文件: `images/NANOFIG.png`
  - 公共访问: `public/NANOFIG.png`
- **使用场景**:
  - Header组件中的Logo
  - 教程中的原型展示
  - 用户上传前的示例

#### 2. NANOFIG2.png - 生成结果图片
- **用途**: 展示AI生成后的效果
- **位置**:
  - 源文件: `images/NANOFIG2.png`
  - 公共访问: `public/NANOFIG2.png`
- **使用场景**:
  - 教程中的最终结果展示
  - 产品效果演示
  - 用户期望结果参考

## 🔧 图片配置

### Next.js 配置
```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ['localhost', 'picsum.photos'],
    unoptimized: true,
  },
  output: 'standalone',
}
```

### 图片引用方式
```tsx
// 在组件中使用
<img src="/NANOFIG.png" alt="Logo" />
<img src="/NANOFIG2.png" alt="Generated Result" />
```

## 📱 响应式图片处理

### 桌面端
- Logo: 40x40px (Header)
- 教程图片: 256x256px

### 移动端
- Logo: 32x32px (移动菜单)
- 教程图片: 自适应宽度

## 🎨 图片优化建议

### 当前状态
- ✅ 图片已复制到public目录
- ✅ 支持静态访问
- ✅ 响应式显示

### 未来优化
- 考虑使用 `next/image` 组件
- 添加图片懒加载
- 实现图片压缩和优化

## 📁 目录结构

```
project/
├── images/           # 源图片文件
│   ├── NANOFIG.png  # 原型图片
│   └── NANOFIG2.png # 生成结果图片
├── public/           # 公共访问目录
│   ├── NANOFIG.png  # Logo和原型展示
│   └── NANOFIG2.png # 结果展示
└── components/       # 使用图片的组件
    ├── Header.tsx   # 使用NANOFIG.png作为Logo
    └── Tutorial.tsx # 使用两个图片展示流程
```

## 🚀 部署注意事项

### Vercel部署
- 图片会自动包含在部署包中
- 无需额外配置
- 支持CDN加速

### 本地开发
- 图片通过 `http://localhost:3000/NANOFIG.png` 访问
- 支持热重载

---

**图片配置完成！现在可以在网站中正确显示原型和结果图片了。** 🎉
