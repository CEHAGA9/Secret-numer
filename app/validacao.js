const html = document.querySelector('html')
const game = document.getElementById('game')
const header = document.getElementById('header')

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "FIM DO JOGO." || chute.toUpperCase() === "FIM DO JOGO" || chute.toUpperCase() === "FIM DE JOGO" || chute.toUpperCase() === "FIM DE JOGO.") {

            game.innerHTML =
                `
                <h1>Game Over</h1>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
            document.body.style.backgroundColor = "black";
            html.setAttribute('started', 'finished')
            
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        mudarPlayer()

        return
    }

    if (numero === numeroSecreto) {
        game.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <span class="box"><i class="fa-solid fa-award"></i> Jogador ${playernumber}</span>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        header.innerHTML = ` `
        html.setAttribute('started', 'finished')

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
        mudarPlayer()
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
        mudarPlayer()
    }
 
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
