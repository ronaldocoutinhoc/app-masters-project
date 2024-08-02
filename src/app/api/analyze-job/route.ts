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
    const currentLevelPrompt = currentLevel ? " The candidate has the following current level: " + currentLevel + ". Important: Consider this and include in the roadmap something like [Considering your current level] " : '';
    const stacksPrompt = stack ? " They already work with the following stacks: " + stack + ". Important: Highlight similarities with the stacks they need to learn, and include in the roadmap something like [Considering your stacks (stack1, stack2...)]" : '';
    const technologiesPrompt = technologies ? " They are proficient in the following technologies: " + technologies + ". Important: Show in the response that considering they are proficient in a certain language, it will be easier to learn x because of y, and include in the roadmap something like [Considering the languages you are proficient in (x, y...)]" : '';

    const promptTemplate = " Based on the following job description, provide a detailed breakdown of the technologies involved in the role, and a study roadmap to enhance the candidate's knowledge." +
        "Note: Include ONLY the breakdown and the roadmap in the response. No conversational text. Provide the roadmap translated into English.";

    const prompt = promptTemplate + currentLevelPrompt + stacksPrompt + technologiesPrompt + ' Job description: ';
    return prompt;
}

function getPortuguesePromp(currentLevel: string, stack: string, technologies: string) {
    const currentLevelPrompt = currentLevel ? " O candidato possui o seguinte nível atual:" + currentLevel + ". Importante: Considere isso e informe no roadmap algo como [Considerando o seu nível atual] " : '';
    const stacksPrompt = stack ? " Ele já trabalha com as seguintes stacks: " + stack + ". Importante: Traga similaridades com as stacks que tem que aprender, e informe no roadmap algo como [Considerando suas stacks (stack1,stack2...)]" : '';
    const technologiesPrompt = technologies ? " Ele domina as seguintes tecnologias:" + technologies + ". Importante: Mostre na resposta que considerando que ele domina tal linguagem vai ser mais facil aprender x por causa de y e informe no roadmap algo como [Considerando as linguagens que voce domina (x,y...)]" : '';

    const promptTemplate = " Com base na seguinte descrição de vaga, forcena o detalhamento das tecnologias envolvidas na vaga, e um roadmap de estudos para melhorar o conhecimento do canditado." +
        "Obs: Insira na resposta APENAS o detalhamento e o roadmap. Sem textos de conversa. De o roadmap traduzido em portugues";

    const prompt = promptTemplate + currentLevelPrompt + stacksPrompt + technologiesPrompt + ' Descrição da vaga: ';
    return prompt;
}