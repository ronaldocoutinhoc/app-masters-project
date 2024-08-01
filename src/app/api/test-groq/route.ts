import { NextResponse } from "next/server";
import { fetchChatCompletion } from "@/services/groqService";

export async function POST(request: Request) {
    try {
        const { message } = await request.json();
        const completion = await fetchChatCompletion(message);
        return NextResponse.json({ completion })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch completion. Error: ' + error }, { status: 500 });
    }
}