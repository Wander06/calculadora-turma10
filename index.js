function inserirNumero(numero){
    var display = document.getElementById("input")
    if(numero){
        display.value = display.value + numero
        console.log(numero)
    }
}

function numeroPrimo(){
    
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