var boton1 = document.getElementById("calcularIva")
boton1.onclick = function calcularIva() {
    var valorB = document.getElementById("valorB").value;
    var valorI = document.getElementById("valorI").value;
    var resultado = document.getElementById("valorT");
    resultado.innerHTML = (((parseInt(valorB) * parseInt(valorI)) / 100) + parseInt(valorB));
};





