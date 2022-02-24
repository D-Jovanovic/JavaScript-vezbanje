window.addEventListener("load", main);

function main() {
    console.log(sumaDvaBroja(13, 7));
    console.log(sumaDvaBroja1(13));
    console.log(sumaBrojeva(2, 3, 4, 6, 77));
    console.log(sumaBrojeva1(23, 2, 11));
    console.log(brojeviSuma(1, 1, 1));
    console.log(neamPojma(1, 1, 1));
    console.log(zbirDvaBroja(2, 3));
    console.log(minDvaBroja(2, 4));

    let a = [1, 2, 3];
    fun1(a);
    console.log(a); //rezultat je niz 1 2 3

    let b = [1, 2, 3];
    fun2(b);
    console.log(b); //rez 1 2 3 4

    let c = {
        ime: "Damjan",
        prezime:  "Jovanovic"
    };

    fun3(c);
    console.log(c);
    //REFERENCA NA FUNKCIJU KAO ARGUMENT FUNKCIJE
    //negde u memoriji se stvara objekat struktura
    let struktura = {
        rezultat: 1,
        koraci: 0
    }

            //1. referenca ka funA 2. referenca ka strukturi 3.prosledjuje se vrednsot
    delegat(funA, struktura, 7); // koraci = 1, rezultat = 8
    delegat(funB, struktura, 2); // koraci = 2, rezultat = 6
    delegat(funA, struktura, 4); // koraci = 3, rezultat = 10

    console.log(struktura);
}

function sumaDvaBroja(prviBroj, drugiBroj) {
    let suma = prviBroj + drugiBroj;
    return suma;

    //moze i ovako:
    //return prviBroj + drugiBroj;
}
                                //moze se setovati podrazumevana vrednost
function sumaDvaBroja1(prviBroj, drugiBroj = 0) {
    let suma = prviBroj + drugiBroj;
    return suma;
}

function sumaBrojeva() {
    // arguments
    console.log("Vrednosti su: " , arguments);
    /* specijalni objekat unutar pozvane funkcije
    imena arguments i unutar njega nalaze se svi elementi koji su prosledjeni na parametre te funkcije cak i ako funkcija nema ni jedan parametar
    */
}

function sumaBrojeva1() {
    let suma = 0;

    for (let broj of arguments){
        suma += broj;
    }

    return suma;
}
        //funkcija nema ime
let brojeviSuma = function(){
    let suma = 0;

    for (let b of arguments){
        suma += b;
    }

    return suma;

}; //mora ;

let neamPojma = brojeviSuma;


/*
let zbirDvaBroja = function(br1 = 0, br2 = 0) {
    return br1 + br2;
}
*/

// arow notacija, moze samo kada funkcija odma radi return
let zbirDvaBroja = (br1 = 0, br2 = 0) => br1 + br2;

let minDvaBroja = (a, b) => {
    if (a < b){
        return a;
    }else{
        return b;
    }
};

//prosledjivanje vrednosti funkcijama
function fun1(a) {
    a = "test"; //dodela vrednosti
}

function fun2(b) {
    b.push(4);
}

function fun3(c) {
    c.ime = "DAMJAN";
}

function funA(a, b){
    a.rezultat += b;
}

function funB(a, b){
    a.rezultat -= b;
}

function delegat(nekaFunkcija, a, b){
    a.koraci += 1;
    nekaFunkcija(a, b);
}

