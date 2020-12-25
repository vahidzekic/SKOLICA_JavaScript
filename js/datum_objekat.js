var datumObjekat = new Date();

var sati = datumObjekat.getHours();
var minuti = datumObjekat.getMinutes();
var sekunde = datumObjekat.getSeconds();

var vreme = "Tacno je " + sati + " casova " + minuti + " minuta i " + sekunde + " sekundi."

document.getElementById("333").innerHTML = vreme;


// alert(vreme);
