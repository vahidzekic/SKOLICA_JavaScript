var i = 1;

function mojWhile() {

    document.getElementById("0").innerHTML = "<b>JavaScript -<mark> WHILE </mark><b>"

    while (i <= 8) {
        // document.write("ponavljanje broj " + i + "<br>");
        document.getElementById(i).innerHTML = "ponavljanje broj " + i + "<br>";
        i++;
    }

    // document.getElementById("2").innerHTML = " ";
    // document.getElementById("3").innerHTML = " ";
    // document.getElementById("4").innerHTML = " ";
    // document.getElementById("5").innerHTML = " ";
    // document.getElementById("6").innerHTML = " ";
    // document.getElementById("7").innerHTML = " ";
    // document.getElementById("8").innerHTML = " ";
    document.getElementById("9").innerHTML = " ";
}