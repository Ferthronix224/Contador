let contador = 0

const valor = document.getElementById("num")
const btnIncrementar = document.getElementById("incremento")
const btnDecrementar = document.getElementById("decremento")
const btnResetear = document.getElementById("reseteo")

btnIncrementar.onclick = function(){
    contador++
    valor.innerHTML = contador
}

btnDecrementar.onclick = function(){
    contador--
    valor.innerHTML = contador
}

btnResetear.onclick = function(){
    valor.innerHTML = 0
}