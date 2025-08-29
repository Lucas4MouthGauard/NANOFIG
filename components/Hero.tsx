'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div id="home" className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/20">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Just shipped v1.0</span>
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Photos into{' '}
              <span className="text-gradient">Stunning 3D Figures</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Upload any photo and watch as our AI transforms it into a beautiful 3D character figure. 
              Choose from multiple styles, customize your prompts, and create professional-quality renders 
              with Blender integration.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#upload"
                className="btn-primary text-lg px-8 py-3"
              >
                Start Creating
              </a>
              <a href="#about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"
          >
            <div className="relative w-[76rem] flex-none rounded-md bg-white/5 p-2 ring-1 ring-inset ring-white/10 lg:rounded-lg xl:rounded-2xl">
              <div className="rounded-md bg-gray-50 p-8 lg:rounded-lg xl:rounded-2xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div className="h-32 w-32 rounded-lg bg-gradient-to-br from-primary-400 to-purple-500"></div>
                    <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-green-400 to-blue-500"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                    <div className="h-32 w-32 rounded-lg bg-gradient-to-br from-pink-400 to-red-500"></div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500">AI-Generated Character Figures</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
