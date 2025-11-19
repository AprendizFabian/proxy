export default async function handler(req, res) {
  // --- CORS COMPLETO ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // --- URL DE REDASH ---
  const url =
    "http://redash.rappi.com/api/queries/124731/results.json?api_key=dQhB16NHyUK5L22Uv5OUtsLXmzisGhFFiqocwQLw";

  try {
    // Fetch seguro desde servidor Vercel (no afecta CORS del browser)
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Error al consumir Redash." });
    }

    const data = await response.json();

    // Enviar a frontend sin modificaciones
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error Redash:", error);
    return res
      .status(500)
      .json({ error: "Error al conectar con Redash (indicadores)" });
  }
}
