#!/bin/bash

echo "🔍 检查Vercel部署状态..."

# 检查必要的文件
echo "📁 检查项目文件..."
if [ -f "package.json" ]; then
    echo "✅ package.json 存在"
else
    echo "❌ package.json 缺失"
    exit 1
fi

if [ -f "next.config.js" ]; then
    echo "✅ next.config.js 存在"
else
    echo "❌ next.config.js 缺失"
    exit 1
fi

if [ -f "vercel.json" ]; then
    echo "✅ vercel.json 存在"
else
    echo "❌ vercel.json 缺失"
    exit 1
fi

# 检查构建
echo "🔨 测试构建..."
if npm run build > /dev/null 2>&1; then
    echo "✅ 构建成功"
else
    echo "❌ 构建失败"
    exit 1
fi

# 检查Git状态
echo "📝 检查Git状态..."
if git status --porcelain | grep -q .; then
    echo "⚠️  有未提交的更改"
    git status --short
else
    echo "✅ Git工作区干净"
fi

echo "🚀 项目已准备好部署到Vercel！"
echo ""
echo "下一步操作："
echo "1. 访问 https://vercel.com/dashboard"
echo "2. 导入GitHub仓库: Lucas4MouthGauard/NANOFIG"
echo "3. 选择Next.js框架"
echo "4. 设置环境变量 GEMINI_API_KEY"
echo "5. 部署项目"
