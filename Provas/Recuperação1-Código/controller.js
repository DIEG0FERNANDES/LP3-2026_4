import * as service from "./service.js";

export async function listar(req, res) {
  try {
    const mensagens = await service.obterTodas();

    res.statusCode = 200;
    res.end(JSON.stringify(mensagens));
  } catch (erro) {
    res.statusCode = 500;
    res.end(JSON.stringify({ erro: erro.message }));
  }
}

export async function buscar(req, res, id) {
  try {
    const mensagem = await service.obterPorId(id);

    res.statusCode = 200;
    res.end(JSON.stringify(mensagem));
  } catch (erro) {
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: erro.message }));
  }
}

export async function criar(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      const dados = JSON.parse(body);

      const novaMensagem = await service.criarMensagem(dados);

      res.statusCode = 201;
      res.end(JSON.stringify(novaMensagem));
    } catch (erro) {
      res.statusCode = 400;
      res.end(JSON.stringify({ erro: erro.message }));
    }
  });
}
