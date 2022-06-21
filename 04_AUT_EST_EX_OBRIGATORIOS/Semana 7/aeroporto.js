function contar(){
    var pessoas = document.getElementById('pessoas').value;
    var time = document.getElementById('time').value;
    var total = 0;
 
    if (time == "dia") {
        total = pessoas * 200;
        if (pessoas > 50) {
          total = total * 0.6;
        }
    }
 
    else{
        total = pessoas * 100;
        if (pessoas > 50) {
            total = total * 0.8;
        }
    }
      document.getElementById('total').innerHTML = total;
 }