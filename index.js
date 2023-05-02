var historico = []

function verHistorico(){
    var primo = document.getElementById("primo");
    console.log(historico)
    primo.innerHTML = historico[historico.length - 1]
}


function inserirNumero(numero){
    var display = document.getElementById("input")
    if(numero){
        display.value = display.value + numero
        console.log(numero)
    }
    limparPrimo()
}

function numeroPrimo(){
    var display = document.getElementById("input");
    var primo = document.getElementById("primo");

    if(display.value == 2 || display.value == 3 || display.value == 5 || display.value == 7){
        primo.innerHTML = "Primo"
    }
    else if(display.value % 2 >= 1 && display.value % 3 >= 1 && display.value % 5 >= 1 && display.value % 7 >= 1 ){
        primo.innerHTML = "Primo"
    }
    else{
        primo.innerHTML = "Não é primo"
    }
    
}

function limparPrimo(){
    var primo = document.getElementById("primo");

    primo.innerHTML = ""
}


function raiz(){
    var display = document.getElementById("input");

    display.value = Math.sqrt(display.value)
    console.log(display)
}

function limpar(){
    var display = document.getElementById("input")
    display.value = ""

    limparPrimo()
}

function resultado(){
    var display = document.getElementById("input")
    display.value = eval(display.value)

    historico.push(display.value)
}