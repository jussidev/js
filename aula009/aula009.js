function carregou(){
    console.log('Página carregada com sucesso!')
}

 function rolouPagina(){
    console.log('Rolou a página')
} 

function focou(){
    console.log('Foco no titulo')
}

function focoNoCampo(){
    console.log('Focou no campo de texto')
}

function semFocoNoCampo(){
    console.log('Saiu do campo de texto')
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou(){
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras)) 
}

//escutador de eventos addEventsListener

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// no js não se usar o ON de onmouseover usa apenas MOUSEOVER
botao1.addEventListener('mouseover', 
function (){
    console.log('Focou no botão 1')
})

//focusout ou blur quando sai do foco
botao2.addEventListener('blur',
function (){
    console.log('Focou no botão 2')
})

//1 click do mouse
botaoEnviar.addEventListener('click',
function(event){
    //event é o evento que vai ser disparado pelo botão submit
    //preventDefault prevenção do comportamento pradrão ou seja eu não quero que a págira recarregue 
    event.preventDefault()
    console.log('Clicou no botão enviar')
})