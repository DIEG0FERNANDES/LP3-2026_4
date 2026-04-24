class Produto {
  constructor(nome, preco = 0) {
    this.nome = nome;
    this.preco = preco;
  }
}

// Criando os objetos
const produto1 = new Produto("Notebook", 3500);
const produto2 = new Produto("Caneta");

// Exibindo os resultados
console.log(`Produto 1: ${produto1.nome}, Preço: ${produto1.preco}`);
console.log(`Produto 2: ${produto2.nome}, Preço: ${produto2.preco}`);
