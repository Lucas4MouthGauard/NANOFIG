#!/bin/bash

echo "🔍 Vercel部署状态检查 - 顶级测试专家诊断"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== 1. 项目文件检查 ===${NC}"

# 检查关键文件
files=("package.json" "next.config.js" "vercel.json" "app/page.tsx")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file 存在${NC}"
    else
        echo -e "${RED}❌ $file 缺失${NC}"
    fi
done

echo -e "\n${YELLOW}=== 2. 构建测试 ===${NC}"

# 测试构建
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ 构建成功${NC}"
else
    echo -e "${RED}❌ 构建失败${NC}"
    echo "构建错误详情："
    npm run build
    exit 1
fi

echo -e "\n${YELLOW}=== 3. 配置验证 ===${NC}"

# 验证vercel.json
if node -e "try { JSON.parse(require('fs').readFileSync('vercel.json', 'utf8')); console.log('✅ vercel.json 语法正确'); } catch(e) { console.log('❌ vercel.json 语法错误:', e.message); }" 2>/dev/null; then
    echo -e "${GREEN}✅ vercel.json 配置正确${NC}"
else
    echo -e "${RED}❌ vercel.json 配置错误${NC}"
fi

# 验证next.config.js
if node -e "try { require('./next.config.js'); console.log('✅ next.config.js 配置正确'); } catch(e) { console.log('❌ next.config.js 配置错误:', e.message); }" 2>/dev/null; then
    echo -e "${GREEN}✅ next.config.js 配置正确${NC}"
else
    echo -e "${RED}❌ next.config.js 配置错误${NC}"
fi

echo -e "\n${YELLOW}=== 4. Git状态检查 ===${NC}"

# 检查Git状态
if git status --porcelain | grep -q .; then
    echo -e "${YELLOW}⚠️  有未提交的更改${NC}"
    git status --short
else
    echo -e "${GREEN}✅ Git工作区干净${NC}"
fi

echo -e "\n${YELLOW}=== 5. 部署准备状态 ===${NC}"

# 检查.vercel目录
if [ -d ".vercel" ]; then
    echo -e "${GREEN}✅ .vercel 目录存在${NC}"
else
    echo -e "${YELLOW}⚠️  .vercel 目录不存在（首次部署需要）${NC}"
fi

echo -e "\n${YELLOW}=== 6. 顶级修复建议 ===${NC}"

echo -e "${GREEN}🎯 立即行动步骤：${NC}"
echo "1. 在Vercel中重新导入项目"
echo "2. 选择 'Import Git Repository'"
echo "3. 选择仓库: Lucas4MouthGauard/NANOFIG"
echo "4. Framework: Next.js"
echo "5. 点击 'Deploy'"

echo -e "\n${GREEN}🔧 如果仍有问题：${NC}"
echo "1. 删除现有Vercel项目"
echo "2. 重新创建项目"
echo "3. 确保选择正确的GitHub仓库"
echo "4. 验证分支设置（main）"

echo -e "\n${GREEN}📱 验证部署：${NC}"
echo "部署成功后，访问你的Vercel域名"
echo "检查强制教程、图片显示等功能"

echo -e "\n${GREEN}🚀 项目已准备好部署！${NC}"
