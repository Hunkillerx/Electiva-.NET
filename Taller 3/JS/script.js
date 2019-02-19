function calcularIva(){
    var valorB = document.getElementById("valorB").value.parseInt;
    var valorI = document.getElementById("valorI").value.parseInt;
    var resultado = document.getElementById("valorT")
    resultado.innerHTML = ((parseInt(valorB)*parseInt(valorI)/100)+parseInt(valorB));
}
