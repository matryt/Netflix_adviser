import { NextRequest, NextResponse } from 'next/server';
import {withApiAuthRequired} from "@auth0/nextjs-auth0";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function recommend(req: NextRequest) {
    /*const mistralAgentID = process.env.MISTRAL_AGENT_ID;

    const { prompt, country } = await req.json();

    const fullPrompt = `country: ${country}\n${prompt}`;

    const body = {
            messages: [
                {
                    "role": "user",
                    "content": fullPrompt
                }
            ],
            agent_id: mistralAgentID
        }

    const response = await fetch(`https://api.mistral.ai/v1/agents/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
        },
        body: JSON.stringify(body)
    });


    if (!response.ok) {
        throw new Error('Erreur lors de l\'appel à Mistral');
    }

    const recommendations = await response.json();
    const message = recommendations.choices[0].message.content;*/

    const message = " Voici quelques suggestions de séries suédoises policières disponibles sur Netflix en France :\n\n1. " +
            "Bron : Cette série suit l'enquête d'une policière de Stockholm qui est envoyée dans une petite ville pour " +
            "enquêter sur un meurtre. Elle doit faire face à des tensions entre les habitants et les policiers locaux.\n2. " +
            "Morden: Cette série policière suit une équipe d'enquêteurs qui travaillent sur des affaires de meurtres non " +
            "résolus dans la ville de Malmö. Les personnages sont complexes et les enquêtes sont bien construites.\n3. " +
            "Midnight Sun : Cette série se déroule dans une petite ville suédoise où un meurtre est commis pendant la" +
            " période de l'année où le soleil ne se couche jamais. Les enquêteurs doivent travailler dans des " +
            "conditions difficiles pour résoudre l'affaire. \n4. The Bridge (Bron/Broen) : Cette série est une " +
            "coproduction suédo-danoise qui suit l'enquête sur un meurtre commis sur le pont de l'Oresund, qui relie la " +
            "Suède et le Danemark. Les enquêteurs suédois et danois doivent travailler ensemble pour résoudre l'affaire.\n" +
            "J'espère que ces suggestions vous seront utiles !\n"
    return NextResponse.json({ message });
}

export default withApiAuthRequired(recommend);