// DOM = Document Object Model
/* Arvore com elementos desde o browser, a janela do browser, 
o documento e cada elemento html que formam os conteudos 
 */
/* 
navigator
window
location
document -> html -> head e body history
tudo isso pro js é um objeto que pode ser acessado
*/

// PARA MANIPULAR O DOM
/* é preciso indicar qual objeto usar, depois chamar o método (função) para selecionar ele, seus dados, trazer informações, etc. */

// .querySelector() -> seleciona elemento com base na tag, #id ou .class

let titulo = document.querySelector('h1') 
//let titulo = document.querySelector('#titulo') 
//console.log (titulo)

/* .textContent propriedade ou atributo textContent, serve para acessar
 ou alterar conteudo de um elemento que foi selecionado 
 */
//console.log (titulo.textContent)

//exemplo
titulo.textContent = 'DOM'
// O titulo que antes era aula 06 agora é dom pq foi modificado

/* o .querySelecto seleciona uma parte, um comando especifico que vc deseja ver, para selecionar tudo use o .querySelectoAll com base na tag, #id ou .class
 */

let testando = document.querySelectorAll('.box')
//console.log(testando)
// é possivel também selecionar o comando por 

document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
//testando [0].textContent = ' aoh meu prefeito'

// existem outros métodos mas PREFIRA USAR O querySelector()

/* .getElementsByTagName()
.getElementsById()
getElementsByClassName()
 */

let testeTag = document.getElementsByTagName('div')
//document.write(testeTag[0].textContent)
//document.write(testeTag[1].textContent)


let testeDiv = document.getElementById ('titulo') 
//document.writw(testeDiv[0].textContent)
//document.writw(testeDiv[1].textContent)

let testeClass = document.getElementsByClassName ('box')
//document.writw(testeClass[0].textContent)
//document.writw(testeClass[1].textContent)