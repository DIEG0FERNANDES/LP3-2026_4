// src/models/produto.js
import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  estoque: { type: Number, required: true },
});

export const Produto = mongoose.model("Produto", produtoSchema, "produtos");
