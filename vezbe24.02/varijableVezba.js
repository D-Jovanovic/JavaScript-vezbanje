function test() {
    let  mojeIme= "Damjan"; // vredsnot sa mojeIme = Damjan dostupna je samo u okviru test()

    console.log(mojeIme);

}

let mojeIme = "Neko drugo ime"; 

test();
console.log(mojeIme); // uzima globalno dostupno promenljivu mojeIme sa vrednoscu Neko drugo ime

function test1() {
    let broj = 42;

    if (broj < 100) {
        let broj = 24; //24 dostupno samo unutar bloka {}
    }

    console.log(broj); //rez 42
    /*da je broj definisan kao var rezultat bi bio 24
    promenljive sa var, ako u nekom bloku koda napravim istu takvu
    promenljivu(istog imena, a dodelim joj neku drugu vrednost)
    promenljiva sa var uzima poslednju vrednost
    */
}

test1();

/*
function test2() {
    let br = 33; 

    if (br < 100) {
        var br = 16; // GRESKA! ne moze se redefinisati promenljiva broj jer je vec napravljena
    }

    console.log(br);

}

test2();
*/

function test3() {
    var br1 = 11; 

    if (br1 < 100) {
        let br1 = 32;
    }

    console.log(br1); // rez je globalno dostupna var br1 11;
                    // let br1 = 32 dostupna samo u if bloku

}

test3();

function test4() {
    var br2 = 22;

    if (br2 < 100) {
        console.log(br2); // ispisuje 22 nasu globalno dostupno promenljivu i da je definisana sa let isti bi rezultat dobio
    }

}

test4();

// const ne moze da se menja
function test5() {
    const br3 = 66; // jednom definisana kao 66 ostaje zauvek 66       

    if (br3 < 100) {
        br3 = 33; //GRESKA! ; da je definisano sa let unutar ifa rez bi bio 33, a da je sa var izbacilo bi gresku
        console.log(broj);
    }
}

test5();
