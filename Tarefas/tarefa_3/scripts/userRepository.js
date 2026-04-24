let mensagens = [
  { id: 1, texto: "Primeira mensagem" },
  { id: 2, texto: "Segunda mensagem" },
];

// Simula acesso ao banco de dados
export function buscarUsuarioPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nome: "Diego" });
      } else {
        reject("Usuário não encontrado");
      }
    }, 2000);
  });
}
export function buscarMensagemPorId(id) {
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

export function listarMensagens() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mensagens), 500);
  });
}

export function criarMensagem(mensagem) {
  return new Promise((resolve) => {
    setTimeout(() => {
      mensagens.push(mensagem);
      resolve(mensagem);
    }, 500);
  });
}
