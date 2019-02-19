var boton1 = document.getElementById("calcularIva")
boton1.onclick = function calcularIva(){
    var valorB = document.getElementById("valorB").value;
    var valorI = document.getElementById("valorI").value;
    var resultado = document.getElementById("valorT");
    resultado.innerHTML = (((parseInt(valorB)*parseInt(valorI))/100)+parseInt(valorB));
};

var boton2 = document.getElementById("leerCadena")

boton2.onclick = function leerCadena(){
    var cad = document.getElementById("cad1");
    var numChars = document.getElementById("numChars");
    var invCad = document.getElementById("invCad");
    var invCadMayus = document.getElementById("invCadMayus");

    function test(){
        var x = cad.value.length;
        var cadInver ="";
        while (x>=0){
            cadInver = cadInver+cad.value.charAt(x);
            xs--;
        }
        return cadInver;
    }

    numChars.innerHTML =  cad.value.length;
    invCad.innerHTML = test();
};