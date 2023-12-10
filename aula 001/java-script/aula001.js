/*
arquivo js externo
*/

document.write("Olá mundo ")
console.log("Olá mundo")

let msg = "Hi hi" // let permita que isso mude/modifique
let msg2 = 'He he'
let minhaIdade = 17
let meuPeso = 50
let minhaAltura = "proximadamente 1.66" 
let teste = null

/* criar constantes e atribuir valor */

const arroz = 22.50
const gasolina = 5

teste = "algum conteúdo"

/* escrever o conteudo de varial e constante */

document.write(` msg: ${msg}`)
document.write("<p> msg2: " + msg2 + " <p>")
document.write( "<p> minhaIdade: " + minhaIdade + "<P>")
document.write(`${meuPeso}`)
document.write( "<p>" + minhaAltura + "<p>")
document.write(`${arroz}`)
document.write("<p>" + gasolina + "<p>")
document.write(`${teste}`)