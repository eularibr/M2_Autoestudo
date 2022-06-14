window.onload = function() {
    setTimeout("acess()",1000);
 }
 
 function acess() {
 
     decision = confirm("Deseja realmente excluir o servidor cadastrado abaixo?");
 
     if (decision) {
         // window.location.replace("fin.del.cad.php");
     } else {
         // history.back();
     }
     
 }
 var clicado = false
 function escuro() {
     if(clicado === false) {
        //  $("p, h2, h1").css("color", "rgb(201, 218, 255");
         $("#main").css("background-color", "rgb(42, 59, 97)");
         $("#main p, #main li").css("color", "white");
        clicado = true;
     }
     else{
        // $("p, h2, h1").css("color", "black");
        $("#main").css("background-color", "rgb(201, 218, 255");
        $("#main p, #main li").css("color", "rgb(42, 59, 97)");
        clicado = false;
     }
 }