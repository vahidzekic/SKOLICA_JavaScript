var brojX = 9;
var brojY = 3;
var negativniBroj = -400;
var decimalniBroj = 4.7;
var ugao = 0;
var nizBrojeva = [5, -7, 3, 22, 15, -4, 300];

function mojaMatematika() {

    var brojPi = Math.PI;
    var zaokruzeno = Math.round(brojPi);
    var kvadratBroja = Math.pow(brojX, brojY);
    var korenBroja = Math.sqrt(brojX, brojY);
    var pozitivniBroj = Math.abs(negativniBroj);
    var zaokruziNaVecuVrednost = Math.ceil(decimalniBroj);
    var izvadiSamoCeoBroj = Math.floor(decimalniBroj);
    var sinus = Math.sin(ugao * brojPi / 180);
    var kosinus = Math.cos(ugao * brojPi / 180);
    var maxVrednost = Math.max(5, -7, 3, 22, 15, -4, 300);
    var minVrednost = Math.min(5, -7, 3, 22, 15, -4, 300);
    var randomBroj = Math.random();


    document.getElementById("0").innerHTML = "<b>JavaScript -<mark> MATEMATIKA</mark><b>"
    document.getElementById("1").innerHTML = "Broj Pi: " + brojPi;
    document.getElementById("2").innerHTML = "Zaokruzeni broj: " + zaokruzeno;
    document.getElementById("3").innerHTML = brojY + ". kvadrat broja " + brojX + " je: " + kvadratBroja;
    document.getElementById("4").innerHTML = brojY + ". koren broja " + brojX + " je: " + korenBroja;
    document.getElementById("5").innerHTML = "Pozitivni broj od negativnog broja " + negativniBroj + " je: " + pozitivniBroj;
    document.getElementById("6").innerHTML = "Zaokruzivanje na najvecu vrednost broja " + decimalniBroj + " je: " + zaokruziNaVecuVrednost;
    document.getElementById("7").innerHTML = "Decimalni broj " + decimalniBroj + " izgleda bez decimalnog sadrzaja ovako: " + izvadiSamoCeoBroj;
    document.getElementById("8").innerHTML = "Random broj: " + randomBroj;
    document.getElementById("9").innerHTML = " ";


}

// alert(Math.floor(randomBroj * 10));