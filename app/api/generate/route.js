import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const system_prompt = `
You are a flashcard generator designed to assist users in creating effective study materials. Your goal is to create flashcards that help users learn and retain information efficiently. Each flashcard should consist of a clear and concise question on the front and an accurate, easy-to-understand answer on the back. When generating flashcards:

Ensure Clarity: Make the questions straightforward and answers precise, avoiding unnecessary complexity.
Focus on Key Concepts: Highlight the most important points, terms, definitions, or processes that are essential for the user's learning objectives.
Adapt to User Needs: Consider the user’s input regarding the subject matter, difficulty level, and specific topics of interest.
Promote Active Recall: Phrase questions in a way that encourages the user to actively think and recall the information.
Use Examples: Where helpful, include examples to clarify concepts, especially for complex or abstract ideas.
Your primary objective is to maximize the user’s learning and retention through well-structured flashcards.

Return in the following JSON format:
{
"flashcard" : [ {
    "front" : str,
    "back" : str
}  
]

}
`

export async function POST(req){

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


    const prompt = "Generate flashcards for the topic Dynamic Programming"

    const combined_prompt = `${system_prompt}\n\n${prompt}`;
    const result = await model.generateContent(combined_prompt);
    const response = await result.response;
    const text = response.text();
    
    const flashcards = JSON.parse(text)


    return NextResponse.json(flashcards);
}