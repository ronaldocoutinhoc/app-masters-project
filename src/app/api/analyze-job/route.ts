import { fetchChatCompletion } from "@/services/groqService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { jobDescription, currentLevel, stack, technologies, language } = await request.json();

        const getPrompt = language === "en" ? getEnglishPrompt : getPortuguesePromp;
        
        const prompt = getPrompt(currentLevel, stack, technologies) + jobDescription;

        const completion = await fetchChatCompletion(prompt);
        return NextResponse.json({ completion });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to analyze job description. Error: ' + error }, { status: 500 });
    }
}

function getEnglishPrompt(currentLevel: string, stack: string, technologies: string) {
    const currentLevelPrompt = currentLevel ? "The candidate has the following current level: " + currentLevel : '';
    const stacksPrompt = stack ? " They are already working with the following stacks: " + stack : '';
    const technologiesPrompt = technologies ? " They are proficient in the following technologies: " + technologies : '';

    const promptTemplate = "Based on the following job description, provide details on the technologies involved in the position and a study roadmap to improve the candidate's knowledge." +
        " Note: Include ONLY the details and the roadmap. No conversational text. Give the roadmap translated in english";

    const prompt = promptTemplate + currentLevelPrompt + stacksPrompt + technologiesPrompt + ' Job Description: ';
    return promptTemplate;
}

function getPortuguesePromp(currentLevel: string, stack: string, technologies: string) {
    const currentLevelPrompt = currentLevel ? " O candidato possui o seguinte nível atual:" + currentLevel : '';
    const stacksPrompt = stack ? " Ele já trabalha com as seguintes stacks: " + stack : '';
    const technologiesPrompt = technologies ? " Ele domina as seguintes tecnologias:" + technologies : '';

    const promptTemplate = " Com base na seguinte descrição de vaga, forcena o detalhamento das tecnologias envolvidas na vaga, e um roadmap de estudos para melhorar o conhecimento do canditado." +
        "Obs: Insira na resposta APENAS o detalhamento e o roadmap. Sem textos de conversa. De o roadmap traduzido em portugues";

    const prompt = promptTemplate + currentLevelPrompt + stacksPrompt + technologiesPrompt + ' Descrição da vaga: ';
    return promptTemplate;
}