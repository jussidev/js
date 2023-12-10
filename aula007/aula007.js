// alterando CSS com DOM

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 007 Manipulando CSS'
//titulo.innerHTML = 'Manipulando CSS' // mesma função do textContent

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'pride-fc.jpg') //setAttribute configura um atributo, usando dois parametros, o primeiro parametro é o nome do atributo que você vai configurar e o segundo parametro é a configuração do atributo, o valor que você vai definir para esse atributo
imagem.setAttribute('width', '280px')

/* Manipular CSS */
//document.querySelector('h1').style.color = 'pink'
titulo.style.color = "pink"; // atraves da propriedade style você pode passar qual propriedade css você quer alterar e dar um valor para ela
//document.querySelector('h1').style.backgroundColor = "#000";
titulo.style.backgroundColor = "#000";
//document.querySelector('h1').style.borderBottom = "2px solid pink",
titulo.style.borderBottom = "3px solid pink";
titulo.style.borderRadius = "5px";
titulo.style.padding = "0.625rem";

let box = document.querySelectorAll ('.box')// 
box [0].setAttribute('class', 'lilas') //adiciona um atributo 
//box[0].removeAttribute ('class') remove um atributo 


//////// MODO DE COR ////////

let tela = document.querySelector('')

let btnDark = document.querySelector('#btdark')

let btnLinght = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLinght.addEventListener('click', modoLight)

function modoDark() {

    console.log('mode dark');
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight(){
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
}