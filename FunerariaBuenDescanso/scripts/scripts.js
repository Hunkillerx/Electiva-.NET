
var seleccion = document.getElementById("selectPlan")
var seleccion1 = document.getElementById("selectServ")
var id1 = document.getElementById("val1")
var id2 = document.getElementById("val2")
var id3 = document.getElementById("val3")
var id4 = document.getElementById("val4")
var id5 = document.getElementById("val5")
var id6 = document.getElementById("val6")
var id7 = document.getElementById("val7")
var id8 = document.getElementById("val8")
var id9 = document.getElementById("val9")
var id10 = document.getElementById("val10")
var tabla = document.getElementById("tabla")
function obtenerSubTotal(){
    parseInt(id1)
}
function seleccionarPlan() {
    if(seleccion.value == "bronce" && seleccion1.value == "1"){
        id1.textContent = "$1'500.000"
        id2.textContent = "$250.000"
        id3.textContent = "$50.000"
        id4.textContent = "$150.000"
        id5.textContent = "$150.000"
        id6.textContent = "$400.000"
        id7.textContent = "$2'000.000"
    }
}

