export default function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    // fazer algo com os dados do formulário aqui
    res.status(200).json({ message: "Formulário enviado com sucesso!" });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
