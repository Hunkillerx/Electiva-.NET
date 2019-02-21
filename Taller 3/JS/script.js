var boton1 = document.getElementById("calcularIva")
boton1.onclick = function calcularIva() {
    var valorB = document.getElementById("valorB").value;
    var valorI = document.getElementById("valorI").value;
    var resultado = document.getElementById("valorT");
    resultado.innerHTML = (((parseInt(valorB) * parseInt(valorI)) / 100) + parseInt(valorB));
};

var boton2 = document.getElementById("leerCadena")

boton2.onclick = function leerCadena() {
    var cad = document.getElementById("cad1");
    var numChars = document.getElementById("numChars");
    var invCad = document.getElementById("invCad");
    var cadMayus = document.getElementById("cadMayus");

    function leerCadenaInvertida() {
        var x = cad.value.length;
        var cadInver = "";
        while (x >= 0) {
            cadInver = cadInver + cad.value.charAt(x);
            x--;
        }
        return cadInver;
    }

    numChars.innerHTML = cad.value.length;
    invCad.innerHTML = test();
    cadMayus.innerHTML = cad.value.toUpperCase();

};

boton3 = document.getElementById("cuadra");

boton3.onclick = function darCuadratica() {
    var a = parseInt(document.getElementById("numb1").value);
    var b = parseInt(document.getElementById("numb2").value);
    var c = parseInt(document.getElementById("numb3").value);
    var result = document.getElementById("resultCuadra");

    function calcularCuadraPos(a, b, c) {
        var resultadoPositivo = ((parseInt(-b) + Math.sqrt(Math.pow(parseInt(b), 2) - (4 * parseInt(a) * parseInt(c)))) / (2 * parseInt(a)))
        return resultadoPositivo
    }
    function calcularCuadraNeg(a, b, c) {
        var resultadoNegativo = ((parseInt(-b) - Math.sqrt(Math.pow(parseInt(b), 2) - (4 * parseInt(a) * parseInt(c)))) / (2 * parseInt(a)))
        return resultadoNegativo
    }
    result.innerHTML = "El resultado positivo es "+calcularCuadraPos(a,b,c).toString() +" y el resultado negativo es " + calcularCuadraNeg(a,b,c).toString();
};

