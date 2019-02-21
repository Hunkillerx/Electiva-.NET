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
    invCad.innerHTML = leerCadenaInvertida();
    cadMayus.innerHTML = cad.value.toUpperCase();

};