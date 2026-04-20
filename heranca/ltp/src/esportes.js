export default class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

export class Atleta extends Pessoa {
  constructor(nome, idade, modalidade, ranking) {
    super(nome, idade);
    this.modalidade = modalidade;
    this.ranking = ranking;
    this.vitorias = 0;
  }

  registrarVitoria() {
    this.vitorias++;
  }
}

export class AtletaIndividual extends Atleta {
  constructor(nome, idade, modalidade, ranking) {
    super(nome, idade, modalidade, ranking);
  }
}

export class AtletaEquipe extends Atleta {
  constructor(nome, idade, modalidade, ranking, equipe) {
    super(nome, idade, modalidade, ranking);
    this.equipe = equipe;
  }
}

export class Equipe {
  constructor(nome) {
    this.nome = nome;
    this.atletas = [];
    this.pontos = 0;
  }

  adicionarAtleta(atleta) {
    this.atletas.push(atleta);
  }

  adicionarPontos(pontos) {
    this.pontos += pontos;
  }
}

export class Partida {
  constructor(adversario1, adversario2, data) {
    this.adversario1 = adversario1;
    this.adversario2 = adversario2;
    this.data = data;
    this.resultado = null;
  }

  simularPartida() {
    const vencedor = Math.random() > 0.5 ? this.adversario1 : this.adversario2;
    this.resultado = `${vencedor.nome} venceu`;

    if (vencedor.adicionarPontos) {
      vencedor.adicionarPontos(3);
    }

    console.log(this.resultado);
  }
}

export class PartidaFutebol extends Partida {
  simularPartida() {
    const gols1 = Math.floor(Math.random() * 5);
    const gols2 = Math.floor(Math.random() * 5);

    this.resultado = `${this.adversario1.nome} ${gols1} x ${gols2} ${this.adversario2.nome}`;

    if (gols1 > gols2) this.adversario1.adicionarPontos(3);
    else if (gols2 > gols1) this.adversario2.adicionarPontos(3);
    else {
      this.adversario1.adicionarPontos(1);
      this.adversario2.adicionarPontos(1);
    }

    console.log(this.resultado);
  }
}

export class PartidaBasquete extends Partida {
  simularPartida() {
    const pontos1 = Math.floor(Math.random() * 100);
    const pontos2 = Math.floor(Math.random() * 100);

    this.resultado = `${this.adversario1.nome} ${pontos1} x ${pontos2} ${this.adversario2.nome}`;

    if (pontos1 > pontos2) this.adversario1.adicionarPontos(2);
    else this.adversario2.adicionarPontos(2);

    console.log(this.resultado);
  }
}

export class PartidaTenis extends Partida {
  simularPartida() {
    const sets1 = Math.floor(Math.random() * 3);
    const sets2 = Math.floor(Math.random() * 3);

    this.resultado = `${this.adversario1.nome} ${sets1} x ${sets2} ${this.adversario2.nome}`;

    if (sets1 > sets2) this.adversario1.adicionarPontos(1);
    else this.adversario2.adicionarPontos(1);

    console.log(this.resultado);
  }
}

export class TabelaClassificacao {
  constructor() {
    this.equipes = [];
  }

  adicionarEquipe(equipe) {
    this.equipes.push(equipe);
  }

  mostrarTabela() {
    const ordenado = this.equipes.sort((a, b) => b.pontos - a.pontos);

    console.log("\nTabela de Classificação:");
    ordenado.forEach((equipe, i) => {
      console.log(`${i + 1}º - ${equipe.nome}: ${equipe.pontos} pts`);
    });
  }
}