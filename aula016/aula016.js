 /* Conversor */

  /* Selecionar elementos */
  //Selecionar input com o número digitado
  let valorDigitado = document.querySelector('#valorEmReal')

  //selecionar os elementos radios (criar um array deles)
  let moedaSelecionada = document.getElementsByName('moedaEstrangeira') 

  let aviso = document.querySelector('#aviso')

  //selecionat os botões
  let btnConverter = document.querySelector('#btnConverter')
  let btnLimpar    = document.querySelector('#btnLimpar')

  //Contações do dia 11/12/2023
  let valorDoDolar   = 4.94
  let valorDoEuro    = 5.31
  let valorDaLibra   = 6.20
  let valorDoBitcoin = 199994.75
  let valorEmReal    = 0

  let moedaEstrangeira = ''
  let moedaConvertida  = 0.00

  //Mensagem formatada para exibir valores monetarios
  function mensagemFormatada(moedaConvertida){
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
  }


  //Verificar se foi digitado algum valor para poder converter
  function bloquearBotao(){
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null ){
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
    
  }

  //Reativar botão
  function ativarBotao(){
    if (valorDigitado.value > 0){
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Não ativou')
    }

}

//Verificar qual botão radia está marcando o CHECKED ou checked == true
//vincular a verificação a um evento, click no botão converter
btnConverter.addEventListener('click', function(){
    //Fazer o parseFloat dos valores monetarios (converter String para Float)
    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++){
        if (moedaSelecionada[i].checked){
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    /* Use ima estrutura escolha caso para escolher qual é a moeda estrangeira que foi selecionada */

    //{moedaConvertida.toLocaleStrinf('pt-BR, {style:'currency', currency: 'BRL'})}
    //Conversão de moedas
    //Operação basica pegar moedaEstrangeira e dividir pelo valorEmReal
    
    switch(moedaEstrangeira){

        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
             break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', {style: 'currency', currency:'EUR'}))
            break
            
        case 'Libra':
            moedaConvertida = valorEmReal / valorDaLibra
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', {style: 'currency', currency:'GBP'}))
            break
            
        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5)) 
            break
            
            default: 
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})

btnLimpar.addEventListener('click', function(){
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})