var brojIf = 45;

function mojIfElseifElse() {

    document.getElementById("0").innerHTML = ("<b>JavaScript -<mark> IF ... ELSE IF ... ELSE</mark><b>");
    if (brojIf < 6) {
        document.getElementById("1").innerHTML = ("Broj " + brojIf + " je manji od 6")
    }
    else if (brojIf < 10) {
        document.getElementById("1").innerHTML = ("Broj " + brojIf + " je manji od 10")
    }
    else if (brojIf < 20) {
        document.getElementById("1").innerHTML = ("Broj " + brojIf + " je manji od 20")
    }
    else if (brojIf < 30) {
        document.getElementById("1").innerHTML = ("Broj " + brojIf + " je manji od 30")
    }
    else {
        document.getElementById("1").innerHTML = ("Broj " + brojIf + " je veci od 30")
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