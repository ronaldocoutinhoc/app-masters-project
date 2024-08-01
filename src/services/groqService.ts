import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY as string });

interface GroqMessage {
    role: string;
    content: string;
}

interface GroqChoice {
    message: {
        content: string | null;  // Permite null conforme o erro encontrado
    };
}

interface GroqChatCompletion {
    choices: GroqChoice[];
}

export async function getGroqChatCompletion(message: string): Promise<GroqChatCompletion> {
    try {
        const response = await groq.chat.completions.create({
            messages: [{
                role: 'user',
                content: message
            }],
            model: 'llama-3.1-70b-versatile'
        });
        return response as GroqChatCompletion;
    } catch (error) {
        console.error("Error fetching chat completion: ", error);
        throw error;
    }
}

export async function fetchChatCompletion(message:string): Promise<string> {
    const chatCompletion = await getGroqChatCompletion(message);
    return chatCompletion.choices[0]?.message?.content || '';
}