/* Estruturas de repetição ou laços de repetição ou estruturas de iteração*/

let frutas = ['Maçã', 'uva', 'melancia']

/* FOR = para faça 
geralmente contem 3 informações basicas, TODOS SEPARADOS POR PONTO E VIRGULA
1º criar uma variavel interna normalmente chamada i (normalmente inicializada em 0)
2º condição para que aconteça a repetição
3º contador de incremento(nome da variavel com ++) ou decremento(nome da variavel com --) */
/* i = iterador, iteração ou index */
for (let i = 1; i < 5; i++){
    document.write(i + "")
}

for (let i = 5; i >= 1; i--){
    document.write(i + "")
}

for (let i = 0; i < frutas.length; i++){
    document.write(`<li>${frutas[i]}</li>`)
}

/* FOREACH forEache = para cada */
 let cor = ['branco', 'preto', 'rosa', 'vermelho', 'roxo']

 cor.forEach(function(cor, i){
    document.write(`${i} ${cor} <br>`)
 })

frutas.forEach(function(frutas){
    document.write(`${frutas}<br>`)
})

/* WHILE enquanto*/

//criando uma variavel de contador fora do laço

let contador = 0

while(contador < cor.length){
    console.log(cor[contador])
    contador++ //contador + 1
}
//aqui o contador esta com o valor 5
console.log(contador)

/* DO WHILE faça enquanto */

//criar variavel de contador fora do laço
let iterador = 0 

do {
    console.log(frutas[iterador])
    iterador++//contador + 1
} while(iterador < frutas.length)

//aqui o iterador esta com valor 3
console.log(iterador)