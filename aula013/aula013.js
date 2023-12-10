/* Calculadora de Média */

let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

//selecionar caisas de textos por id

let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

//Calcular média
function calcularMedia (n1, n2){
    return (n1 + n2) / 2
}

//Definir situação final com base na média
function situacaoFinal (mediaFinal){
     let situacaoFinal = ''

     if (mediaFinal >= 7){
        situacaoFinal = 'Aprovado(a)'
     } else if (mediaFinal <= 3){
        situacaoFinal = 'Reprovado(a)'
     } else {
        situacaoFinal = 'Recuperação'
     }
     return situacaoFinal

}

//Formatar a caixa de situação final
function formatarSituacao(situacaoFinal){
  console.log('Situação Final' + situacaoFinal)
  switch(situacaoFinal){
  
        case 'Aprovado(a)' :
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break

        case 'Reprovado(a)' :
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break

        case 'Recuperação': 
        cxSituacao.classList.remove('aprovado')
        cxSituacao.classList.remove('reprovado')
        cxSituacao.classList.add('recuperacao')
        console.log('adicionar class recuperacao')
        break

        default:
            console.log('Situação Indefinida')

  } //fim do switch case

}


//Validar e gerar flash message
    function validarNumero(numero){
        let num1 = cxNota1.value 
        let num2 = cxNota2.value 
        if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10){
            formulario.reset() //limpa o formuloario
            aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
            aviso.classList.add('alerta')
            setTimeout(function(){ //setTimeout serve pra passar como parametro uma funcção anonima mais a fração de segundos
                aviso.textContent = ''
                aviso.classList.remove('alerta')
            }, 2000);
        }    
     }

     //Calcular a media apos o click no botão
     btnCalcular.addEventListener('click', function (e){
        console.log('Calcular Média')
        //pegar o valor que está dentro das caixas
        //usar metodo parseFloat para converter string para float

        let nota1 = parseFloat(cxNota1.value) //parseFloat fazer um passe, transformar
        let nota2 = parseFloat(cxNota2.value)
        let media = calcularMedia(nota1, nota2)

        console.log(nota1)
        console.log(nota2)
        console.log(media)

        if (isNaN(media) || media < 0){ //NaN NOT A NUMBER
            console.log("Não é um número")
            cxSituacao.value = ''
        } else {
            cxMedia.value = parseFloat(media)
            cxSituacao.value = situacaoFinal(media)
            formatarSituacao(situacaoFinal(media))
        }
        e.preventDefault()
     })

     //Apos limpar tirar as class da cx situaçaõ
     btnLimpar.addEventListener('click', function(){
        cxSituacao.classList.remove('aprovado')
        cxSituacao.classList.revome('reprovado')
        cxSituacao.classList.revome('recuperação')
     })