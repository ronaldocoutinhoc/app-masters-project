import { fetchChatCompletion } from "@/services/groqService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { jobDescription, currentLevel, stack, technologies} = await request.json();

        const currentLevelPrompt = currentLevel ? " O candidato possui o seguinte nível atual:" +  currentLevel : '';
        const stacksPrompt = stack ? " Ele já trabalha com as seguintes stacks: " + stack : '';
        const technologiesPrompt = technologies ? " Ele domina as seguintes tecnologias:" + technologies : '';
        
        const promptTemplate = " Com base na seguinte descrição de vaga, forcena o detalhamento das tecnologias envolvidas na vaga, e um roadmap de estudos para melhorar o conhecimento do canditado." +
            "Obs: Insira na resposta APENAS o detalhamento e o roadmap. Sem textos de conversa.";
        
        const prompt = promptTemplate + currentLevelPrompt + stacksPrompt + technologiesPrompt + ' Descrição da vaga: ' + jobDescription;

       
        const completion = await fetchChatCompletion(prompt);
        return NextResponse.json({ completion });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to analyze job description. Error: ' + error }, { status: 500 });
    }
}