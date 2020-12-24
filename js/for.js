var prviBroj = 100;
var drugiBroj = 22;
var i = 0;

function mojFor() {

    document.getElementById("0").innerHTML = ("<b>Java Script -<mark> FOR </mark></b>");


    for(var j = 1; j <= 9; j++)
    {

        for (var i = 1; i <= 9; i++) {
            // document.write("Upozorenje broj " + i)
            // document.write("Broj " + i + "<br>")
            document.getElementById(i).innerHTML = "Prvi broj je " + prviBroj + ", a drugi broj je " + drugiBroj + "<br>";
    
            if (prviBroj < drugiBroj) {
                document.getElementById(i).innerHTML = ("Broj " + prviBroj + " je manji od broja " + drugiBroj)
            }
            else {
                document.getElementById(i).innerHTML = ("Broj " + prviBroj + " je veci od broja " + drugiBroj)
            }
        }
    
        document.getElementById(j).innerHTML = " ";
    }
}