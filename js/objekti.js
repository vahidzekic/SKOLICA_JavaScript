
var broj = 16;
var string = "Kavaz";                                               
var objekat = { ime: "Vahid", prezime: "Zekic", godine: "34" };

// DEFINISHEMO OBJEKTE

var osoba1 = {
    ime: "Vahid",
    prezime: "Zekic",
    godine: 34,
    bojaOciju: "braon"
}

var osoba2 = {
    ime: "Ahmed",
    prezime: "Kavazovic",
    godina: 26,
    bojaOciju: "braon"
};

var auto = {
    godiste: "1999",
    sedishta: "5",
    vozaca: "2",
    boja: "plava"
}


var greska = {
    lineNumber: "18",
    message: "document.fhaudhsfud is not a function",
    stack: "@file:///Users/vahid/Desktop/SKOLICA/JavaScript/JS_Ahmed_Kavazovic/js/tryCatch.js:18:18"
}

var mojeIme = objekat.ime + " " + objekat.prezime;
var mojeGodine = objekat.godine;
var greskaStack = greska.stack;
var greskaMessage = greska.message;

document.getElementById("objekat0").innerHTML = "<b>JavaScript -<mark> OBJEKTI </mark>";

document.getElementById("objekat1").innerHTML = objekat.ime + " " + objekat.prezime;
document.getElementById("objekat2").innerHTML = mojeIme + mojeGodine;
document.getElementById("objekat3").innerHTML = osoba1.ime + " " + osoba1.prezime + " ima " + osoba1.godina + " godina i ima " + osoba1.bojaOciju + " boju ociju.";
document.getElementById("objekat4").innerHTML = osoba2.ime + " " + osoba2.prezime + " ima " + osoba2.godina + " godina i ima " + osoba2.bojaOciju + " boju ociju.";




