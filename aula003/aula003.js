//arrays- vetores ou matriz

 

let cor = ['preto', 'roxo', 'azul']
var animal = Array ('dog', 'cat', 'cow')
let marca = ['samsung', 'motorola', 'redmi']

// push ADICIONA elementos no final da array

cor.push('rosa', 'branco')
animal.push('horse', 'ema')
marca.push('apple', 'acer')

// pop REMOVE o último elemento da array

cor.pop()
animal.pop()
marca.pop()

//unshift é usado para ADICIONAR elementos no inicio da array

cor.unshift('amarelo', 'vermelho')
animal.unshift('pig', 'deer')
marca.unshift('positivo', 'dell')

//shift é usado para REMOVER elementos no inicio da array

cor.shift()
animal.shift()
marca.shift()

/*splice é usado para REMOVER um elemento de uma posição especifica e quantos elementos incluindo
 o da primeiro posição desejada vc deseja remover tbm*/

 cor.splice(2, 2)
 animal.splice(1, 1)
 marca.splice(3,2)

 //slice é usado para COPIAR a array e dividila da forma que deseja, da posição inicial e quantos deseja

 let cor1 = cor.slice()
 let cor2 = cor.slice(0,2)

 //length é usado para saber o comprimento do array quantos ELEMENTOS ele tem (usado no console)

 //cor.length
 //animal.length
 //marca.length

 //spreed operator ... é usado para copiar a array e adicionar elementos nela

 let test = [...cor, 'dourado', 'marrom']

 // vc também pode adicionar texto na array em determinada posição como

 var posicoes = Array(11)
 posicoes[0]='primeiro'
 posicoes[5]='sexto'
 posicoes[11]='decimo segundo'