function check() {
    if (Number(document.getElementById('number').value)<0) {
        alert("O número tem que ser positivo")
    }
    else {
        let a = (document.getElementById('number').value)
        let i = 0
        let soma = 0
        while (i<a.length) {
            soma += Number(a[i]);
            i += 1
        }
        alert("A soma dos dígitos é: " + soma)
    }
}