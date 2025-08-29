# AI Image Generator - Character Figures

A modern web application that transforms photos into stunning 3D character figures using AI-powered image generation with Google Gemini integration.

## Features

- **AI Image Generation**: Transform any photo into a 3D character figure using Google Gemini nano-banana model
- **Multiple Styles**: Choose from Realistic, Anime, Pixel Art, and Commercial styles
- **Custom Prompts**: Build your own prompts or use AI-optimized templates
- **Blender Integration**: Includes computer screens showing Blender modeling process
- **Professional Output**: High-quality renders with proper lighting and shadows
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **AI Integration**: Google Gemini API (nano-banana model)
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Headless UI, Heroicons
- **File Handling**: React Dropzone
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Gemini API Key

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-image-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
# Create .env.local file
cp .env.example .env.local

# Add your Gemini API key
GEMINI_API_KEY=your_actual_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Gemini API Key (Required)
GEMINI_API_KEY=your_gemini_api_key_here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Getting Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key to your `.env.local` file

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── generate/      # Image generation endpoint
│   │   └── enhance-prompt/ # Prompt enhancement endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── ImageUpload.tsx    # Image upload component
│   ├── StyleSelector.tsx  # Style selection
│   ├── PromptBuilder.tsx  # Prompt customization with Gemini
│   ├── GeneratedImage.tsx # Result display
│   ├── Gallery.tsx        # Image gallery
│   └── Footer.tsx         # Page footer
├── lib/                    # Utility libraries
│   └── gemini.ts          # Gemini API integration
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## Usage

1. **Upload Image**: Drag and drop or click to upload a photo
2. **Select Style**: Choose from 4 different artistic styles
3. **Customize Prompt**: Use templates or create your own prompts
4. **AI Enhancement**: Use Gemini AI to enhance your prompts
5. **Generate**: Click generate to create your 3D character figure
6. **Download & Share**: Save your creation or share with others

## Gemini Integration

This application integrates with Google's Gemini AI model to:

- **Analyze uploaded images** for better prompt generation
- **Enhance user prompts** with AI-powered suggestions
- **Generate optimized prompts** based on image content and style preferences

### Base Prompt Template

The core prompt used for character figure generation:

```
Turn this photo into a character figure. Behind it, place a box with the character's image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. Set the scene indoors if possible.
```

### Style Variations

Each style has its own prompt variation:

- **Realistic**: Hyper-realistic with professional studio lighting
- **Anime**: Vibrant anime style with cel-shading
- **Pixel Art**: Retro pixel art aesthetics
- **Commercial**: Professional product showcase style

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Styles

1. Add the style to the `styles` array in `StyleSelector.tsx`
2. Add the corresponding prompt template in `lib/gemini.ts`
3. Update the component logic as needed

### API Endpoints

- `POST /api/generate` - Generate character figure
- `POST /api/enhance-prompt` - Enhance prompt with Gemini AI

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the GitHub repository.

## Roadmap

- [ ] Real-time image generation progress
- [ ] Batch image processing
- [ ] Advanced prompt templates
- [ ] User authentication and galleries
- [ ] Integration with other AI models
- [ ] Mobile app version
