// import { NextResponse } from "next/server";

// export async function POST(req: Request) {

//   try {

//     const body = await req.json();

//     const prompt = `
// You are an expert AI hair specialist.

// Analyze the user's hair condition using the provided data.

// Return ONLY valid JSON.

// No markdown.
// No explanation.
// No code block.

// Required JSON format:

// {
//   "name": "${body.name}",
//   "hairFallImage": "${body.hairFallImage}",
//   "stage": "",
//   "risk": "",
//   "timeline": "",
//   "regrowthChance": 0,
//   "summary": "",
//   "rootCauses": [],
//   "recommendations": []
// }

// USER DATA:
// ${JSON.stringify(body, null, 2)}
// `;

//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",

//           Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//         },

//         body: JSON.stringify({

//           model: "llama-3.3-70b-versatile",

//           messages: [
//             {
//               role: "system",
//               content:
//                 "You are a professional AI hair analysis expert. Always return clean JSON only.",
//             },

//             {
//               role: "user",
//               content: prompt,
//             },
//           ],

//           temperature: 0.5,

//           max_tokens: 1200,
//         }),
//       }
//     );

//     const data = await response.json();
    

//     console.log("FULL GROQ RESPONSE:");
//     console.log(JSON.stringify(data, null, 2));

//     const content =
//       data.choices?.[0]?.message?.content;

//     if (!content) {

//       return NextResponse.json(
//         {
//           error: "No AI response received",
//         },
//         {
//           status: 500,
//         }
//       );
//     }

//     // CLEAN RESPONSE
//     const cleaned = content
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     let parsed;

//     try {

//       parsed = JSON.parse(cleaned);

//     } catch (err) {

//       console.log("INVALID JSON:");
//       console.log(cleaned);

//       return NextResponse.json(
//         {
//           error: "Invalid AI JSON response",
//           raw: cleaned,
//         },
//         {
//           status: 500,
//         }
//       );
//     }

//     return NextResponse.json(parsed);

//   } catch (error) {

//     console.log("AI ERROR:", error);

