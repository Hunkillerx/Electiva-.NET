
var seleccion = document.getElementById("selectPlan")
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
var checks = document.getElementsByName("checks")

function darSubtotal(v1, v2, v3, v4, v5, v6, v7) {
    a1 = parseInt(v1.value)
    a2 = parseInt(v2.value)
    a3 = parseInt(v3.value)
    a4 = parseInt(v4.value)
    a5 = parseInt(v5.value)
    a6 = parseInt(v6.value)
    a7 = parseInt(v7.value)
    return a1 + a2 + a3 + a4 + a5 + a6 + a7
}
function darDescuento(a1) {
    return ((a1 * 5) / 100)
}
function darTotal(a1, a2) {
    return parseInt(a1) - parseInt(a2)
}
function seleccionarPlan() {
    if (seleccion.value == "bronce" && checks[0].checked) {
        id1.value = "1500000"
        id2.value = "250000"
        id3.value = "50000"
        id4.value = "150000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "2000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    } else if (seleccion.value == "bronce" && checks[1].checked) {
        id1.value = "1500000"
        id2.value = "250000"
        id3.value = "50000"
        id4.value = "150000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "3000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    } else if (seleccion.value == "bronce" && checks[2].checked) {
        id1.value = "1500000"
        id2.value = "250000"
        id3.value = "50000"
        id4.value = "150000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "4000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    } else if (seleccion.value == "plata" && checks[0].checked) {
        id1.value = "2500000"
        id2.value = "350000"
        id3.value = "100000"
        id4.value = "300000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "2000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    } else if (seleccion.value == "plata" && checks[1].checked) {
        id1.value = "2500000"
        id2.value = "350000"
        id3.value = "100000"
        id4.value = "300000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "3000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    }else if (seleccion.value == "plata" && checks[2].checked) {
        id1.value = "2500000"
        id2.value = "350000"
        id3.value = "100000"
        id4.value = "300000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "4000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    }else if (seleccion.value == "oro" && checks[0].checked) {
        id1.value = "4000000"
        id2.value = "650000"
        id3.value = "2500000"
        id4.value = "4500000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "2000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    }else if (seleccion.value == "oro" && checks[1].checked) {
        id1.value = "4000000"
        id2.value = "650000"
        id3.value = "2500000"
        id4.value = "4500000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "3000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    }else if (seleccion.value == "oro" && checks[2].checked) {
        id1.value = "4000000"
        id2.value = "650000"
        id3.value = "2500000"
        id4.value = "4500000"
        id5.value = "150000"
        id6.value = "400000"
        id7.value = "4000000"
        id8.value = darSubtotal(id1, id2, id3, id4, id5, id6, id7)
        id9.value = darDescuento(id8.value)
        id10.value = darTotal(id8.value, id9.value)
    }
}

