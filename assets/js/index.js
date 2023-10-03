(function () {
    let faseAtual = 1;
    const tentativasBase = 20;
    let numeroTentativas = tentativasBase;
    let numerosAtuais = 0;
    let chutesAnteriores = []; 

    function gerarNumeroSecreto() {
        return parseInt(Math.random() * (18 + faseAtual * 2)) + 1;
    }

    function calcularTentativasIniciais() {
        numerosAtuais += 2;
        return tentativasBase - numerosAtuais;
    }

    function atualizarTextoFaseNumeros() {
        let fasesNumeros = document.getElementById('fasesNumeros');
        fasesNumeros.innerHTML = `Digite um número de 1 a ${18 + faseAtual * 2}`;
    }

    let numeroSecreto = gerarNumeroSecreto();
    atualizarTextoFaseNumeros();

    window.Chutar = function () {
        let resultado = document.getElementById("resultado");
        let tentativas = document.getElementById("tentativas");
        let chute = parseInt(document.getElementById("valor").value);
        let fases = document.getElementById('fases');

        fases.innerHTML = `Fase ${faseAtual}`;

        if (!chute) {
            resultado.innerHTML = "Valor inválido";
            return;
        }

        if (chutesAnteriores.includes(chute)) {
            resultado.innerHTML = "Esse número já foi chutado. Escolha outro.";
            return;
        } else {
            chutesAnteriores.push(chute);
        }

        if (numeroTentativas > 0) {
            if (chute == numeroSecreto) {
                if (faseAtual === 7) {
                    resultado.innerHTML = `Parabéns!! Você completou o game, agora vá em "Historia" e veja como ela termina.`;
                    return;
                }

                faseAtual++;
                numeroTentativas = calcularTentativasIniciais();
                numeroSecreto = gerarNumeroSecreto();
                atualizarTextoFaseNumeros();
                resultado.innerHTML = `Parabéns!! Você acertou. Você está na Fase ${faseAtual}, escolha um número entre 1 e ${18 + faseAtual * 2}.`;
                chutesAnteriores = [];
            } else if (chute > 18 + faseAtual * 2 || chute < 1) {
                resultado.innerHTML = `Número inválido. Digite um número entre 1 e ${18 + faseAtual * 2}.`;
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
            numerosAtuais = 0;
            numeroTentativas = tentativasBase;
            numeroSecreto = gerarNumeroSecreto();
            atualizarTextoFaseNumeros();
            chutesAnteriores = []; 
        }
    }
})();
