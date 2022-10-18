let vez = 1;
let vencedor = "";
let nomeJogador1 = prompt("Digite o nome do jogador 1");
let nomeJogador2 = prompt("Digite o nome do jogador 2");

function casasIguais(a, b, c) {
  const bgA = document.getElementById("casa" + a).style.backgroundImage;
  const bgB = document.getElementById("casa" + b).style.backgroundImage;
  const bgC = document.getElementById("casa" + c).style.backgroundImage;

  if (bgA == bgB && bgB == bgC && bgA != "none" && bgA != "") {
    if (bgA.indexOf("1.jpg") >= 0) {
      vencedor = nomeJogador1;
    } else {
      vencedor = nomeJogador2;
    }
    return true;
  } else return false;
}

function verificarFimDeJogo() {
  if (
    casasIguais(1, 2, 3) ||
    casasIguais(4, 5, 6) ||
    casasIguais(7, 8, 9) ||
    casasIguais(1, 4, 7) ||
    casasIguais(2, 5, 8) ||
    casasIguais(3, 6, 9) ||
    casasIguais(1, 5, 9) ||
    casasIguais(3, 5, 7)
  ) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h1>O jogador " + vencedor + " venceu! </h1>";
    const casaRemoveClick = document.querySelectorAll(".casa");
    casaRemoveClick.forEach((e) => {
      e.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  }
}

const casa = document.querySelectorAll(".casa");
casa.forEach((e) => {
  e.addEventListener("click", (e) => {
    const bg = e.target.style.backgroundImage;
    if (bg == "none" || bg == "") {
      const fig = `url("${vez.toString()}.jpg")`;
      e.target.style.backgroundImage = fig;
      vez = vez == 1 ? 2 : 1;
      verificarFimDeJogo();
    }
  });
});
