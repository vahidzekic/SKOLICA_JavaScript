var broj1 = 2020;
var string1 = "Novi Pazar"
var boolean = true; // or false
var lista = ["prvi", 2, "TRECI", 4, 5, true]
var objekat = { ime: "Vahid", prezime: "Zekic", godina: 34, boja: "Crna"};

var niz = ["Rama", "Kavaz", "Rodjeni", "Waha"];

function tipoviPodatka() {
    document.getElementById("0").innerHTML = "<b>JavaScript -<mark> TIPOVI PODATAKA</mark><b>"
    document.getElementById("1").innerHTML = niz[2];
    document.getElementById("2").innerHTML = broj1 + " " + string1 + " " + boolean;
    document.getElementById("3").innerHTML = lista;
    for(var i = 4; i < 9; i++){
        document.getElementById(i).innerHTML = " ";
    }
}