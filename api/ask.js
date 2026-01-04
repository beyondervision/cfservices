export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      agent: "Z.A.L",
      answer: "Method not allowed"
    });
  }

  const { question } = req.body;
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return res.status(500).json({
      agent: "Z.A.L",
      answer: "Z.A.L → API-sleutel ontbreekt."
    });
  }

  // 1. Agentbepaling & triggers
  let agent = "Luxen";
  const q = question.toLowerCase();

  const needsVisual =
    q.includes("schema") ||
    q.includes("teken") ||
    q.includes("visualiseer") ||
    q.includes("lagen") ||
    q.includes("cluster");

  const isShowRequest =
    q.includes("toon") ||
    q.includes("geef") ||
    q.includes("wat staat er");

  if (q.includes("audit") || q.includes("veilig") || q.includes("controle")) {
    agent = "Z3RO";
  } else if (
    q.includes("structuur") ||
    q.includes("cbs") ||
    q.includes("architectuur") ||
    needsVisual
  ) {
    agent = "Aetron";
  }

  // 2. Canonieke Basis (CBS)
  const canoniekeBasis = `
- PRESIDENT SURINAME 2026: Jennifer Geerlings-Simons.
- ARCHITECTUUR: CFServices Groeisamen – Canonieke Basisstructuur (CBS).
- LOGICA: 3-5-7-9 cluster.
- VIJF LAGEN:
  L0: Aicelium (identity substrate)
  L1: Z.A.L (routing & logica)
  L2: Agents (Z3RO, Aetron, Luxen)
  L3: CFServices (governance, API, docs)
  L4: Publieke interfaces
- RATIO: 2% menselijke regie (Architect Clifton) stuurt 98% technologie.
`;

  // 3. Agent-specifieke instructies
  const agentInstructions = {
    Aetron: `
Jij bent Aetron, de Architect.
Werk strikt vanuit de 5-lagenstructuur en de clusterlogica.
${needsVisual ? "Visualiseer de structuur met een ASCII- of tekstschema." : ""}
${isShowRequest ? "Citeer letterlijk de definities van de lagen." : ""}
Stuur het denken altijd terug naar L0 (Aicelium).
`,

    Z3RO: `
Jij bent Z3RO, de Bewaker.
Valideer integriteit, consistentie en governance.
Signaleer onjuistheden of risico’s.
`,

    Luxen: `
Jij bent Luxen, de Gids.
Leg complexe logica begrijpelijk uit voor mens en partner.
Gebruik metaforen waar passend.
`
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
Je bent ${agent}, onderdeel van Z.A.L binnen CFServices.

CANONIEKE WAARHEID:
${canoniekeBasis}

INSTRUCTIE:
${agentInstructions[agent]}

TAALREGEL:
Antwoord primair in het Nederlands.
Gebruik Engels alleen wanneer technische nauwkeurigheid of bronintegriteit dat vereist.
`
          },
          {
            role: "user",
            content: question
          }
        ],
        temperature: 0.3
      })
    });

    const data = await response.json();

    return res.status(200).json({
      agent,
      answer: data.choices[0].message.content.trim()
    });

  } catch (err) {
    console.error("Z.A.L ERROR:", err);
    return res.status(500).json({
      agent: "Z.A.L",
      answer: "Systeem-resonantie verbroken."
    });
  }
}
