function calcular() {
    let velocidadeInicial = Number(document.querySelector('input').value)
    let gravidade = 10
    let tempoTotal = velocidadeInicial/gravidade
    let alturaMaxima = (velocidadeInicial**2) / (2*gravidade)

    document.querySelector('#altura').innerHTML = alturaMaxima
    document.querySelector('#tempo').innerHTML = tempoTotal
}

function resetar() {
    document.querySelector('#altura').innerHTML = ''
    document.querySelector('#tempo').innerHTML = ''
    document.querySelector('input').value = ''
}