'use client'

import { motion } from 'framer-motion'
import { HeartIcon, ArrowDownTrayIcon, ShareIcon } from '@heroicons/react/24/outline'

const sampleImages = [
  {
    id: 1,
    title: 'Anime Character Figure',
    style: 'Anime',
    image: '/api/placeholder-1',
    likes: 128,
    downloads: 45
  },
  {
    id: 2,
    title: 'Realistic Portrait Figure',
    style: 'Realistic',
    image: '/api/placeholder-2',
    likes: 89,
    downloads: 32
  },
  {
    id: 3,
    title: 'Pixel Art Warrior',
    style: 'Pixel Art',
    image: '/api/placeholder-3',
    likes: 156,
    downloads: 67
  },
  {
    id: 4,
    title: 'Commercial Showcase',
    style: 'Commercial',
    image: '/api/placeholder-4',
    likes: 203,
    downloads: 89
  },
  {
    id: 5,
    title: 'Fantasy Character',
    style: 'Anime',
    image: '/api/placeholder-5',
    likes: 167,
    downloads: 54
  },
  {
    id: 6,
    title: 'Professional Model',
    style: 'Realistic',
    image: '/api/placeholder-6',
    likes: 134,
    downloads: 78
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery of Creations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore amazing character figures created by our community using AI image generation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleImages.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-square overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm">AI Generated Image</span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-3">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <HeartIcon className="h-5 w-5 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <ArrowDownTrayIcon className="h-5 w-5 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <ShareIcon className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Style badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                  {item.style}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <HeartIcon className="h-4 w-4" />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    {item.downloads}
                  </span>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {item.style}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="btn-primary px-8 py-3">
          View More Creations
        </button>
      </div>
    </section>
  )
}
