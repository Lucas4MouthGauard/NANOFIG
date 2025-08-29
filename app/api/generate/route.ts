import { NextRequest, NextResponse } from 'next/server';
import { generateCharacterFigure, GenerationRequest } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const body: GenerationRequest = await request.json();
    
    // Validate request
    if (!body.image || !body.style) {
      return NextResponse.json(
        { error: 'Missing required fields: image and style' },
        { status: 400 }
      );
    }

    // Validate style
    const validStyles = ['realistic', 'anime', 'pixel', 'commercial'];
    if (!validStyles.includes(body.style)) {
      return NextResponse.json(
        { error: 'Invalid style. Must be one of: realistic, anime, pixel, commercial' },
        { status: 400 }
      );
    }

    // Call Gemini API
    const result = await generateCharacterFigure(body);

    if (result.success) {
      return NextResponse.json({
        success: true,
        imageUrl: result.imageUrl,
        prompt: result.prompt,
        message: result.error || 'Image generated successfully'
      });
    } else {
      return NextResponse.json(
        { error: result.error || 'Generation failed' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
