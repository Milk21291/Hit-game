(function () {
  let numeroSecreto = gerarNumeroSecreto();
  const tentativasBase = 20;
  let numeroTentativas = tentativasBase;
  let faseAtual = 1;
  let tentativaAtual = 0;

  function gerarNumeroSecreto() {
    return parseInt(Math.random() * 20) + 1;
  }

  function calcularTentativasIniciais() {
    tentativaAtual += 2;
    return tentativasBase - tentativaAtual;
  }

  window.Chutar = function () {
    let resultado = document.getElementById("resultado");
    let tentativas = document.getElementById("tentativas");
    let chute = parseInt(document.getElementById("valor").value);
    let fases = document.getElementById("fases");

    fases.innerHTML = `Fase ${faseAtual}`;

    if (!chute) {
      resultado.innerHTML = "Valor inválido";
      return;
    }

    if (numeroTentativas > 0) {
      if (chute == numeroSecreto) {
        if (faseAtual === 7) {
          resultado.innerHTML = `Parabéns!! Você completou o game, agora vá em "Historia" e veja como ela termina.`;
          return;
        }

        faseAtual++;
        numeroTentativas = calcularTentativasIniciais();
        resultado.innerHTML = `Parabéns!! Você acertou. Você está na Fase ${faseAtual}, escolha um número.`;
        numeroSecreto = gerarNumeroSecreto();
      } else if (chute > 20 || chute < 1) {
        resultado.innerHTML = "Número inválido. Digite um número entre 1 e 20.";
      } else {
        numeroTentativas--;
        tentativas.innerHTML =
          "Você tem " + numeroTentativas + " tentativas restantes.";
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
      resultado.innerHTML =
        "Você perdeu. O número secreto era " + numeroSecreto;
      tentativas.innerHTML =
        "Você esgotou suas tentativas. Recarregue a página para começar novamente.";
      faseAtual = 1;
      tentativaAtual = 0;
      numeroTentativas = tentativasBase;
      numeroSecreto = gerarNumeroSecreto();
    }
  };
})();
