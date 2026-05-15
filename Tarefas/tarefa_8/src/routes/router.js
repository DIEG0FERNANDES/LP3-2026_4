import { Router } from "express";
import * as userController from "../controller/controller.js";

const router = Router();

// teste para ver se está funcionando nos conformes
router.get("/", (req, res) => {
  res.send("API REST de Usuários com express e sqlite3");
});

// rotas get
router.get("/usuarios", userController.listarUsuarios);
router.get("/usuarios/:id", userController.buscarUsuario);
// rotas post
router.post("/usuarios", userController.criarUsuario);
// rotas put
router.put("/usuarios/:id", userController.atualizarUsuario);
// rotas delete
router.delete("/usuarios/:id", userController.deletarUsuario);

export default router;
