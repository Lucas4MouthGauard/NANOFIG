#!/bin/bash

# Vercel build script
echo "🚀 Starting Vercel build..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check build result
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    exit 0
else
    echo "❌ Build failed!"
    exit 1
fi
