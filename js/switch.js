var d = new Date();
Dan = d.getDay();

function mojSwitch() {

    document.getElementById("0").innerHTML = ("<b>JavaScript -<mark> SWITCH </mark></b>")

    switch (Dan) {
        case 0:
            document.getElementById("1").innerHTML = ("Nedleja")
            break;
        case 1:
            document.getElementById("1").innerHTML = ("Ponedeljak")
            break;
        case 2:
            document.getElementById("1").innerHTML = ("Utorak")
            break;
        default:
            document.getElementById("1").innerHTML = ("Nijedan uslov nije ispunjen.")
    }

    document.getElementById("2").innerHTML = " ";
    document.getElementById("3").innerHTML = " ";
    document.getElementById("4").innerHTML = " ";
    document.getElementById("5").innerHTML = " ";
    document.getElementById("6").innerHTML = " ";
    document.getElementById("7").innerHTML = " ";
    document.getElementById("8").innerHTML = " ";
    document.getElementById("9").innerHTML = " ";
}