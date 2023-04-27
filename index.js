function inserirNumero(numero){
    var display = document.getElementById("input")
    if(numero){
        display.value = display.value + numero
        console.log(numero)
    }
}

function numeroPrimo(){
    var display = document.getElementById("input").value;

    if(display == 2){
        alert("É primo")
    }
    if(display == )
}

function raiz(){
    var display = document.getElementById("input");

    display.value = "√" + Math.sqrt(display.value)
    console.log(display)
}

function limpar(){
    var display = document.getElementById("input")
    display.value = ""
}

function resultado(){
    var display = document.getElementById("input")
    display.value = eval(display.value)
}