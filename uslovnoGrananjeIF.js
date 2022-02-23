let vrednost = 0;

if (vrednost == true) {
    console.log("SLucaj 1");
} else {
    console.log("SLucaj 2");
}

let broj = 1203;

if (broj >= 1000 && broj <= 4000) {
    console.log("Broj ispravan");
} else {
    console.log("Broj nije ispravan");
}


// nesto ne radiiii !!!!!!!!!!!!!!!!!!!
function init1() {
    let e = document.getElementById("ime");

    e.addEventListener("keyup" , proveriIme);
}

function proveriIme() {
    let e = document.getElementById("ime");
    let imee = e.value;

    let pretpostavka = "";

    if(imee.length < 3){
        pretpostavka = "Ime nije ispravno";
    }

    let porukaElement = document.getElementById("poruka1");
    porukaElement.innerText = pretpostavka;
}

window.addEventListener("load", init1);