import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { password } = await request.json();

		const isValid = password === process.env.APP_PASSWORD;

		// Generate a simple token if valid
		// In production, use a proper JWT or session management
		const token = isValid
			? Date.now().toString(36) + Math.random().toString(36).substr(2)
			: null;

		if (isValid) {
			return NextResponse.json({ token });
		}

		return NextResponse.json({ error: "Invalid password" }, { status: 401 });
	} catch (error) {
		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	}
}
