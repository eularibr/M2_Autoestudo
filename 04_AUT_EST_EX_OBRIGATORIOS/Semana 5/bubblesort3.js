function calcular() {
    var lista = document.getElementById("lista").value.split(",");

}


    var trocou = true;

    while(trocou) {
        trocou = false;
        for(let i=0 ; i<lista.lenght-1; i++) {
            if (lista[i]>lista[i+1]) {
                var tap = lista[i]
                lista[i] = lista[i+1]
                lista[i+1] = tap
                var trocou = true;
            }
        }
  
  
}
console.log(lista)
