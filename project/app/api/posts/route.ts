import { NextResponse } from 'next/server';

// Eksempel API route - hent alle posts
export async function GET() {
  try {
    // TODO: Hent posts fra database
    const posts = [
      {
        id: '1',
        title: 'Eksempel post',
        content: 'Dette er et eksempel innlegg',
        authorId: '1',
        published: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch posts' 
    }, { status: 500 });
  }
}

// Opprett ny post
export async function POST(request: Request) {
  try {
    const { title, content, authorId } = await request.json();
    
    // TODO: Implementer post opprettelse
    // 1. Valider input
    // 2. Sjekk autorisation
    // 3. Opprett post i database
    
    return NextResponse.json({ 
      success: true, 
      message: 'Post created successfully' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create post' 
    }, { status: 400 });
  }
}