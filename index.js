let numeroSecreto = parseInt(Math.random() * 20) + 1;
let numeroTentativas = 4;

function Chutar() {
  let resultado = document.getElementById("resultado");
  let tentativas = document.getElementById("tentativas");
  let chute = parseInt(document.getElementById("valor").value);
  
  if (numeroTentativas > 1) {
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Parabéns!! Você acertou.";
      numeroTentativas === 1;
      tentativas.innerHTML = "Recarregue a página para jogar novamente.";
    } else if (chute > 20 || chute < 1) {
      resultado.innerHTML = "Número inválido. Digite um número entre 1 e 20.";
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
    resultado.innerHTML = "Você perdeu. O número secreto era " + numeroSecreto;
    tentativas.innerHTML =
    "Você esgotou suas tentativas. Recarregue a página para jogar novamente.";
  } 
}



/*
let delet = document.getElementById("delete");
let aviso = document.getElementById("aviso");
if(chute == chute) { 
aviso.innerHTML = `Você não pode usar novamente o número ${chute}.`
  }  
*/
// if (chute > 15 || chute < 0) {
//   elementoResultado.innerHTML = "Você deve digitar um numero de 0 a 15";

// else if (chute > 15 || chute < 0) {
// elementoResultado.innerHTML = "Você deve digitar um numero de 0 a 15";
// } else {
// console.log("errou")
// }
