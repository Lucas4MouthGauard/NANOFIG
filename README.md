# AI Image Generator - Character Figures

A modern web application that transforms photos into stunning 3D character figures using AI-powered image generation.

## Features

- **AI Image Generation**: Transform any photo into a 3D character figure
- **Multiple Styles**: Choose from Realistic, Anime, Pixel Art, and Commercial styles
- **Custom Prompts**: Build your own prompts or use optimized templates
- **Blender Integration**: Includes computer screens showing Blender modeling process
- **Professional Output**: High-quality renders with proper lighting and shadows
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Headless UI, Heroicons
- **File Handling**: React Dropzone
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

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

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── ImageUpload.tsx    # Image upload component
│   ├── StyleSelector.tsx  # Style selection
│   ├── PromptBuilder.tsx  # Prompt customization
│   ├── GeneratedImage.tsx # Result display
│   ├── Gallery.tsx        # Image gallery
│   └── Footer.tsx         # Page footer
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## Usage

1. **Upload Image**: Drag and drop or click to upload a photo
2. **Select Style**: Choose from 4 different artistic styles
3. **Customize Prompt**: Use templates or create your own prompts
4. **Generate**: Click generate to create your 3D character figure
5. **Download & Share**: Save your creation or share with others

## Style Templates

### Realistic Style
```
Turn this photo into a character figure. Behind it, place a box with the character's image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. Set the scene indoors with professional lighting and soft shadows for a clean look.
```

### Anime Style
```
Convert this photo into an anime-style character figure. Place a colorful box behind it with the same character image printed on it. Add a cute round plastic base with vibrant anime lighting in the background.
```

### Pixel Art Style
```
Turn this photo into a pixel-art character figure. Display it standing on a pixelated round base, with a retro CRT monitor showing Blender's pixelated UI in the background.
```

### Commercial Style
```
Create a professional product showcase of this character figure, featuring a sleek round base and a branded box behind it. Show a laptop with Blender software open on the screen in the background, lit in a soft, commercial studio setup.
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Styles

1. Add the style to the `styles` array in `StyleSelector.tsx`
2. Add the corresponding prompt template in `PromptBuilder.tsx`
3. Update the component logic as needed

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
