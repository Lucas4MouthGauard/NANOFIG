'use client'

import { motion } from 'framer-motion'

interface StyleSelectorProps {
  selectedStyle: string
  onStyleChange: (style: string) => void
}

const styles = [
  {
    id: 'realistic',
    name: 'Realistic',
    description: 'Hyper-realistic photo with professional lighting',
    icon: '🎯',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'anime',
    name: 'Anime',
    description: 'Colorful anime-style with vibrant lighting',
    icon: '🌸',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 'pixel',
    name: 'Pixel Art',
    description: 'Retro pixel-art style with CRT monitor',
    icon: '👾',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    description: 'Professional product showcase style',
    icon: '💼',
    color: 'from-orange-500 to-red-500'
  }
]

export default function StyleSelector({ selectedStyle, onStyleChange }: StyleSelectorProps) {
  return (
    <div className="card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Style</h3>
        <p className="text-sm text-gray-600">
          Select the artistic style for your character figure
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {styles.map((style) => (
          <motion.button
            key={style.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStyleChange(style.id)}
            className={`relative p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedStyle === style.id
                ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{style.icon}</div>
              <div className={`text-sm font-medium ${
                selectedStyle === style.id ? 'text-primary-700' : 'text-gray-900'
              }`}>
                {style.name}
              </div>
              <div className={`text-xs ${
                selectedStyle === style.id ? 'text-primary-600' : 'text-gray-500'
              }`}>
                {style.description}
              </div>
            </div>
            
            {selectedStyle === style.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          <strong>Tip:</strong> Each style includes a character figure on a round base, 
          a box with the character's image, and a computer showing Blender modeling process.
        </p>
      </div>
    </div>
  )
}
