const btn1 = document.getElementById('oneplayer')
const btn2 = document.getElementById('twoplayers')
const btn3 = document.getElementById('threeplayers') 
const btn4 = document.getElementById('fourplayers') 

const textoIndicadorJogador = document.querySelector('.textoIndicadorJogador')

let playernumber = 1;
let numberOfPlayers = 2;

function mudarPlayer(){
    if(playernumber == 1 && numberOfPlayers > 1){
        html.setAttribute('player', 'red')
        playernumber = 2
        textoIndicadorJogador.innerHTML = '<i class="fa-regular fa-user"></i> Jogador 2'
    }
    else if(playernumber == 2 && numberOfPlayers > 2){
        html.setAttribute('player', 'green')
        playernumber = 3
        textoIndicadorJogador.innerHTML = `<i class="fa-regular fa-user"></i> Jogador 3`
    }
    else if(playernumber == 3 && numberOfPlayers > 3){
        html.setAttribute('player', 'purple')
        playernumber = 4
        textoIndicadorJogador.innerHTML = `<i class="fa-regular fa-user"></i> Jogador 4`
    }
    else if(playernumber == 4 && numberOfPlayers > 4){
        html.setAttribute('player', 'blue')
        playernumber = 1
        textoIndicadorJogador.innerHTML = `<i class="fa-regular fa-user"></i> Jogador 1`
    }
    else{
        html.setAttribute('player', 'blue')
        playernumber = 1
        textoIndicadorJogador.innerHTML = `<i class="fa-regular fa-user"></i> Jogador 1`
    }
    console.log(playernumber, numberOfPlayers)
}

btn1.addEventListener('click', () => {
    numberOfPlayers = 1
    começarJogo()
})
btn2.addEventListener('click', () => {
    numberOfPlayers = 2
    começarJogo()
})
btn3.addEventListener('click', () => {
    numberOfPlayers = 3
    começarJogo()
})
btn4.addEventListener('click', () => {
    numberOfPlayers = 4
    começarJogo()
})

