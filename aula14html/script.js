// function mostrarTexto(){
//     console.log("O texto apareceu")
// }

// var contagem = 0

// function mostrarContagem(){
//     contagem++
//     console.log(contagem);
// }
// setTimeout(mostrarTexto, 5000)

// var minhaContagem = setInterval(mostrarContagem, 1000)

// if(contagem >= 10){
//     clearInterval(minhaContagem)
// }


var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var textoSaudacao = document.getElementById('saudacaoTexto')

var diasSemana = ['DOMINGO','SEGUNDA-FEIRA','TERÇA-FEIRA','QUARTA-FEIRA','QUINTA-FEIRA','SEXTA-FEIRA','SÁBADO']
var dataAtual = ['00/00/0000']

var cumprimento = ''

var atualizaRelogio = setInterval(function() {
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual =dataAtual.getDay()

    if(horaAtual < 10)
        horaAtual = "0" + horaAtual

    if(minutoAtual < 10)
        minutoAtual = "0" + minutoAtual

    if(segundoAtual < 10)
        segundoAtual = "0" + segundoAtual

    cumprimento = trocaSaudacao(horaAtual)

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos .textContent = segundoAtual
    textoSaudacao.textContent =`${cumprimento} / ${diasSemana[diaAtual]}`
    textoSaudacao2.textContent =`${mesAtual} / ${anoAtual}`
})

function trocaSaudacao(hora){
   if(hora < 6)
       return 'Boa Madrugada'
   else if(hora < 12)
       return 'Bom dia'
   else if(hora < 18)
       return 'Boa tarde'
   else
       return 'Boa noite'
}

// function trocaSaudacao(Dia/Mês/Ano){
//     if(dia = 4)
//         return 'relógio'
//     else if(Mês = 09)
//         return 'relógio'
//     else if(Ano = 2024)
//         return 'relogio'
//  }
