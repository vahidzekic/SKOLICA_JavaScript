objekatJson = [
    {
        "godine": 36,
        "id": 3,
        "ime": "Rama",
        "pol": "muski",
        "prezime": "Zekic"
    },
    {
        "godine": 36,
        "id": 3,
        "ime": "Jale",
        "pol": "muski",
        "prezime": "Jasko"
    },
    {
        "godine": 36,
        "id": 3,
        "ime": "Kabir",
        "pol": "muski",
        "prezime": "Beba"
    },
    {
        "godine": 36,
        "id": 4,
        "ime": "Kabir",
        "pol": "muski",
        "prezime": "Beba"
    },
    {
        "godine": 36,
        "id": 4,
        "ime": "Kabir",
        "pol": "muski",
        "prezime": "Beba"
    },
    {
        "godine": 36,
        "id": 4,
        "ime": "Kabir",
        "pol": "muski",
        "prezime": "Beba"
    },
    {
        "godine": 36,
        "id": 4,
        "ime": "Kabir",
        "pol": "muski",
        "prezime": "Beba"
    },
    {
        "godine": 36,
        "id": 4,
        "ime": "Kabir",
        "pol": "muski",
        "prezime": "Beba"
    }
]




async function restApiGet() {
    const zahtev = await fetch("http://localhost:5000/get")
    const odgovor = await zahtev.json();

    var brojElemenataJson = Object.keys(odgovor).length;

    document.getElementById("a").innerHTML = "Trenutno se nalazi " + brojElemenataJson + " elemenata u JOSN bazi.";

    // ispisuje podatke iz JSON objekata pokupljenog sa servera
    for (const clanovi in odgovor) {
        var clan = odgovor[clanovi].ime + " " + odgovor[clanovi].prezime + " Osoba ima " + odgovor[clanovi].godine + " godina.";
        document.getElementById(clanovi).innerHTML = clan;
    }

    // ispisuje podatke iz lokalnog JSON objekta
    // for (const clanovi in objekatJson) {
    //     var clan = objekatJson[clanovi].ime + " " + objekatJson[clanovi].prezime;
    //     document.getElementById(clanovi).innerHTML = clan;
    // }

}







async function restApiPost() {
    document.getElementById("0").innerHTML = "Ovo je post metoda."

    var inputIme = document.createElement("INPUT");
    inputIme.setAttribute("type", "text");
    document.getElementById("mojaForma").appendChild(inputIme);

    var inputPrezime = document.createElement("INPUT");
    inputPrezime.setAttribute("type", "text");
    document.getElementById("mojaForma").appendChild(inputPrezime);


}




