#!/bin/bash

echo "🚀 开始生产环境部署..."

# 检查Git状态
echo "📝 检查Git状态..."
if git status --porcelain | grep -q .; then
    echo "⚠️  有未提交的更改，正在提交..."
    git add .
    git commit -m "准备生产环境部署"
fi

# 推送到GitHub
echo "📤 推送到GitHub..."
git push origin main

# 检查构建
echo "🔨 检查构建..."
if npm run build > /dev/null 2>&1; then
    echo "✅ 构建成功"
else
    echo "❌ 构建失败"
    exit 1
fi

echo ""
echo "🎉 生产环境部署准备完成！"
echo ""
echo "下一步操作："
echo "1. 等待Vercel自动检测到GitHub推送"
echo "2. 或者手动在Vercel中触发部署"
echo "3. 检查部署状态：https://vercel.com/dashboard"
echo ""
echo "如果Vercel仍然没有检测到，请："
echo "1. 访问 https://vercel.com/dashboard"
echo "2. 找到NANOFIG项目"
echo "3. 点击 'Redeploy' 按钮"
echo "4. 或者点击 'Deploy' 按钮重新部署"
