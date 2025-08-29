'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const tutorialSteps = [
  {
    id: 1,
    title: "Welcome to NANOFIG",
    description: "Learn how to transform your photos into stunning 3D character figures with AI-powered generation.",
    image: "/NANOFIG.png",
    alt: "Original photo example",
    content: "Upload any photo and watch as our AI transforms it into a beautiful 3D character figure."
  },
  {
    id: 2,
    title: "Choose Your Style & Generate",
    description: "Select from 4 artistic styles and customize your prompts with Gemini AI enhancement.",
    image: "/NANOFIG.png",
    alt: "Style and generation",
    content: "Realistic, Anime, Pixel Art, or Commercial styles - each with unique characteristics and AI-optimized prompts."
  },
  {
    id: 3,
    title: "Your AI Figure is Ready!",
    description: "Download, share, and create more stunning 3D character figures.",
    image: "/NANOFIG2.png",
    alt: "Generated result",
    content: "Your AI-generated character figure is ready! Professional quality with Blender integration and multiple export options."
  }
]

interface TutorialProps {
  isOpen: boolean
  onClose: () => void
}

export default function Tutorial({ isOpen, onClose }: TutorialProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false)

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeTutorial()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeTutorial = () => {
    setHasSeenTutorial(true)
    localStorage.setItem('tutorial-completed', 'true')
    onClose()
  }

  const skipTutorial = () => {
    if (confirm('Are you sure you want to skip the tutorial? You can always access it later from the menu.')) {
      completeTutorial()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Getting Started Tutorial</h2>
              <button
                onClick={skipTutorial}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium">
                {currentStep + 1} of {tutorialSteps.length}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="mb-6">
                  <img
                    src={tutorialSteps[currentStep].image}
                    alt={tutorialSteps[currentStep].alt}
                    className="w-64 h-64 object-cover rounded-lg mx-auto shadow-lg border-4 border-gray-100"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tutorialSteps[currentStep].title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-4">
                  {tutorialSteps[currentStep].description}
                </p>
                
                <p className="text-gray-700 mb-8">
                  {tutorialSteps[currentStep].content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ArrowRightIcon className="h-4 w-4 rotate-180" />
                Previous
              </button>

              <div className="flex gap-2">
                {tutorialSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentStep
                        ? 'bg-primary-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                {currentStep === tutorialSteps.length - 1 ? (
                  <>
                    <CheckIcon className="h-4 w-4" />
                    Get Started
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRightIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
