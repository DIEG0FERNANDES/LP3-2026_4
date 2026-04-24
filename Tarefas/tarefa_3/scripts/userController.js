import { obterUsuario, obterPorId } from "./userService.js";

export async function getUsuario(req, res) {
  const id = parseInt(req.params.id);
  try {
    const usuario = await obterUsuario(id);
    res.json(usuario);
  } catch (err) {
    res.status(404).json({ erro: err.message });
  }
}

export async function getMensagemPorId(req, res) {
  const id = parseInt(req.params.id);
  try {
    const mensagem = await obterPorId(id);
    res.json(mensagem);
  } catch (err) {
    res.status(404).json({ erro: err.message });
  }
}
