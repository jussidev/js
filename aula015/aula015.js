/* Mentalisador - adivinhe o número */

let numeroSecreto = 0
//let numeroDeChances = 3
let contador = 1
let min = 1
let max = 10
let situacao = ''

//selecionar elementos 
let inputNumero = document.querySelector('#inputNumero') // input Numero
let btnChutar   = document.querySelector('#btnChutar') // botãp chutar
let aviso       = document.querySelector('#aviso') // paragrafo de aviso
let musica      = document.querySelector('#musicaDeFundo')

//funções ou metodos para controlar o jogo
function gerarNumeroSecreto(){
    //gerar número secreto
    numeroSecreto = Math.floor(Math.random() * (max - min + 1 )) + min
    //console.log(numeroSecreto)
}

function bloquearBtnChutar() {
   btnChutar.setAttribute('disabled', 'disabled')
   btnChutar.style.backgroung = '#ccc'
   btnChutar.style.cursor = 'not-allowed'
}

function ativarBtnChutar(){
    btnChutar.removeAttribute('disabled')
    btnChutar.style.backgroung = '#222'
    btnChutar.style.cursor = 'pointer'
}

function validarNumeroDigitado(numero){
    if (numero <= 0 || numero > 10){
        console.log('Tentativa inválida!')
        aviso.classList.add('Errou')
        mensagemRapida('Você não está sendo um(a) mentalista! Digite um número entre 1 e 10')
        bloquearBtnChutar()
        inputNumero.value = ''
    } else{
        console.log('Número válido')
    }
}

//Metodos para manipular a música
function tocarMusicaDeFundo(){
    musica.play()
}

function ativarDesativarMusica(){
 if( musica.muted ){
    musica.muted = false;
 } else {
    musica.muted = true;
   }
     
}

function pausarMusicaDeFundo(){
    musica.pause()
    musica.currentTime = 0;
}

function jogar(){
   console.log("jogando")
   verificarSeAcertou() //problema
}

function mensagemRapida(mensagem){
    aviso.textContent = mensagem //problema
    setTimeout(function(){
        aviso.textContent = ""
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value = ''
    }, 3000)
}

function gameOver(situacao){
    switch (situacao){

        case 'Acertou':
            aviso.classList.add('acertou')
            mensagemRapida('Acertou, o número secreto era ' + numeroSecreto)
            break

        case 'Chute maior' :
            mensagemRapida('Chute maior que o número secreto')
            aviso.classList.add('errou')
            break
            
        case 'Chute menor' :
            aviso.classList.add('errou')
            mensagemRapida('Chute menor que o número secreto') //problema
            break  
            
            default:
                console.log('Informe a situação')
    } 
} //fim do switch case

function verificarSeAcertou(){
    //pegar o valor de input número digitado e converter para inteiro
     chute = parseInt(document.querySelector('#inputNumero').value) //parseInt convete o número para inteiro

    console.log('Nº do Chute ' + contador)
    console.log('Chute ' + chute)

    if(numeroSecreto === chute) {
        console.log('Acertou')
        situacao = 'Acertou'
        gameOver(situacao)
        gerarNumeroSecreto()// gerar novo número secreto
    } else if (chute > numeroSecreto) {
        console.log ('Chute maior')
        situacao = 'Chute maior'
        gameOver(situacao)
    } else if (chute < numeroSecreto) {
        console.log('Chute menor')
        situacao = 'Chute menor'
        gameOver(situacao)
    } else {
        console.log('Impossível verificar se acertou')
    }
}

 