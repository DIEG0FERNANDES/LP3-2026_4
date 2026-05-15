import { openDB } from "../config/DB.js";

export async function listarUsuarios(req, res) {
  try {
    const db = await openDB();
    const usuarios = await db.all("SELECT * FROM usuarios");
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: "Error ao listar usuários" });
  }
}

export async function buscarUsuario(req, res) {
  const db = await openDb();
  const usuario = await db.get("SELECT * FROM usuarios WHERE id = ?", [
    req.params.id,
  ]);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }
  res.json(usuario);
}

export async function criarUsuario(req, res) {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ erro: "Nome obrigatório" });

  const db = await openDb();
  const result = await db.run("INSERT INTO usuarios (nome) VALUES (?)", [nome]);

  res.status(201).json({ id: result.lastID, nome });
}

export async function atualizarUsuario(req, res) {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ erro: "Nome obrigatório" });

  const db = await openDb();
  const result = await db.run("UPDATE usuarios SET nome = ? WHERE id = ?", [
    nome,
    req.params.id,
  ]);

  if (result.changes === 0) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }
  res.json({ id: req.params.id, nome });
}

export async function deletarUsuario(req, res) {
  const db = await openDb();
  const result = await db.run("DELETE FROM usuarios WHERE id = ?", [
    req.params.id,
  ]);

  if (result.changes === 0) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }
  res.json({ mensagem: "Usuário removido" });
}
