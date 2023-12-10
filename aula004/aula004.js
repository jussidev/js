
 /* objetos, usados de uma forma que podem ser considerados elementos, como o objeto que compoe certa coisa
 como por exemplo uma casa é composta por moveis, 
 para adicionar os objetos na array precisa ser utilizado as chaver ({}) sucessor do sinal de igual = */

/* objetos, usados de uma forma que podem ser considerados elementos, como o objeto que compoe certa coisa
 como por exemplo uma casa é composta por moveis, 
 para adicionar os objetos na array precisa ser utilizado as chaver ({}) sucessor do sinal de igual = */

 let pessoa = {

    nome : 'jussi',
    idade : 17,
    peso : 50,
    altura : 1.66,
}
/* Entre chaves a gente infroma cadce elemento que vai compor nosso objeto */

var preco = {
    produto : [],
    peso : []
}

const arvore = {
    tipo : ['ipe', 'mangueira', 'araucaria'],
    tamanho : ['pequeno', 'medio', 'grande'],
    quantidade : [10, 15, 20],
}

/* 
Acessar propriedade usando .
pessoa.nome
pessoa.idade
pessoa.peso
 */

/* 
Acessar propriedade usando ['']
pessoa['nome']
pessoa.['idade']
pessoa.['peso'] 
 */

// OPERAÇÃO
let imc = pessoa.peso/ (pessoa.altura * pessoa.altura)

//.toFixed(x) comando usado para limitar o numero de casas decimais

console.log( " IMC " + imc.toFixed(2))

// alterar/atualizar o valor da propriedade
pessoa.nome = "jussiani da silva machado"
preco.produto = ['macarrão']
preco.peso = ['2']
arvore.quantidade = ['15', '20', '25']

//usando spreed operator

 preco.peso = [...preco.peso,'5']
 preco.produto = [...preco.produto, 'arroz']

 //usando spreed operator no const

 arvore.tipo = [...arvore.tipo, 'elcalipito']