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

  // --- URL DE REDASH (MES PASADO) ---
  // 🔥 SOLO CAMBIA ESTA LÍNEA POR TU URL REAL:
  const url =
    "hhttp://redash.rappi.com/api/queries/124994/results.json?api_key=LaBaR45RVeva9CptMIEtJJpPyM4LwDiEWIpcyR4m";

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Error al consumir Redash (mes pasado)." });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error Redash MES PASADO:", error);
    return res
      .status(500)
      .json({ error: "Error al conectar con Redash (mes pasado)" });
  }
}
