// src/controllers/produtoController.js
import { Produto } from "../models/produto.js";

// GET /produtos
export async function listarProdutos(req, res) {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch {
    res.status(500).json({ erro: "Erro ao listar produtos" });
  }
}

// GET /produtos/:id
export async function buscarProduto(req, res) {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto)
      return res.status(404).json({ erro: "Produto não encontrado" });
    res.json(produto);
  } catch {
    res.status(500).json({ erro: "Erro ao buscar produto" });
  }
}

// POST /produtos
export async function criarProduto(req, res) {
  try {
    const { nome, preco, estoque } = req.body;
    if (!nome || !preco || !estoque)
      return res.status(400).json({ erro: "Todos os campos são obrigatórios" });

    const novo = new Produto({ nome, preco, estoque });
    await novo.save();
    res.status(201).json(novo);
  } catch {
    res.status(500).json({ erro: "Erro ao criar produto" });
  }
}

// PUT /produtos/:id
export async function atualizarProduto(req, res) {
  try {
    const { nome, preco, estoque } = req.body;
    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      { nome, preco, estoque },
      { new: true },
    );
    if (!produto)
      return res.status(404).json({ erro: "Produto não encontrado" });
    res.json(produto);
  } catch {
    res.status(500).json({ erro: "Erro ao atualizar produto" });
  }
}

// DELETE /produtos/:id
export async function deletarProduto(req, res) {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto)
      return res.status(404).json({ erro: "Produto não encontrado" });
    res.json({ mensagem: "Produto removido" });
  } catch {
    res.status(500).json({ erro: "Erro ao remover produto" });
  }
}
