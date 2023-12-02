// desafio 
 document.write('<h1>Informações</h1>')
// informações

let cantor = 'Luan Santana'
let nacionalidade = 'brasileiro'
let idade = 32
let altura = 1.80
document.write(`Cantor: ${cantor} <br> Nacionalidade: ${nacionalidade} <br> Idade: ${idade} <br> Altura: ${altura} <br>`)

document.write('<h1> Frase do dia </h1>')
// frase do dia 

const dia = '9'
const m = '9'
const a = '2009'
const frase = ' Falo linguas'
const autor = 'Professor Daniel'
document.write(`${dia}/${m}/${a} <br> ${frase} <br> ${autor}`)


document.write('<h1>Arrays de meses do ano</h1>')
// arrays de meses do ano

let meses = ['Janeiro',  ' Fevereiro', ' Março', ' Abril', ' Maio', ' Junho', ' Julho', ' Agosto', ' Setembro', ' Outubro', ' Novembro', ' Dezembro']
document.write(`${meses} `)


document.write('<h1> Objeto Jogo </h1>')
// objeto jogo

let filme = {
    filme : 'Mamamia',
    ano: 1997,
    diretor : 'Tim Maia'
}
document.write(`Filme: ${filme.filme} <br>`)
document.write(`Ano: ${filme.ano} <br>`)
document.write(`Diretor: ${filme.diretor} <br>`)
