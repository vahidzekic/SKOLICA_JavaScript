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







// async function restApi() {
//     // Create a request variable and assign a new XMLHttpRequest object to it.
//     var request = new XMLHttpRequest()

//     // Open a new connection, using the GET request on the URL endpoint


//     const url = 'http://localhost:5000';

//     request.open('GET', url, true)

//     request.onload = function () {
//         // Begin accessing JSON data here
//     }

//     // Send request
//     request.send()

// }





// async function restApi() {
//     var response = await fetch('http://localhost:5000/get');
//     var myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//     var obj = []
//     var obj = JSON.parse(myJson);
//     alert(obj);
// }



// async function restApi() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             var response = xhttp.responseText;
//             console.log("ok" + response);
//         }
//     };
//     const url = 'http://localhost:5000';
//     xhttp.open("GET", url, true);

//     xhttp.send();
// }



    // const Http = new XMLHttpRequest();
    // const url='http://localhost:5000/get';
    // Http.open("GET", url);
    // Http.send();

    // Http.onreadystatechange = (e) => {
    //   console.log(Http.responseText)
    // }
// }


//     // Open a new connection, using the GET request on the URL endpoint
//     request.open('GET', 'http://localhost:5000/get', true)

//     request.onload = function () {
//         // Begin accessing JSON data here
//     }
// }

// // Send request
// request.send()





// // POST
// const userAction = async () => {
//     const response = await fetch('http://example.com/movies.json', {
//       method: 'POST',
//       body: myBody, // string or object
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//   }
