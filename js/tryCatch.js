var brojX = 39;

function mojTry() {

    document.getElementById("0").innerHTML = ("<b>JavaScript -<mark> TRY CATCH </mark></b>")

    try {
        if (brojX < 6) {
            document.getElementById("1").innerHTML = ("Broj " + brojX + " je manji od 6")
        }
        else if (brojX < 10) {
            document.getElementById("1").innerHTML = ("Broj " + brojX + " je manji od 10")
        }
        else if (brojX < 20) {
            document.getElementById("1").innerHTML = ("Broj " + brojX + " je manji od 20")
        }
        else if (brojX < 30) {
            document.getElementById("1").innerHTML = ("Broj " + brojX + " je manji od 30")
        }
        else {
            document.getElementById("1").innerHTML = ("Broj " + brojX + " je veci od 30")
        }

    }
    catch (greska) {
        document.getElementById("1").innerHTML = ("Greska na liniji: " + greska.lineNumber + "<br>");
        document.getElementById("2").innerHTML = (greska.message + "<br>");
        document.getElementById("3").innerHTML = (greska.stack);
        document.getElementById("4").innerHTML = " ";
        document.getElementById("5").innerHTML = " ";
        document.getElementById("6").innerHTML = " ";
        document.getElementById("7").innerHTML = " ";
        document.getElementById("8").innerHTML = " ";
        document.getElementById("9").innerHTML = " ";

        // alert(greska.lineNumber + greska.message + greska.stack);

        console.log(greska.lineNumber);
        console.log(greska.message);
        console.log(greska.stack);
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