import http from "http";

let produtos = [
  { id: 1, nome: "Notebook" },
  { id: 2, nome: "Mouse" }
];

let nextId = 3;

const server = http.createServer((req, res) => {

  // GET /produtos
  if (req.url === "/produtos" && req.method === "GET") {
    res.writeHead(200, {"Content-Type": "application/json"});
    return res.end(JSON.stringify(produtos));
  }

  // GET /produtos/:id
  if (req.url.startsWith("/produtos/") && req.method === "GET") {
    const id = parseInt(req.url.split("/")[2]);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
      res.writeHead(404, {"Content-Type": "application/json"});
      return res.end(JSON.stringify({ erro: "Produto não encontrado" }));
    }

    res.writeHead(200, {"Content-Type": "application/json"});
    return res.end(JSON.stringify(produto));
  }

  // POST /produtos
  if (req.url === "/produtos" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
      const data = JSON.parse(body);

      if (!data.nome) {
        res.writeHead(400, {"Content-Type": "application/json"});
        return res.end(JSON.stringify({ erro: "Nome obrigatório" }));
      }

      const novo = { id: nextId++, nome: data.nome };
      produtos.push(novo);

      res.writeHead(201, {"Content-Type": "application/json"});
      res.end(JSON.stringify(novo));
    });

    return;
  }

  // DELETE /produtos/:id
  if (req.url.startsWith("/produtos/") && req.method === "DELETE") {
    const id = parseInt(req.url.split("/")[2]);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
      res.writeHead(404, {"Content-Type": "application/json"});
      return res.end(JSON.stringify({ erro: "Produto não encontrado" }));
    }

    produtos.splice(index, 1);

    res.writeHead(200, {"Content-Type": "application/json"});
    return res.end(JSON.stringify({ mensagem: "Removido com sucesso" }));
  }

  res.writeHead(404, {"Content-Type": "application/json"});
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));

});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
