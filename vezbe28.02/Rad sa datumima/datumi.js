window.addEventListener("load", main);

function main() {

    let datumKaoTekst = "2022-02-28"; //godina - mesec - dan (u suprotnom invalid date)
    let datum = new Date(datumKaoTekst);
    console.log(datum);
    console.log(datum.getMonth()); //meseci krecu sa indeksom 0
    console.log(datum.getFullYear());
    console.log(datum.getDay()); // vrednosti od 0 do 6 za dane u nedelji pocev od nedelje
    
    let datumIVreme = "2022-02-28T09:12:15Z" // T je razgranicenje izmedju datuma i vremena, a Z je UTC univerzalno vreme
    // let datumIVreme = "2022-02-28T09:12:15+02:00" koliko sati i minuta pomereno (2 sata, 0 minuta)
    let datum1 = new Date(datumIVreme);
    console.log(datum1.getHours());

    
    let datum2 = new Date();
    console.log(datum2.getHours());
    console.log(datum2.getMinutes());
    console.log(datum2.getTime());// koliko je milisekundi proslo od 1. januara?
    console.log(datum2.getTime() / 1000); // koliko je sekundi proslo?

    let datum3 = new Date("2022-02-28T09:12:15Z");
    datum3.setFullYear(2020);
    console.log(datum3);
}