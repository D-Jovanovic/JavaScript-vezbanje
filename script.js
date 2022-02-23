//FUNKCIJA ZA PRVI PRIMER
function promeniParagraf() {
    let paragraf = document.getElementById("paragraf-1");

    paragraf.innerText = "Neki novi tekst";
    paragraf.style.color = "#DC0202";

    if (paragraf.style.fontSize !== "30pt") {
        paragraf.style.fontSize = "30pt";
    } else {
        paragraf.style.fontSize = "15pt";
    }
}

//FUNKCIJA ZA DRUGI PRIMER
function setujVrednost(indeks) {
    let poruke = ["Poruak 1" , "Neka poruka 2", "Kraj"];
    let poruka = document.getElementById("poruka");
    let tekst = poruke[indeks - 1];

    if (tekst === undefined){
        tekst = "Ne postoji poruka"
    }

    poruka.innerText = tekst;
}
//TRECI PRIMER
// ucitavanje funkcije automatski kada se stranica ucita
function izracunaj() {
    let a = document.getElementById("input_a");
    let b = document.getElementById("input_b");

    let vrednostA = Number(a.value); //konvertovanje teksta u broj
    let vrednostB = Number(b.value);
    let rezultat = vrednostA + vrednostB;

    document.getElementById("rezultat").innerText = rezultat;
}

function init() {
    let a = document.getElementById("input_a");
    let b = document.getElementById("input_b");

    a.addEventListener("change", izracunaj);
    b.addEventListener("change", izracunaj);
}

window.addEventListener("load", init);