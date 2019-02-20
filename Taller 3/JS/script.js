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
    var a = document.getElementById("numb1");
    var b = document.getElementById("numb2");
    document.g
    var c = document.getElementById("numb3");
    var result = document.getElementById("resultCuadra");

    function calcularCuadraPos(a, b, c) {
        var resultadoPositivo = ((-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a))
        return resultadoPositivo
    }
    function calcularCuadraNeg(a, b, c) {
        var resultadoNegativo = (((-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)))

        return resultadoNegativo
    }

    result.innerHTML = calcularCuadraPos(a, b, c) + calcularCuadraNeg(a,b,c);
};

