import {
  AtletaEquipe,
  Equipe,
  PartidaFutebol,
  PartidaBasquete,
  PartidaTenis,
  TabelaClassificacao
} from "./esportes.js";

const timeA = new Equipe("Time A");
const timeB = new Equipe("Time B");

const jogador1 = new AtletaEquipe("João", 20, "Futebol", 1, timeA);
const jogador2 = new AtletaEquipe("Pedro", 22, "Futebol", 2, timeB);

timeA.adicionarAtleta(jogador1);
timeB.adicionarAtleta(jogador2);

const futebol = new PartidaFutebol(timeA, timeB, "20/05");
const basquete = new PartidaBasquete(timeA, timeB, "21/05");
const tenis = new PartidaTenis(timeA, timeB, "22/05");

futebol.simularPartida();
basquete.simularPartida();
tenis.simularPartida();

const tabela = new TabelaClassificacao();
tabela.adicionarEquipe(timeA);
tabela.adicionarEquipe(timeB);

tabela.mostrarTabela();