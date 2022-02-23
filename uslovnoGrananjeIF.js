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
    let e = document.getElementById("imeNeko");

    e.addEventListener("keyup" , proveriIme);
}

function proveriIme() {
    let e = document.getElementById("imeNeko");
    let imee = e.value;

    let pretpostavka = "";

    if(imee.length < 3){
        pretpostavka = "Ime nije ispravno";
    }

    let porukaElement = document.getElementById("poruka1");
    porukaElement.innerText = pretpostavka;
}
// da li smem da imam dva window.addEventListener u dve razlicite skripte
window.addEventListener("load", init1);

//SWITCH

let nivoStudija = 4;

switch (nivoStudija) {
    case 1 :
        console.log("osnovne akademske studije");
        break;
    case 2 :
        console.log("master akademske studije");
        break;
    case 3 :
        console.log("doktorske akademske studije");
        break;
    case 4 :
        console.log("post doktorske studije");
        break;
    default :
        console.log("Nepoznat nivo");
}       

