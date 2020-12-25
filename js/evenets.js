
function mojTestEventa() {
    var htmlPodatak1 = document.getElementById("ulazniPodatak1").value;
    var htmlPodatak2 = document.getElementById("ulazniPodatak2").value;

    const broj1 = parseInt(htmlPodatak1);
    const broj2 = parseInt(htmlPodatak2);
 


    const izlaz = broj1 + broj2;
    alert(izlaz);

    document.getElementById("izlazniPodatak").innerHTML = izlaz;

}



