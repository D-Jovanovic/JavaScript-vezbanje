function resetKalendara() {
    document.getElementById("title").innerText = "";
    document.getElementById("dani").innerHTML = "";
}

function popuniKalendar(godina, mesec) {
    resetKalendara();

    let imenaMeseci = [
        "januar", "februar", "mart", "april",
        "maj", "jun", "jul", "avgust", "septembar",
        "oktobar", "novembar", "decembar"
    ];

    let imeIzabranogMeseca = imenaMeseci [mesec - 1];
    let title = imeIzabranogMeseca + " " + godina;
    document.getElementById("title").innerText = title;

    //pronalazenje prvog dana u mesecu
    let prvi = new Date(godina, mesec-1, 1);
    //poslednji dan u prethodnom mesecu
    let kraj = new Date(godina, mesec, 0);

    //dan u nedelji pocetka
    let danUNP = prvi.getDay();
    if (danUNP === 0){
        danUNP = 7;
    }

    //dan u nedelji pocslednji
    let danUNK = kraj.getDay();
    if (danUNK === 0) {
        danUNK = 7;
    }

    let brojDana = kraj.getDate();

    let dani = [];
    for (let i = 1; i<danUNP; i++){
        dani.push(""); //dani koji postoje pre prvog dana kojeg ispisujem
    }

    //popunjava dane u mesecu
    for (let dan = 1; dan <=brojDana; dan++){
        dani.push(dan);
    }

    //dani od narednog meseca
    for (let i = danUNK; i < 7; i++){
        dani.push("");
    }

    let nedelje = [];

    //popunjavanje nedelja
    while(dani.length > 0) {
        let narednaNedelja = dani.splice(0, 7);
        nedelje.push(narednaNedelja);
    }

    popuniTeloKalendara(nedelje);
}

function popuniTeloKalendara(nedelje){
    for (let nedelja of nedelje){
        let red = document.createElement("tr");

        for(let dan of nedelja){
            let td = document.createElement("td");
            td.innerText = dan;
            red.appendChild(td);  
        }

        document.getElementById("dani").appendChild(red);
    }

}

    

window.addEventListener("load", main);

function main() {
    let sada = new Date();

    popuniKalendar(sada.getFullYear(), sada.getMonth()+1);
}