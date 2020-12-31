var datumObjekat = new Date();

var sati = datumObjekat.getHours();
var minuti = datumObjekat.getMinutes();
var sekunde = datumObjekat.getSeconds();

var vreme = "Tacno je " + sati + " casova " + minuti + " minuta i " + sekunde + " sekundi."

var noviDatum = new Date();
var srpskoVreme = noviDatum.getDate() + "." + noviDatum.getMonth() + "." + noviDatum.getFullYear() + ".";
var engleskoVreme = noviDatum.getFullYear() + "/" + noviDatum.getMonth() + "/" + noviDatum.getDate();


function datumObjekatFn() {
    document.getElementById("0").innerHTML = ("<b>JavaScript -<mark> Datum Objekat </mark></b>")
    document.getElementById("1").innerHTML = vreme;
    document.getElementById("2").innerHTML = srpskoVreme;
    document.getElementById("3").innerHTML = engleskoVreme;
    document.getElementById("4").innerHTML = " ";
    document.getElementById("5").innerHTML = " ";
    document.getElementById("6").innerHTML = " ";
    document.getElementById("7").innerHTML = " ";
    document.getElementById("8").innerHTML = " ";
    document.getElementById("9").innerHTML = " ";
}