import http from "http";
import { listar, buscar, criar } from "./controller.js";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/mensagens") {
    listar(req, res);
  } else if (req.method === "GET" && req.url.startsWith("/mensagens/")) {
    const partes = req.url.split("/");
    const id = parseInt(partes[2]);
    buscar(req, res, id);
  } else if (req.method === "POST" && req.url === "/mensagens") {
    criar(req, res);
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Rota não encontrada" }));
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
