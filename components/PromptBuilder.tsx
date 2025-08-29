'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, PaperAirplaneIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

interface PromptBuilderProps {
  uploadedImage: string
  selectedStyle: string
  onGenerate: (prompt: string, imageUrl: string) => void
  isGenerating: boolean
}

const stylePrompts = {
  realistic: "Turn this photo into a character figure. Behind it, place a box with the character's image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. Set the scene indoors with professional lighting and soft shadows for a clean look.",
  anime: "Convert this photo into an anime-style character figure. Place a colorful box behind it with the same character image printed on it. Add a cute round plastic base with vibrant anime lighting in the background.",
  pixel: "Turn this photo into a pixel-art character figure. Display it standing on a pixelated round base, with a retro CRT monitor showing Blender's pixelated UI in the background.",
  commercial: "Create a professional product showcase of this character figure, featuring a sleek round base and a branded box behind it. Show a laptop with Blender software open on the screen in the background, lit in a soft, commercial studio setup."
}

export default function PromptBuilder({ 
  uploadedImage, 
  selectedStyle, 
  onGenerate, 
  isGenerating 
}: PromptBuilderProps) {
  const [customPrompt, setCustomPrompt] = useState('')
  const [useCustomPrompt, setUseCustomPrompt] = useState(false)
  const [isEnhancing, setIsEnhancing] = useState(false)

  const handleGenerate = async () => {
    const prompt = useCustomPrompt ? customPrompt : stylePrompts[selectedStyle as keyof typeof stylePrompts]
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: uploadedImage,
          style: selectedStyle,
          customPrompt: useCustomPrompt ? customPrompt : undefined
        })
      })

      const result = await response.json()

      if (result.success) {
        onGenerate(prompt, result.imageUrl)
        toast.success('Image generated successfully!')
      } else {
        toast.error(result.error || 'Generation failed')
      }
    } catch (error) {
      console.error('Generation error:', error)
      toast.error('Failed to generate image. Please try again.')
    }
  }

  const enhancePromptWithGemini = async () => {
    if (!uploadedImage) return
    
    setIsEnhancing(true)
    try {
      const response = await fetch('/api/enhance-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: uploadedImage,
          basePrompt: customPrompt || stylePrompts[selectedStyle as keyof typeof stylePrompts]
        })
      })

      const result = await response.json()

      if (result.success) {
        setCustomPrompt(result.enhancedPrompt)
        setUseCustomPrompt(true)
        toast.success('Prompt enhanced with Gemini AI!')
      } else {
        toast.error('Failed to enhance prompt')
      }
    } catch (error) {
      console.error('Enhancement error:', error)
      toast.error('Failed to enhance prompt')
    } finally {
      setIsEnhancing(false)
    }
  }

  const resetPrompt = () => {
    setCustomPrompt('')
    setUseCustomPrompt(false)
  }

  return (
    <div className="card">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <SparklesIcon className="h-5 w-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">Prompt Builder with Gemini AI</h3>
        </div>
        <p className="text-sm text-gray-600">
          Customize your generation prompt or use our AI-optimized templates
        </p>
      </div>

      <div className="space-y-4">
        {/* Style-based prompt preview */}
        {!useCustomPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-primary-50 border border-primary-200 rounded-lg"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-600 text-sm font-medium">
                  {selectedStyle.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-primary-900 mb-2">
                  {selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1)} Style Prompt
                </h4>
                <p className="text-sm text-primary-800 leading-relaxed">
                  {stylePrompts[selectedStyle as keyof typeof stylePrompts]}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Custom prompt toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setUseCustomPrompt(!useCustomPrompt)}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              useCustomPrompt
                ? 'bg-primary-100 text-primary-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {useCustomPrompt ? 'Using Custom Prompt' : 'Use Custom Prompt'}
          </button>
          {useCustomPrompt && (
            <button
              onClick={resetPrompt}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Reset to Template
            </button>
          )}
        </div>

        {/* Custom prompt input */}
        {useCustomPrompt && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <label htmlFor="custom-prompt" className="block text-sm font-medium text-gray-700">
                Your Custom Prompt
              </label>
              <button
                onClick={enhancePromptWithGemini}
                disabled={isEnhancing}
                className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 font-medium"
              >
                <LightBulbIcon className="h-3 w-3" />
                {isEnhancing ? 'Enhancing...' : 'Enhance with Gemini'}
              </button>
            </div>
            <textarea
              id="custom-prompt"
              rows={4}
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Describe how you want your character figure to look..."
              className="input-field resize-none"
            />
            <p className="text-xs text-gray-500">
              Be specific about the style, lighting, background, and any special details you want.
            </p>
          </motion.div>
        )}

        {/* Quick prompt suggestions */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Quick Adjustments</h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Add dramatic lighting',
              'Include more details',
              'Make it more colorful',
              'Add shadows and depth'
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setCustomPrompt(prev => prev + ' ' + suggestion)}
                className="px-3 py-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                disabled={!useCustomPrompt}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating || (useCustomPrompt && !customPrompt.trim())}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isGenerating || (useCustomPrompt && !customPrompt.trim())
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'btn-primary hover:scale-[1.02]'
          }`}
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Generating with Gemini...
            </>
          ) : (
            <>
              <PaperAirplaneIcon className="h-4 w-4" />
              Generate with Gemini AI
            </>
          )}
        </button>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Powered by Google Gemini nano-banana model
          </p>
        </div>
      </div>
    </div>
  )
}
