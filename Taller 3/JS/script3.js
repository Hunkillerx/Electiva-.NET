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