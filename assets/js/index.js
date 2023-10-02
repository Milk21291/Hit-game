let numeroSecreto = gerarNumeroSecreto();
let numeroTentativas = 20;
let faseAtual = 1;
console.log(numeroSecreto)

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 20) + 1;
}

function Chutar() {
    let resultado = document.getElementById("resultado");
    let tentativas = document.getElementById("tentativas");
    let chute = parseInt(document.getElementById("valor").value);
    let fases = document.getElementById('fases');
    
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
            resultado.innerHTML = `Parabéns!! Você acertou. Você está na Fase ${faseAtual + 1}, escolha um número.`;
            tentativas.innerHTML = "Avançando para a próxima fase...";
            faseAtual++;
            numeroTentativas -= 2;
            numeroSecreto = gerarNumeroSecreto();
        } else if (chute > 20 || chute < 1) {
            resultado.innerHTML = "Número inválido. Digite um número entre 1 e 20.";
        } else {
            numeroTentativas--;
            tentativas.innerHTML = "Você tem " + numeroTentativas + " tentativas restantes.";
            if (numeroSecreto < chute) {
                resultado.innerHTML = "Ops! Você errou. O número secreto é menor do que " + chute;
            } else if (numeroSecreto > chute) {
                resultado.innerHTML = "Parece que você errou. O número secreto é maior do que " + chute;
            }
        }
    }

    if (numeroTentativas === 0) {
        resultado.innerHTML = "Você perdeu. O número secreto era " + numeroSecreto;
        tentativas.innerHTML = "Você esgotou suas tentativas. Recarregue a página para começar novamente.";
        faseAtual = 1;
        numeroSecreto = gerarNumeroSecreto();
    }
}
