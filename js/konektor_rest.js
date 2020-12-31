// REST API konekcija GET
async function restApiGet() {
    const zahtev = await fetch('http://localhost:5000/get');
    const odgovor = await zahtev.json();

    var ink = Object.keys(odgovor).length;

    for (const clanovi in odgovor)
    {
        var clan = odgovor[clanovi].ime + " " + odgovor[clanovi].prezime;
        document.getElementById(clanovi).innerHTML = clan;
        console.log(clanovi + ". " + clan);
    }
    document.getElementById(ink).innerHTML = " ";
    document.getElementById(ink + 1).innerHTML = " ";
    document.getElementById(ink + 2).innerHTML = " ";
    document.getElementById(ink + 3).innerHTML = " ";
    document.getElementById(ink + 4).innerHTML = " ";
    document.getElementById(ink + 5).innerHTML = " ";
    document.getElementById(ink + 6).innerHTML = " ";
    document.getElementById(ink + 7).innerHTML = " ";
    document.getElementById(ink + 8).innerHTML = " ";

    
}
