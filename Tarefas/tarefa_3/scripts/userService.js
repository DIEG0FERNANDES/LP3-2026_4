import {
  buscarUsuarioPorId,
  listarMensagens,
  buscarMensagemPorId,
  criarMensagem,
} from "./userRepository.js";

export async function obterUsuario(id) {
  try {
    const usuario = await buscarUsuarioPorId(id);
    return usuario;
  } catch (err) {
    throw new Error(err);
  }
}
export async function obterMensagens() {
  return await listarMensagens();
}

export async function obterMensagemPorId(id) {
  try {
    return await buscarMensagemPorId(id);
  } catch (err) {
    throw err;
  }
}

export async function adicionarMensagem(mensagem) {
  return await criarMensagem(mensagem);
}
