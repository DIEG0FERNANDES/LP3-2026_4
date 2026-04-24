import * as repo from "./repository.js";

// IMPLEMENTAR:

// obterTodas()
export async function obterTodas() {
  return await repo.buscarTodas();
}
// obterPorId(id)
export async function obterPorId(id) {
  try {
    return await repo.buscarPorId(id);
  } catch (erro) {
    throw erro;
  }
}

export async function criarMensagem(dados) {
  if (!dados.texto || dados.texto.trim() === "") {
    throw new Error("Texto da mensagem é obrigatório");
  }

  const novaMensagem = {
    id: Date.now(),
    texto: dados.texto,
  };

  return await repo.salvar(novaMensagem);
}
