const frm = document.querySelector("form")
const imgAprovado = "<img src='image/aprovado.png' alt='Emoji Celebrando'>"
const imgReprovado = "<img src='image/reprovado.png' alt='Emoji Decepcionado'>"
const atividades = []
const notas = []
const spanAprovado = "<span class='resultado aprovado'>Aprovado</span>"
const spanReprovado = "<span class='resultado reprovado'>Reprovado</span>"
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = " "

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    adicionaLinha()  
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const nomeAtividade = document.getElementById("nome-atividade")
    const notaAtividade = document.getElementById("nota-atividade")

    if (atividades.includes(nomeAtividade.value)) {
        alert(`A atividade: ${notaAtividade.value} já foi inserida`)
    } else {
        atividades.push(nomeAtividade.value)
        notas.push(parseFloat(notaAtividade.value))
    }

    let linha = `<tr>`
    linha += `<td>${nomeAtividade.value}</td>`
    linha += `<td>${notaAtividade.value}</td>`
    linha += `<td>${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha

    nomeAtividade.value = ""
    notaAtividade.value = ""
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2)
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}