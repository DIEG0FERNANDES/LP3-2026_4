import { Router, Router } from "express";
import * as userController from "../controllers/userController.js";

const router = Router();

app.get("/usuarios", (req, res) => {
  const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
  ];

  res.json(usuarios);
});

// app.get("/usuarios/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   res.send("Usuário " + id);
// });

app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);

  buscarUsuarioController(id, res);
});

export default router;
