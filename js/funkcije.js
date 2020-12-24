var x = mojaFunkcija1(4, 3);

var osobaNova = {
  ime: "Vahid",
  prezime: "Zekic",
  godine: 34,
  bojaOciju: "braon"
}




document.getElementById("funkcija0").innerHTML = "<b>JavaScript -<mark> FUNKCIJE </mark>";
document.getElementById("funkcija1").innerHTML = "Zbir je " + x;

function mojaFunkcija1(a, b) {
  return a * b;
}

function mojaFunkcija2() {
  var x, text;

  x = document.getElementById("funkcija_input").value;

  if (x < 10) {
    text = "Broj " + x + " je manji od 10.";
  } else {
    text = "Broj " + x + " je veci od 10.";
  }
  document.getElementById("funkcija_rezultat").innerHTML = text;
}


function pocetna() {
  document.getElementById("0").innerHTML = " ";
  document.getElementById("1").innerHTML = " ";
  document.getElementById("2").innerHTML = " ";
  document.getElementById("3").innerHTML = " ";
  document.getElementById("4").innerHTML = " ";
  document.getElementById("5").innerHTML = " ";
  document.getElementById("6").innerHTML = " ";
  document.getElementById("7").innerHTML = " ";
  document.getElementById("8").innerHTML = " ";
  document.getElementById("9").innerHTML = " ";

}
