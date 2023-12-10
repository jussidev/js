// desafio 

// informações
 document.write('<h1>Informações</h1>') //adição de titulo
let cantor = 'Luan Santana'
let nacionalidade = 'brasileiro'
let idade = 32
let altura = 1.83
document.write(`Cantor: ${cantor} <br> Nacionalidade: ${nacionalidade} <br> Idade: ${idade} <br> Altura: ${altura} <br>`)

// frase do dia 
document.write('<h1> Frase do dia </h1>')
const dia = '9'
const m = '9'
const a = '2009'
const frase = ' Falo linguas'
const autor = 'Professor Daniel'
document.write(`${dia}/${m}/${a} <br> ${frase} <br> ${autor}`)

// arrays de meses do ano
document.write('<h1>Arrays de meses do ano</h1>')
let meses = ['Janeiro',  ' Fevereiro', ' Março', ' Abril', ' Maio', ' Junho', ' Julho', ' Agosto', ' Setembro', ' Outubro', ' Novembro', ' Dezembro']
document.write(`${meses} `)

// objeto jogo
document.write('<h1> Objeto Jogo </h1>') 
let filme = {
    filme : 'Mamma Mia',
    ano: 2008,
    diretor : 'Phyllida Lloyd'
}
document.write(`Filme: ${filme.filme} <br>`)
document.write(`Ano: ${filme.ano} <br>`)
document.write(`Diretor: ${filme.diretor} <br>`)
