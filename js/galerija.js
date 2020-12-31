var galerijaNaslov = "<b>Galerija"

var mojDiv = document.createElement("DIV");
mojDiv.setAttribute("style", "background-color: white;");

var fotografija1 = document.createElement("IMG");
fotografija1.setAttribute("src", "img/html5.png");
fotografija1.setAttribute("width", "200");
fotografija1.setAttribute("height", "200");
fotografija1.setAttribute("alt", "Fotografija nije ucitana.");

var fotografija2 = document.createElement("IMG");
fotografija2.setAttribute("src", "img/python.png");
fotografija2.setAttribute("width", "200");
fotografija2.setAttribute("height", "200");
fotografija2.setAttribute("alt", "Fotografija nije ucitana.");

function mojaGalerija() {
    document.getElementById("0").innerHTML = galerijaNaslov;
    
    for(var i = 1; i < 9; i++){
        document.getElementById(i).innerHTML = " ";
    }


    mojDiv.appendChild(fotografija1);
    mojDiv.appendChild(fotografija2);

    document.body.appendChild(mojDiv);

}



