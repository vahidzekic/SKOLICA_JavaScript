var datumObjekat = new Date();

var sati = datumObjekat.getHours();
var minuti = datumObjekat.getMinutes();
var sekunde = datumObjekat.getSeconds();

var vreme = "Tacno je " + sati + " casova " + minuti + " minuta i " + sekunde + " sekundi."

document.getElementById("333").innerHTML = vreme;




var noviDatum = new Date();

var srpskoVreme = noviDatum.getDate() + "." + noviDatum.getMonth() + "." + noviDatum.getFullYear() + ".";
var engleskoVreme = noviDatum.getFullYear() + "/" + noviDatum.getMonth() + "/" + noviDatum.getDate();

document.getElementById("vremeSr").innerHTML = srpskoVreme;
document.getElementById("vremeEn").innerHTML = engleskoVreme;