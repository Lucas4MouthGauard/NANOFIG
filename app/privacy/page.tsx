'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function Privacy() {
  const handleTutorialOpen = () => {
    console.log('Tutorial requested from Privacy page')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header onTutorialOpen={handleTutorialOpen} />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold text-gray-800">1.1 User-Provided Content</h3>
                <p>When you use our AI image generation service, you may upload photos and images for processing. These images are processed by our AI systems to generate character figures.</p>
                
                <h3 className="text-lg font-semibold text-gray-800">1.2 Usage Data</h3>
                <p>We collect information about how you interact with our service, including:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Images you upload for processing</li>
                  <li>Generation preferences and style selections</li>
                  <li>API usage patterns and frequency</li>
                  <li>Technical information about your device and browser</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the collected information to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide and improve our AI image generation service</li>
                  <li>Process your image uploads and generate character figures</li>
                  <li>Enhance our AI models and algorithms</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Ensure the security and integrity of our service</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. AI Processing and Data Handling</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold text-gray-800">3.1 Image Processing</h3>
                <p>Your uploaded images are processed by our AI systems to generate character figures. This processing involves:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Image analysis using Google Gemini AI technology</li>
                  <li>Temporary storage during processing</li>
                  <li>Generation of new AI-created content</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-800">3.2 Data Retention</h3>
                <p>Uploaded images are temporarily stored during processing and are automatically deleted after generation is complete. We do not permanently store your original images.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure API endpoints with authentication</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and monitoring</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our service integrates with:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Google Gemini AI:</strong> For image analysis and prompt enhancement</li>
                  <li><strong>Cloud Storage:</strong> For temporary image processing</li>
                </ul>
                <p>These services have their own privacy policies and data handling practices.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of certain data collection</li>
                  <li>Contact us with privacy concerns</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@aigenerator.com</p>
                  <p><strong>Address:</strong> AI Generator Privacy Team</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">
                This privacy policy is effective as of the date listed above and may be updated periodically. 
                We will notify users of any material changes to this policy.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
