import { Router } from "express";
import * as userController from "../controllers/userController.js";

const router = Router();

router.get("/usuarios", userController.listarUsuarios);
router.get("/usuarios/:id", userController.buscarUsuario);
router.post("/usuarios", userController.criarUsuario);
router.put("/usuarios/:id", userController.atualizarUsuario);
router.delete("/usuarios/:id", userController.deletarUsuario);

export default router;
