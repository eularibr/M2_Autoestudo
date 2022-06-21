var valor
var preco = 5
var resultado = 0

function save() {
    console.log("está salvo")
    valor = Number(document.getElementById("valor").value);
    console.log(valor)
    document.getElementById("qtd").innerHTML = valor
    resultado = valor*preco
    document.getElementById("custo").innerHTML = resultado
}

function mais() {
    valor += 1
    document.getElementById("qtd").innerHTML = valor
    document.getElementById("valor").value = valor
    resultado += 5 
    document.getElementById("custo").innerHTML = resultado
}


function menos() {
    valor -= 1
    document.getElementById("qtd").innerHTML = valor
    document.getElementById("valor").value = valor
    resultado -= 5
    document.getElementById("custo").innerHTML = resultado
}