//     return NextResponse.json(
//       {
//         error: "AI analysis failed",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    // =========================================
    // DETECT HAIR STAGE FROM SELECTED IMAGE
    // =========================================

    let selectedStage = "Stage 1";

    if (body.hairFallImage?.includes("2.jpg")) {
      selectedStage = "Stage 2";
    }

    if (body.hairFallImage?.includes("3.jpg")) {
      selectedStage = "Stage 3";
    }

    if (body.hairFallImage?.includes("4.jpg")) {
      selectedStage = "Stage 4";
    }

    if (body.hairFallImage?.includes("5.jpg")) {
      selectedStage = "Stage 5";
    }

    if (body.hairFallImage?.includes("6.jpg")) {
      selectedStage = "Stage 6";
    }

    if (
      body.hairFallImage?.includes(
        "coin-size-patch"
      )
    ) {
      selectedStage = "Coin Size Patch";
    }

    if (
      body.hairFallImage?.includes(
        "heavy-hair-fall"
      )
    ) {
      selectedStage = "Heavy Hair Fall";
    }

    // =========================================
    // CALCULATE SEVERITY SCORE
    // =========================================

    let severityScore = 0;

    // STAGE SCORE
    if (selectedStage === "Stage 1") severityScore += 1;
    if (selectedStage === "Stage 2") severityScore += 2;
    if (selectedStage === "Stage 3") severityScore += 3;
    if (selectedStage === "Stage 4") severityScore += 4;
    if (selectedStage === "Stage 5") severityScore += 5;
    if (selectedStage === "Stage 6") severityScore += 6;

    // DANDRUFF
    if (body.dandruff === "Mild") {
      severityScore += 1;
    }

    if (body.dandruff === "Heavy") {
      severityScore += 2;
    }

    if (body.dandruff === "Psoriasis") {
      severityScore += 3;
    }

    // STRESS
    if (
      body.stress ===
      "Moderate (work, family etc)"
    ) {
      severityScore += 1;
    }

    if (
      body.stress ===
      "High (Loss of close one, separation, home, illness)"
    ) {
      severityScore += 3;
    }

    // SLEEP
    if (
      body.sleep ===
      "Disturbed sleep (wake up multiple times at night)"
    ) {
      severityScore += 2;
    }

    if (
      body.sleep ===
      "Difficulty falling asleep"
    ) {
      severityScore += 1;
    }

    // FAMILY HISTORY
    if (
      body.familyHistory ===
      "Father or anyone from father's side"
    ) {
      severityScore += 2;
    }

    // =========================================
    // TIMELINE LOGIC
    // =========================================

    let timeline = "2-4 months";

    if (severityScore <= 3) {
      timeline = "2-4 months";
    } else if (severityScore <= 6) {
      timeline = "4-6 months";
    } else if (severityScore <= 10) {
      timeline = "6-8 months";
    } else {
      timeline = "9-12 months";
    }

    // =========================================
    // REGROWTH CHANCE
    // =========================================

    let regrowthChance = 90;

    if (severityScore <= 3) {
      regrowthChance = 90;
    } else if (severityScore <= 6) {
      regrowthChance = 75;
    } else if (severityScore <= 10) {
      regrowthChance = 60;
    } else {
      regrowthChance = 40;
    }

    // =========================================
    // RISK LEVEL
    // =========================================

    let risk = "Low";

    if (severityScore <= 3) {
      risk = "Low";
    } else if (severityScore <= 6) {
      risk = "Moderate";
    } else {
      risk = "High";
    }

    // =========================================
    // AI PROMPT
    // =========================================

    const prompt = `
You are an expert AI hair specialist.

IMPORTANT RULES:

1. hairFallImage determines ONLY hair-loss stage.

2. Internal health issues determine:
- risk
- recovery timeline
- regrowth chance

3. Do NOT increase hair stage because of stress or psoriasis.

4. Use the provided values exactly:
- Stage: ${selectedStage}
- Timeline: ${timeline}
- Risk: ${risk}
- Regrowth Chance: ${regrowthChance}

Return ONLY valid JSON.

{
  "name": "${body.name}",
  "hairFallImage": "${body.hairFallImage}",
  "stage": "${selectedStage}",
  "risk": "${risk}",
  "timeline": "${timeline}",
  "regrowthChance": ${regrowthChance},
  "summary": "",
  "rootCauses": [],
  "recommendations": []
}

USER DATA:
${JSON.stringify(body, null, 2)}
`;

    console.log("PROMPT:");
    console.log(prompt);

    // =========================================
    // GROQ API
    // =========================================

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

          temperature: 0.3,

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

    // =========================================
    // CLEAN RESPONSE
    // =========================================

    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {

      parsed = JSON.parse(cleaned);
      // =========================================
// ROOT CAUSES
// =========================================

const rootCauses = [];

// FAMILY HISTORY
if (body.familyHistory !== "None") {
  rootCauses.push(
    "Genetic hair loss"
  );
}

// STRESS
if (
  body.stress !== "Low" &&
  body.stress !== "None"
) {
  rootCauses.push(
    "Stress and mental fatigue"
  );
}

// DANDRUFF
if (body.dandruff !== "No") {
  rootCauses.push(
    "Scalp condition and dandruff"
  );
}

// SLEEP
if (
  body.sleep !==
  "Very peacefully for 6-8 hours"
) {
  rootCauses.push(
    "Poor sleep quality"
  );
}

// CONSTIPATION
if (
  body.constipation !==
  "No / Once in a while"
) {
  rootCauses.push(
    "Digestive imbalance"
  );
}

// GAS
if (body.gas !== "No") {
  rootCauses.push(
    "Gut health issues"
  );
}

// FALLBACK
if (rootCauses.length === 0) {

  rootCauses.push(
    "Lifestyle factors"
  );

  rootCauses.push(
    "Hair follicle sensitivity"
  );

  rootCauses.push(
    "Nutritional imbalance"
  );
}

// =========================================
// RECOMMENDATIONS
// =========================================

const recommendations = [];

// STRESS
if (
  body.stress !== "Low" &&
  body.stress !== "None"
) {
  recommendations.push(
    "Practice stress management through meditation and exercise"
  );
}

// DANDRUFF
if (body.dandruff !== "No") {
  recommendations.push(
    "Use anti-dandruff scalp care and maintain scalp hygiene"
  );
}

// SLEEP
if (
  body.sleep !==
  "Very peacefully for 6-8 hours"
) {
  recommendations.push(
    "Maintain a proper sleep schedule"
  );
}

// DIGESTION
if (
  body.constipation !==
    "No / Once in a while" ||
  body.gas !== "No"
) {
  recommendations.push(
    "Improve digestion with fiber-rich foods and hydration"
  );
}

// GENERAL
recommendations.push(
  "Maintain a healthy protein-rich diet"
);

recommendations.push(
  "Avoid excessive heat and harsh hair products"
);

// =========================================
// FINAL DATA
// =========================================

parsed.rootCauses = rootCauses;

parsed.recommendations = recommendations;

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