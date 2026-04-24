// Classe Base
class Veiculo {
  #marca;
  #modelo;

  constructor() {
    this.#marca = "";
    this.#modelo = "";
  }

  setMarca(marca) {
    this.#marca = marca;
  }
  getMarca() {
    return this.#marca;
  }

  setModelo(modelo) {
    this.#modelo = modelo;
  }
  getModelo() {
    return this.#modelo;
  }

  mover() {
    return "O veículo está se movendo.";
  }

  exibirInfo() {
    return `Marca: ${this.#marca}, Modelo: ${this.#modelo}`;
  }
}

// Subclasse Carro
class Carro extends Veiculo {
  #portas;

  constructor() {
    super();
    this.#portas = 0;
  }

  setPortas(portas) {
    this.#portas = portas;
  }
  getPortas() {
    return this.#portas;
  }

  mover() {
    return "O carro está dirigindo na estrada.";
  }

  exibirInfo() {
    return `${super.exibirInfo()}, Portas: ${this.#portas}`;
  }
}

// Subclasse Moto
class Moto extends Veiculo {
  #cilindradas;

  constructor() {
    super();
    this.#cilindradas = 0;
  }

  setCilindradas(cilindradas) {
    this.#cilindradas = cilindradas;
  }
  getCilindradas() {
    return this.#cilindradas;
  }

  mover() {
    return "A moto está acelerando.";
  }

  exibirInfo() {
    return `${super.exibirInfo()}, Cilindradas: ${this.#cilindradas}`;
  }
}

// Array de veículos
const veiculos = [];

// Manipulação da interface
const tipoSelect = document.getElementById("tipo");
const campoCarro = document.getElementById("campoCarro");
const campoMoto = document.getElementById("campoMoto");
const resultado = document.getElementById("resultado");

tipoSelect.addEventListener("change", () => {
  campoCarro.style.display = tipoSelect.value === "Carro" ? "block" : "none";
  campoMoto.style.display = tipoSelect.value === "Moto" ? "block" : "none";
});

document.getElementById("btnCadastrar").addEventListener("click", () => {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const tipo = tipoSelect.value;

  let veiculo;

  if (tipo === "Carro") {
    veiculo = new Carro();
    veiculo.setMarca(marca);
    veiculo.setModelo(modelo);
    veiculo.setPortas(document.getElementById("portas").value);
  } else if (tipo === "Moto") {
    veiculo = new Moto();
    veiculo.setMarca(marca);
    veiculo.setModelo(modelo);
    veiculo.setCilindradas(document.getElementById("cilindradas").value);
  }

  if (veiculo) {
    veiculos.push(veiculo);
    resultado.innerHTML = "Veículo cadastrado com sucesso!";
  }
});

document.getElementById("btnListar").addEventListener("click", () => {
  resultado.innerHTML = "";
  veiculos.forEach((v) => {
    resultado.innerHTML += v.exibirInfo() + "<br>";
  });
});

document.getElementById("btnMover").addEventListener("click", () => {
  resultado.innerHTML = "";
  veiculos.forEach((v) => {
    resultado.innerHTML += v.mover() + "<br>";
  });
});
