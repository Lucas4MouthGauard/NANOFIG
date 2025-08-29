'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowDownTrayIcon, 
  ShareIcon, 
  HeartIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

interface GeneratedImageProps {
  imageUrl: string
  originalImage: string
}

export default function GeneratedImage({ imageUrl, originalImage }: GeneratedImageProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showComparison, setShowComparison] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = 'ai-generated-figure.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI Generated Character Figure',
          text: 'Check out this amazing AI-generated character figure!',
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="card">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Generated Result</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <EyeIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-lg transition-colors ${
                isLiked 
                  ? 'text-red-500 hover:text-red-600 hover:bg-red-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isLiked ? <HeartIconSolid className="h-4 w-4" /> : <HeartIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Your AI-generated character figure is ready!
        </p>
      </div>

      <div className="space-y-4">
        {showComparison ? (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-2 text-center">Original</p>
              <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                <img
                  src={originalImage}
                  alt="Original"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2 text-center">Generated</p>
              <div className="relative rounded-lg overflow-hidden border-2 border-primary-200">
                <img
                  src={imageUrl}
                  alt="Generated"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-lg overflow-hidden border-2 border-primary-200"
          >
            <img
              src={imageUrl}
              alt="AI Generated Character Figure"
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Download
          </button>
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 py-2 px-4 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 transition-colors"
          >
            <ShareIcon className="h-4 w-4" />
            Share
          </button>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Image Details</h4>
          <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
            <div><span className="font-medium">Resolution:</span> 1024x1024</div>
            <div><span className="font-medium">Format:</span> PNG</div>
            <div><span className="font-medium">Style:</span> AI Generated</div>
            <div><span className="font-medium">Quality:</span> High</div>
          </div>
        </div>
      </div>
    </div>
  )
}
