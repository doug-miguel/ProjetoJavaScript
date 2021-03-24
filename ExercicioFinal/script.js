let num = document.querySelector('#deate') //pegando o input de entradad
let lista = document.querySelector('#incluir') // descarregar na lista
let res = document.querySelector('#res') // restante
let valores = [] // vetor

function isNumero(n) { // função para determinar de 1 ate 100
    if (Number (n) >= 1 && Number (n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, lista) { // função parar comparar se o numero é o mesmo
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() { //função parar inicar  a carregar lista e vetor
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //adicionar ao vetor
        let item = document.createElement('option') // criar item para ir para ir pra lista
        item.text = `Valor ${num.value} foi adicionado.` //oque vai ser escrito no select
        lista.appendChild(item) // adiconar a lista
        res.innerHTML = '' // zerar p button finalizar
    } else {
        alert ('[ERRO] Valor invalido ou já cadastrado')
    }
    num.value = '' // apagar namber após ser digitado
    num.focus() // cursor voltar para caixa do input
}

function gerar() { // função para tratar o finalizar
    if (valores.length <= 0) { // validar o button de finalizar se tem algo ou ñ
        alert ('Não temos informações o suficiente')
    } else {
        let total = valores.length //var parar contar quantos vetores
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores) { // comparar o valores com a var pos
            soma += valores[pos]
            if (valores [pos] > maior)
                maior = valores[pos] // se o valor for maior q pos o pos vira o maior
            if (valores [pos] < menor)
                menor = valores[pos] // se o valor for o menor q o pos o pos vira menor

        }
        media = soma / total
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>` //imprimir na tela
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores é ${media}.</p>`
    }
}