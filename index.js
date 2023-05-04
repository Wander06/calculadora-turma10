var historico = []

function primeiroNumeroHistorico() {
    var displaySecundario = document.getElementById("displaySecundario");
    var tituloHistorico = document.getElementById("tituloHistorico");

    if (historico) {
        displaySecundario.innerHTML = historico[0];
    }
    if (historico == "") {
        displaySecundario.innerHTML = "Não há nada no histórico...";
        tituloHistorico.innerHTML = "Não há nada no histórico...";
    }
}

function ultimoNumeroHistorico() {
    var displaySecundario = document.getElementById("displaySecundario");
    var tituloHistorico = document.getElementById("tituloHistorico")

    if (historico) {
        displaySecundario.innerHTML = historico[historico.length - 1]
    }
    if (historico == "") {
        displaySecundario.innerHTML = "Não há nada no histórico...";
        tituloHistorico.innerHTML = "Não há nada no histórico...";
    }
}

function todoHistorico() {
    var displaySecundario = document.getElementById("displaySecundario");
    var textoHistorico = document.getElementById("textoHistorico");
    var divHistorico = document.getElementById("historico");
    var tituloHistorico = document.getElementById("tituloHistorico")

    divHistorico.classList.add("historico");

    if (historico) {
        tituloHistorico.innerHTML = "Histórico"
        textoHistorico.innerHTML = historico;
    }
    if (historico == "") {
        displaySecundario.innerHTML = "Não há nada no histórico...";
    }

}

function ocultarHistorico(){
    var divHistorico = document.getElementById("historico");
    var tituloHistorico = document.getElementById("tituloHistorico")
    var textoHistorico = document.getElementById("textoHistorico");

    divHistorico.classList.remove("historico");
    tituloHistorico.innerHTML = "";
    textoHistorico.innerHTML = "";
}

function limparHistorico() {
    var displaySecundario = document.getElementById("displaySecundario");
    var tituloHistorico = document.getElementById("tituloHistorico");
    historico = [];
    displaySecundario.innerHTML = "Histórico limpo";
    tituloHistorico.innerHTML = "Histórico limpo";
}

function inserirNumero(numero) {
    var display = document.getElementById("input");
    if (numero == 'abre') {
        display.value = display.value + "(";
    }
    else if (numero == 'fecha') {
        display.value = display.value + ")";
    }
    else if (numero) {
        display.value = display.value + numero;
    }
    limparDisplaySecundario();
    ocultarHistorico();
}

function numeroPrimo() {
    var display = document.getElementById("input");
    var displaySecundario = document.getElementById("displaySecundario");

    if (display.value == 2 || display.value == 3 || display.value == 5 || display.value == 7) {
        displaySecundario.innerHTML = "Primo";
    }
    else if (display.value % 2 >= 1 && display.value % 3 >= 1 && display.value % 5 >= 1 && display.value % 7 >= 1) {
        displaySecundario.innerHTML = "Primo";
    }
    else {
        displaySecundario.innerHTML = "Não é primo";
    }

    ocultarHistorico();
}

function raiz() {
    var display = document.getElementById("input");

    display.value = Math.sqrt(display.value);
    console.log(display);
    ocultarHistorico();
}

function trocaSinal() {
    var display = document.getElementById("input");
    if (display.value > 0) {
        display.value = "-" + display.value;
    }
    else if (display.value < 0) {
        display.value = display.value * -1;
    }
    ocultarHistorico();
}

var arrayPorcentagem = [];

function porcentagem() {
    var display = document.getElementById("input");
    arrayPorcentagem.push(display.value);
    display.value = '';
    console.log(arrayPorcentagem);
    ocultarHistorico();
}
function limpar() {
    var display = document.getElementById("input");
    display.value = "";

    limparDisplaySecundario();
    arrayPorcentagem = [];
    ocultarHistorico();
}

function limparDisplaySecundario() {
    var displaySecundario = document.getElementById("displaySecundario");

    displaySecundario.innerHTML = "";
}

function apagarUltimoNumero() {
    var display = document.getElementById("input");
    display.value = display.value.slice(0, -1);
    ocultarHistorico();
}

function resultado() {
    var display = document.getElementById("input");
    var displaySecundario = document.getElementById("displaySecundario");
    arrayPorcentagem.push(display.value);

    if (arrayPorcentagem[1]) {
        display.value = (Number(arrayPorcentagem[0]) * Number(arrayPorcentagem[1])) / 100;
    }

    display.value = eval(display.value);

    if(display.value == "undefined"){
        displaySecundario.innerHTML = "Digite um número por favor!";
        display.value = "";
    }

    historico.push(display.value);
    arrayPorcentagem = [];
    ocultarHistorico();
}