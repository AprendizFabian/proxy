export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const url = "http://redash.rappi.com/api/queries/124578/results.json?api_key=58mX08wwF5z0sywN6rdyCbvWnkOBmvdzkm2BaQz2";

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error Redash:", error);
    res.status(500).json({ error: "Error al conectar con Redash (Top Mejores)" });
  }
}
