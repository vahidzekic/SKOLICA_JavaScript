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

    for(var i = 2; i < 9; i++){
        document.getElementById(i).innerHTML = " ";
    }
}