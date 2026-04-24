let mensagens = [
  { id: 1, texto: "Olá" },
  { id: 2, texto: "Teste" },
];

export function buscarTodas() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mensagens), 500);
  });
}

// IMPLEMENTAR:

// buscarPorId(id)
export function buscarPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mensagem = mensagens.find((m) => m.id === id);
      if (mensagem) {
        resolve(mensagem);
      } else {
        reject(new Error("Mensagem não encontrada"));
      }
    }, 500);
  });
}

export function salvar(novaMensagem) {
  return new Promise((resolve) => {
    setTimeout(() => {
      mensagens.push(novaMensagem);
      resolve(novaMensagem);
    }, 500);
  });
}
