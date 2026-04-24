import express from "express";
import { getUsuario, getMensagemPorId } from "./userController.js";

const app = express();
const port = 3000;

app.get("/usuario/:id", getUsuario);
app.get("/mensagens", getMensagens);
app.get("/mensagens/:id", getMensagemPorId);
app.post("/mensagens", postMensagem);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
