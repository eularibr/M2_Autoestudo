function troca() {
    let valor1 = document.getElementById("opcao1").value;
    let valor2 = document.getElementById("opcao2").value;
    document.getElementById("opcao1").value = valor2;
    document.getElementById("opcao2").value = valor1;

}