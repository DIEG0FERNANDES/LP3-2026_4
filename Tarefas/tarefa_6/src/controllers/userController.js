export function buscarUsuarioController(id, res) {
  const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
  ];

  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    res.status(404).send("Usuário não encontrado");
    return;
  }

  res.json(usuario);
}

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.post("/usuarios", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Nome obrigatório" });
  }

  const novo = { id: nextId++, nome };
  usuarios.push(novo);

  res.status(201).json(novo);
});

app.put("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome } = req.body;

  const user = usuarios.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ erro: "Não encontrado" });
  }

  user.nome = nome;
  res.json(user);
});

app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Não encontrado" });
  }

  usuarios.splice(index, 1);

  res.json({ mensagem: "Removido" });
});
