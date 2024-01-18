const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

function começarJogo(){
    recognition.start()
    elementoChute.innerHTML = `
        <div>Fale o número</div>
        <span class="box"><i class="fa-solid fa-microphone"></i></span>
     `
    html.setAttribute('started', 'yes')
}

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    resultado = e.results[0][0].transcript
    chute = resultado.replace(/.$/, '')
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}

recognition.addEventListener('end', () => recognition.start())
