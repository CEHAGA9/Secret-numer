const html = document.querySelector('html')
let playernumber = 1;

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "FIM DO JOGO." || chute.toUpperCase() === "FIM DO JOGO" ) {

            document.body.innerHTML =
                `
                <h1>Game Over</h1>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
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
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
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


function mudarPlayer(){
    if(playernumber == 1){
        html.setAttribute('player', 'red')
        playernumber = 2
    }
    else if(playernumber == 2){
        html.setAttribute('player', 'blue')
        playernumber = 3
    }
    else if(playernumber == 3){
        html.setAttribute('player', 'green')
        playernumber = 4
    }
    else if(playernumber == 4){
        html.setAttribute('player', 'purple')
        playernumber = 1
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})