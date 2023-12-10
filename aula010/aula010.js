/* Estruturas condicionais e estruturas de decisão */

let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let escolha = document.querySelector('#escolha')

let notaFinal1 = 3
let notaFinal2 = 8
let notaFinal3 = 5

/* CONDICIONAIS */

/* IF simples, necessario fazer um if para cada situação, normalmente não é muito utilizado*/
 if (notaFinal1 >= 7){
    sit1.textContent = 'Aprovado'
 }

 /* IF ELSE */
 if (notaFinal1 >= 7){
    sit1.textContent = 'Aprovado(a)'
 } else {
    sit1.textContent = 'Reprovado(a)'
 }

 /* IF TERNARIO
 começa colocando uma condição uma ação que quer realizar, depois o sinal de interrogação ? que significa a palavra então, depois do sinalde interrogação coloca a açõa que quer executar caso a condição seja verdadeira e depois dois ponto : que vai ter a ação que vai ser executada caso a condição seja falsa */
  notaFinal2 >= 7 ? sit2.textContent = 'Passou' : sit2.textContent = 'Ficou'

  /* IF ENCADEADO OU ANINHADO varias situações para realizar caso a condição desejada não seja verdadeira  */
if (notaFinal3 >= 7){
    sit3.textContent = 'Aprovado'
} else if (notaFinal3 >= 7) {
    sit3.textContent = 'Reprovado'
} else {
    sit3.textContent = 'Recuperação'
}

/* Estrutura de ESCOLHA de DECISÃO */


let situação = ''
//let situação = 'Aprovado'
//let situação = 'Reprovado'
//let situação = 'Recuperação'

/*  switch case escolha de acordo com o conteudo de uma variavel caso seja a valor descrito e pare (break)*/
switch(situação) {
    case 'Aprovado':
        escolha.textContent = 'Passou de ano'
       break
    
    case 'Reprovado':
        escolha.textContent = 'Não passosu de ano'
        break

    case 'Recuperação':
            escolha.textContent = 'Ainda tem chance'
            break
            
    default:
        escolha.textContent = 'Estude'
        //default caso nenhum das outras situações ocorrerem faça o que esta escrito aqui
        //default não precisa de break
}