// src/routes/produtoRouter.js
import { Router } from "express";
import * as produtoController from "../controllers/controller.js";

const router = Router();

router.get("/produtos", produtoController.listarProdutos);
router.get("/produtos/:id", produtoController.buscarProduto);
router.post("/produtos", produtoController.criarProduto);
router.put("/produtos/:id", produtoController.atualizarProduto);
router.delete("/produtos/:id", produtoController.deletarProduto);

export default router;
