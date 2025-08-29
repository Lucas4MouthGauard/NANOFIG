import { NextRequest, NextResponse } from 'next/server';
import { enhancePromptWithGemini } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.image || !body.basePrompt) {
      return NextResponse.json(
        { error: 'Missing required fields: image and basePrompt' },
        { status: 400 }
      );
    }

    const enhancedPrompt = await enhancePromptWithGemini(body.basePrompt, body.image);

    return NextResponse.json({
      success: true,
      enhancedPrompt
    });

  } catch (error) {
    console.error('Enhancement error:', error);
    return NextResponse.json(
      { error: 'Failed to enhance prompt' },
      { status: 500 }
    );
  }
}
