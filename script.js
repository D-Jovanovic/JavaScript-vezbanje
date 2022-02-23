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