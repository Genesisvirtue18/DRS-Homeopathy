import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const prompt = `
You are an expert AI hair specialist.

Analyze the user's hair condition using the provided data.

Return ONLY valid JSON.

No markdown.
No explanation.
No code block.

Required JSON format:

{
  "name": "${body.name}",
  "stage": "",
  "score": 0,
  "risk": "",
  "timeline": "",
  "regrowthChance": 0,
  "summary": "",
  "rootCauses": [],
  "recommendations": []
}

USER DATA:
${JSON.stringify(body, null, 2)}
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },

        body: JSON.stringify({

          model: "llama-3.3-70b-versatile",

          messages: [
            {
              role: "system",
              content:
                "You are a professional AI hair analysis expert. Always return clean JSON only.",
            },

            {
              role: "user",
              content: prompt,
            },
          ],

          temperature: 0.5,

          max_tokens: 1200,
        }),
      }
    );

    const data = await response.json();

    console.log("FULL GROQ RESPONSE:");
    console.log(JSON.stringify(data, null, 2));

    const content =
      data.choices?.[0]?.message?.content;

    if (!content) {

      return NextResponse.json(
        {
          error: "No AI response received",
        },
        {
          status: 500,
        }
      );
    }

    // CLEAN RESPONSE
    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {

      parsed = JSON.parse(cleaned);

    } catch (err) {

      console.log("INVALID JSON:");
      console.log(cleaned);

      return NextResponse.json(
        {
          error: "Invalid AI JSON response",
          raw: cleaned,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(parsed);

  } catch (error) {

    console.log("AI ERROR:", error);

    return NextResponse.json(
      {
        error: "AI analysis failed",
      },
      {
        status: 500,
      }
    );
  }
}