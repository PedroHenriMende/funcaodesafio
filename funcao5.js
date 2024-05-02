console.clear();
var teclado = require("prompt-sync")();
var d = parseInt(teclado("Digite o Dia: "));
var m = parseInt(teclado("Digite o M\u00EAs: "));
var a = parseInt(teclado("Digite o Ano: "));
function dataA() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    if (dia == d && mes == m + 1 && ano == a) {
        console.log("Hoje \u00E9 ".concat(d, "/").concat(m, "/").concat(a));
    }
    else if (dia != d && mes == m++ && ano == a) {
        console.log("O dia n\u00E3o est\u00E1 atual ".concat(d, "/").concat(m, "/").concat(a));
    }
    else if (dia == d && mes != m++ && ano == a) {
        console.log("O M\u00EAs n\u00E3o est\u00E1 atual ".concat(d, "/").concat(m, "/").concat(a));
    }
    else if (dia == d && mes == m++ && ano != a) {
        console.log("O Ano n\u00E3o est\u00E1 atual ".concat(d, "/").concat(m, "/").concat(a));
    }
    else if (dia != d && mes != m++ && ano != a) {
        console.log("Nada Atual");
    }
}
function dataCorreta() {
    if (d >= 1 && d <= 31) {
        console.log("Dia \u00E9 V\u00E1lido");
    }
    else {
        console.log("Dia Inv\u00E1lido");
    }
    if (m >= 1 && m <= 12) {
        console.log("M\u00EAs \u00E9 V\u00E1lido");
    }
    else {
        console.log("M\u00EAs \u00E9 Inv\u00E1lido");
    }
    if (a >= 1980 && m <= 2024) {
        console.log("Ano \u00E9 V\u00E1lido");
    }
    else {
        console.log("Ano \u00E9 inv\u00E1lido");
    }
}
dataA();
dataCorreta();
