/* Dado Virtual */

let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function(){
    //adicionar animção
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    //tocar o efeito sonoro
    dadoRolando.play()

    //ocultar o botão sortear
    btnSortear.style.display = 'none'

    //usar setTimeout para executar as ações após 2 segundos
    setTimeout(function(){

        //Armazenar número sorteado na variavel
        numeroSorteado = getRandomInt(1,6)

        //escrever o número sorteado no console
        console.log(numeroSorteado)

        //definir atributo src com base no número
        imgDado.setAttribute('src' , 'images/dado/' + numeroSorteado + '.png' )
        //escrever no paragrafo numeroSorteado
        sorteado.textContent = numeroSorteado

        //exibir o botão sortear
        btnSortear.style.display = 'inline-block'

        //retirar a animação
        imgDado.classList.remove('animar')
       sorteado.classList.remove('aparecer')
    }, 1750)
})

//Mth.random faz um sortei de número entre 0 e 1
//função que gera um número randomico inteiro
//incluindo o minimo e o maximo
//floor é um método de arredondamento 
function getRandomInt(min, max){
    min = Math.ceil(min) // arredonda para cima ceil = teto
    max = Math.floor(max) // arredonda para baixo floot = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}
