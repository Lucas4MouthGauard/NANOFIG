'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImageUpload from '@/components/ImageUpload'
import PromptBuilder from '@/components/PromptBuilder'
import StyleSelector from '@/components/StyleSelector'
import GeneratedImage from '@/components/GeneratedImage'
import Footer from '@/components/Footer'

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<string>('realistic')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationPrompt, setGenerationPrompt] = useState<string>('')

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl)
    setGeneratedImage(null)
    setGenerationPrompt('')
  }

  const handleGenerate = async (prompt: string, imageUrl: string) => {
    setIsGenerating(true)
    setGenerationPrompt(prompt)
    
    // Simulate processing time
    setTimeout(() => {
      setGeneratedImage(imageUrl)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ImageUpload onImageUpload={handleImageUpload} />
              {uploadedImage && (
                <>
                  <StyleSelector 
                    selectedStyle={selectedStyle} 
                    onStyleChange={setSelectedStyle} 
                  />
                  <PromptBuilder 
                    uploadedImage={uploadedImage}
                    selectedStyle={selectedStyle}
                    onGenerate={handleGenerate}
                    isGenerating={isGenerating}
                  />
                </>
              )}
            </div>
            <div className="space-y-6">
              {generatedImage && uploadedImage && (
                <GeneratedImage 
                  imageUrl={generatedImage}
                  originalImage={uploadedImage}
                  prompt={generationPrompt}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
