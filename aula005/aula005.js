//comentario em linha

/*
 Comentario em bloco
 */

//criar variaves seja com let ou var de preferencia usar let

 let produto = 'maça'
 let quantidade = 9
 let preco = 7.59
 let calculo = quantidade * preco

 document.write(`Preço total é R$ ${calculo} <br>`)
 console.log(new Intl.NumberFormat('pt-br').format(calculo)) // jeito de add o calculo no console


 /* um jeito mais "simples" de add o sifrião do dinheiro junto com o calculo */
 document.write(`Preço toral ${calculo.toLocaleString('pt-br', {style: 'currency',currency: 'BRL'})} <hr>`)

 //criar constant

 const materia = 'matematica'
 const av1 = 9.5
 const av2 = 9.5
 const notaTotal = (av1 + av2) / 2

 document.write (`Nota final ${notaTotal} <br>`)
 document.write (`Nota final ${notaTotal.toFixed(2)} <br>`)

 let nota1 = 9
 let nota2 = 7
 let nota3 = 10
 let notafinal = (nota1 * nota2 * nota3) / 3
 document.write ("Nota final "  + notafinal + '<br>')

 let fatura = 359.90
 let dinheirodisponivel = 400
 let sobra = dinheirodisponivel - fatura
 document.write(sobra.toLocaleString('pt-br', {style: 'currency', currency: 'brl'}) + '<br')