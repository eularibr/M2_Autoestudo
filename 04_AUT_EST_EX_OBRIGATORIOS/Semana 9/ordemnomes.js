function calc() {
    let nomes = (document.querySelector('#ex3 input').value).split(" ")
    nomes.sort()
    document.querySelector("#ex3 p").innerHTML = `Nomes em ordem alfabética: ${nomes[0]}, ${nomes[1]}, ${nomes[2]}`
}