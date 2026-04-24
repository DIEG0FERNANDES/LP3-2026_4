class Conta {
  constructor(nome, saldo = 0) {
    this.nome = nome;
    this.saldo = saldo;
  }

  deposito(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  saque(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      alert("Saldo insuficiente!");
    }
  }

  mostrarSaldo() {
    return `Conta de ${this.nome} - Saldo: R$ ${this.saldo}`;
  }
}

// Criando um objeto da classe Conta
const minhaConta = new Conta("Diego", 1000);
