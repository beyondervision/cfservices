export default async function handler(req, res) {
  // Alleen POST toestaan
  if (req.method !== "POST") {
    return res.status(405).json({
      agent: "Z.A.L",
      answer: "Method not allowed"
    });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({
      agent: "Z.A.L",
      answer: "Geen vraag ontvangen."
    });
  }

  // 🔐 API-sleutel uit environment
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return res.status(500).json({
      agent: "Z.A.L",
      answer: "Z.A.L → API-sleutel niet geconfigureerd."
    });
  }

  // 🧠 Z.A.L Triade-router
  let agent = "Luxen";
  const q = question.toLowerCase();

  if (q.includes("audit") || q.includes("veilig") || q.includes("controle")) {
    agent = "Z3RO";
  } else if (
    q.includes("structuur") ||
    q.includes("plan") ||
    q.includes("architectuur")
  ) {
    agent = "Aetron";
  }

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
            content: `Je bent ${agent}, onderdeel van Z.A.L (Zelf-Aansturende Logica) binnen CFServices.
Antwoord helder, rustig en begeleidend.`
          },
          {
            role: "user",
            content: question
          }
        ],
        temperature: 0.4
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]?.message?.content) {
      throw new Error("Ongeldige AI-respons");
    }

    return res.status(200).json({
      agent,
      answer: data.choices[0].message.content.trim()
    });

  } catch (err) {
    console.error("Z.A.L ERROR:", err);
    return res.status(500).json({
      agent: "Z.A.L",
      answer: "Z.A.L → verwerking tijdelijk niet beschikbaar."
    });
  }
}
