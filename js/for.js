var prviBroj = 100;
var drugiBroj = 22;
var i = 0;

document.getElementById("for").innerHTML = ("<b>Java Script -<mark> FOR </mark></b>");


for (var i = 1; i <= 9; i++)
{
    // document.write("Upozorenje broj " + i)
    // document.write("Broj " + i + "<br>")
    document.getElementById("for0").innerHTML = "Prvi broj je " + prviBroj + ", a drugi broj je " + drugiBroj + "<br>";

    if (prviBroj < drugiBroj)
    {
        document.getElementById("for" + i).innerHTML = ("Broj " + prviBroj + " je manji od broja " + drugiBroj)
    }
    else {
        document.getElementById("for" + i).innerHTML = ("Broj " + prviBroj + " je veci od broja " + drugiBroj)
    }
}
