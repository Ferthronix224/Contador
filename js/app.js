function incrementar(){
    numero = document.getElementById("num");
    numero = parseInt(numero, 10);
    numero += 1;
    document.getElementById("num").innerHTML = numero.toString();
}