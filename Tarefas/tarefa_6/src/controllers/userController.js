let usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Carlos" },
];
let nextId = 3;

export function listarUsuarios(req, res) {
  res.json(usuarios);
}

export function buscarUsuario(req, res) {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  res.json(usuario);
}

export function criarUsuario(req, res) {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Nome obrigatório" });
  }

  const novo = { id: nextId++, nome };
  usuarios.push(novo);

  res.status(201).json(novo);
}

export function atualizarUsuario(req, res) {
  const id = parseInt(req.params.id);
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Nome obrigatório" });
  }

  const user = usuarios.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  user.nome = nome;
  res.json(user);
}

export function deletarUsuario(req, res) {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  usuarios.splice(index, 1);
  res.json({ mensagem: "Usuário removido" });
}
