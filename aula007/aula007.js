// alterando CSS com DOM

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 007 Manipulando CSS'
//titulo.innerHTML = 'Manipulando CSS' // mesma função do textContent

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'pride-fc.jpg') //setAttribute configura um atributo
imagem.setAttribute('width', '280px')

/* Manipular CSS */
//document.querySelector('h1').style.color = 'pink'
titulo.style.color = "pink";
//document.querySelector('h1').style.backgroundColor = "#000";
titulo.style.backgroundColor = "#000";
//document.querySelector('h1').style.borderBottom = "2px solid pink",
titulo.style.borderBottom = "3px solid pink";
titulo.style.borderRadius = "5px";
titulo.style.padding = "0.625rem";

let box = document.querySelectorAll ('.box')
box [0].setAttribute('class', 'lilas')
//box[0].removeAttribute ('class')


//////// MODO DE COR ////////

let tela = document.querySelector('main')

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