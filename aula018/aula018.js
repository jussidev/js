let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 //pontos para o placar
let placar = 0

//PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

//ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

//article com a class questões
let articleQuestoes = document.querySelector('.questoes')
//ol li com as alternativas 
let alternativas = document.querySelector('#alternativas') //buscar primeiro sempre selecionar os eventos que estão na tela que podemos vir a manipular 

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quantas cores tem no arco-iris?",
    alternativaA : "9",
    alternativaB : "7",
    alternativaC : "6",
    correta      : "7",
}

const q2 = {
    numQuestao   : 2,
    pergunta     :"Qual a idade do cantor Luan Santana?",
    alternativaA : "32",
    alternativaB : "25",
    alternativaC : "35",
    correta      : "32",
}

const q3 = {
    numQuestao   : 3,
    pergunta     :"A Hungria é um",
    alternativaA : "Estado",
    alternativaB : "País",
    alternativaC : "Continente",
    correta      : "País",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual o bicho tipico do Pantanal?",
    alternativaA : "Rapoza",
    alternativaB : "João de Barro",
    alternativaC : "Tuiuiú",
    correta      : "Tuiuiú",
}

const q5 = {
    numQuestao   : 5,
    pergunta     :"Qual a profissão mais bem paga do mundo?",
    alternativaA : "Médicos especialistas",
    alternativaB : "Engenheiro de software ",
    alternativaC : "Advogado",
    correta      : "Médigoco especialista",
}

//Constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2, q3, q4, q5]

let  numero = document.querySelector('#numero')
let total   = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

//Montar a 1a questão completa, para iniciar o quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

//Configurar o value inicial da 1a questão completa
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

//Para montar as próximas questões
function proximaQuestao(nQuestao){
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas(){
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas(){
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta){ 
    
    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    console.log("RespC " + certa)

    if(respostaEscolhida == certa){
        pontos += 10
    } else {

    }

//atualizar placar
placar =  pontos
instrucoes.textContent = "Pontos " + placar

//bloquear a escolha de opções
bloquearAlternativas()

setTimeout(function(){
    proxima = numeroDaQuestao+1
    if(proxima > totalDeQuestoes){
        console.log('FIM DO JOGO!')
        fimDoJogo()
    } else {
        proximaQuestao(proxima)
    }
 }, 250)
  desbloquearAlternativas()

}

function fimDoJogo(){
    instrucoes.textContent = "Fim de jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont 

    a.textContent = " "
    b.textContent = " "
    c.textContent = " "

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    

    // ocultar o article da questão
    articleQuestoes.style.display = 'none'

    setTimeout(function(){
        pontos = 0 //zerar placar
        location.reload();
    }, 2000)
}