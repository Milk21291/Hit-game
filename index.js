var numeroSecreto = parseInt(Math.random() * 21);
var numeroTentativas = 3;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var tentativas = document.getElementById("tentativas");
  var chute = parseInt(document.getElementById("valor").value);

  if (numeroTentativas > 0) {
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Parabéns!! Você acertou.";
      numeroTentativas === 0;
      tentativas.innerHTML = "Recarregue a página para jogar novamente.";
    } else if (chute > 20 || chute < 0) {
      resultado.innerHTML = "Número inválido. Digite um número entre 0 e 10.";
    } else {
      numeroTentativas--;
      tentativas.innerHTML =
        "Você tem " + numeroTentativas + " tentativas restante.";
      if (numeroSecreto < chute) {
        resultado.innerHTML =
          "Ops! Você errou. O número secreto é menor do que " + chute;
      } else if (numeroSecreto > chute) {
        resultado.innerHTML =
          "Parece que você errou. O número secreto é maior do que " + chute;
      }
    }
  }
  if (numeroTentativas === 0) {
    resultado.innerHTML = "Você perdeu. O numero secreto era " + numeroSecreto;
    tentativas.innerHTML =
      "Você esgotou suas tentativas. Recarregue a página para jogar novamente.";
  }
}

// if (chute > 15 || chute < 0) {
//   elementoResultado.innerHTML = "Você deve digitar um numero de 0 a 15";

// else if (chute > 15 || chute < 0) {
// elementoResultado.innerHTML = "Você deve digitar um numero de 0 a 15";
// } else {
// console.log("errou")
// }
