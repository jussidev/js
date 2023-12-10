let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

/* Funções sem paramentros(sem informações entre os parenteses ) e sem retorno (não utiliza a palavra return) (procedure = prodecimento é uma estrutura igual de uma função que não tem retorno )*/

function etdf() {
    document.write('Função sem retorno e sem parametro <br>')
}

/* Função sem parametro e com retorno (function) */

function etdf2(){
 return 'Função com retorno e sem parametro <br>'

}

//CHAMAR A FUNÇÃO = executar ela

etdf()
document.write(etdf2())

let n1 = 6
let n2 = 2
let msg = 'Viva la vida'

/* Função com parametro e sem retorno (procedure) */

function adicao(n1,n2){
    document.write(( n1 + n2) + "<br>")
}

/* Função com parametro e com retorno */

function adicao2( n3 ,n4){
    return n3 + n4
}

// CHAMAR A FUNÇÃO = executar ela

adicao(n1, n2) 
adicao(29, 2)

document.write(`<p>${adicao2(n1, n2)} <p>`)
document.write(`<p>${adicao2(9,5)} <p>`)

/* função anonima = não tem nome pode ou não ter parametros pode ou não ter retorno, geralmente usada quando é preciso passar uma função como parametro dentro de outra */

titulo.addEventListener('click', function
(){
    console.log('Clicou no título')
})

/* Arrow Functions ES6 2015 em diante */

const olaMundoArrow = () => document.write("Olá mundo")

// não precisa usar a palavra function
// não precisa usar a palavra return
// não se usa nome na função
// não precisa colocar {} se for so uma instrução

const olaMundo2Arrow = () => '<p> Olá mundo com arrow function </p>'

olaMundoArrow()
document.write(olaMundo2Arrow())