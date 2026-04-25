import express from "express";
import app from "./app.js";

const app = express();

app.use(express.json());

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
