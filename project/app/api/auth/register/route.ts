import { NextResponse } from "next/server";

// Eksempel API route - bruker registrering
export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    // TODO: Implementer bruker registrering logikk
    // 1. Valider input
    // 2. Hash passord
    // 3. Sjekk om bruker eksisterer
    // 4. Opprett bruker i database

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Registration failed",
      },
      { status: 400 },
    );
  }
}
