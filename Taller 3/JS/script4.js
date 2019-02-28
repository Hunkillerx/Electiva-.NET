var val1 = document.getElementById("val1")
var val2 = document.getElementById("val2")
var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")
var btnMenor = document.getElementById("btnMenor")
var btnMayor = document.getElementById("btnMayor")
var btnArray = document.getElementById("btnArray")
var btnArraySum = document.getElementById("btnSumArray")

function obtenerCadena(val1, val2) {
    val1 = parseInt(val1.value)
    val2 = parseInt(val2.value)
    var array = new Array();
    for (i = 0; val1 <= val2; i++) {
        array[i] = val1
        val1++
    }
    return array
}

function getArraySum(array) {
    var x = 0
    for (i = 0; i <= array.length; i++) {
        x += i
    }
    return x
}

Array.min = function (array) {
    return Math.min.apply(Math, array);
};
Array.max = function (array) {
    return Math.max.apply(Math, array);
}
btnMenor.onclick = function getMenor() {
    var array = obtenerCadena(val1, val2);
    var minimo = Array.min(array);
    a.innerHTML = minimo
}
btnMayor.onclick = function getMayor() {
    var array = obtenerCadena(val1, val2);
    var maximo = Array.max(array);
    b.innerHTML = maximo
}
btnArray.onclick = function getArray() {
    var array = obtenerCadena(val1, val2);
    c.innerHTML = array
}
btnArraySum.onclick = function getArraySum2() {
    var array = obtenerCadena(val1, val2);
    d.innerHTML = getArraySum(array)
}