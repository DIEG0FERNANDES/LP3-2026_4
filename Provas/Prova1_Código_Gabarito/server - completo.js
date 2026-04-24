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
      // 1. Verifica se o corpo da requisição veio totalmente vazio
      if (!body) {
        res.writeHead(400, {"Content-Type": "application/json"});
        return res.end(JSON.stringify({ erro: "O corpo da requisição não pode estar vazio" }));
      }

      try {
        const data = JSON.parse(body);

        // 2. Verifica se o campo obrigatório existe (previne JSONs como {})
        if (!data.nome || data.nome.trim() === "") {
          res.writeHead(400, {"Content-Type": "application/json"});
          return res.end(JSON.stringify({ erro: "O campo 'nome' é obrigatório e não pode ser vazio" }));
        }

        // 3. Verifica Duplicidade (Regra de Negócio)
        // Usamos toLowerCase() para que "Notebook" e "notebook" sejam considerados iguais
        const produtoDuplicado = produtos.find(
          p => p.nome.toLowerCase() === data.nome.toLowerCase()
        );

        if (produtoDuplicado) {
          // Status 409 Conflict é o ideal para dados que já existem
          res.writeHead(409, {"Content-Type": "application/json"});
          return res.end(JSON.stringify({ erro: "Já existe um produto cadastrado com este nome" }));
        }

        // 4. Se passou por todas as validações, cadastra o produto
        const novo = { id: nextId++, nome: data.nome };
        produtos.push(novo);

        res.writeHead(201, {"Content-Type": "application/json"});
        res.end(JSON.stringify(novo));
        
      } catch (error) {
        // Cai aqui se o Postman enviar algo que não seja um JSON válido (ex: texto puro)
        res.writeHead(400, {"Content-Type": "application/json"});
        return res.end(JSON.stringify({ erro: "Formato JSON malformado ou inválido" }));
      }
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
    return res.end(JSON.stringify({ mensagem: "Produto removido com sucesso" }));
  }

  // Rota padrão (404) para qualquer caminho ou método não mapeado
  res.writeHead(404, {"Content-Type": "application/json"});
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));

});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});