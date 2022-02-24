//RAD SA NIZOVIMA
let niz = [3, 12, 44, 23, 1, 43, 33, 9.22, "neki string"];
let noviNiz = ["D", "a", "m", "j", "a", "n"]

let niz1 = [1, 2, 3];
let niz2 = [4, 5, 6];
let niz3 = [7, 8, 9];

let opetNekiNiz = [2, 32, 44, 45, 12, 96, 21];

console.log(niz);
console.log(niz[7]); //ispisuje vrednost na indeksu 7
console.log(niz.length); //daje duzinu niza
console.log(niz[niz.length - 1]); // poslednji element u nizu

//**dodavanje na kraj niza**//
niz.push('novi element'); // dodaje novi element na kraj niza
console.log(niz);

//**uzimanje poslednjeg elementa**//
niz.pop(); // uzima poslednji element iz niza i izdvaja ga
console.log(niz);
let izbacenaVrednost = niz.pop();
console.log(izbacenaVrednost);

//dodavanje elementa na prvu poziciju
niz.unshift('x'); //dodavanje na prvu poziciju
console.log(niz);
//uklananje prvog po redu elementa
let izbacenPrviElement = niz.shift(niz);
console.log(izbacenPrviElement);

//pronaci poziciju nekog elementa u nizu (njegovo prvo pominanje)
let pronadjeniIndex = niz.indexOf(1); //indexOf poredi === (i tip i vrednost) 
console.log(pronadjeniIndex);

//uklananje odredjenog broja elemenata
let nizIzbacenihElemenata = niz.splice(4, 3); //prva vrednost je index sa kojeg pocinje uklananje, a druga vrednost broj elemenata koliko elemenata iz niza treba ukloniti 
console.log(niz);
console.log(nizIzbacenihElemenata);

//dodavanje elemenata negde unutar niza
niz.splice(2, 0, "a", "b"); //pocev od indexa 2 ukloni 0 elemenata, a zatim od indexa 2 dodaj elemente a i b
console.log(niz);

//dodavanje svih elemenata jednog niza na kraj drugog
niz = niz.concat(noviNiz);
console.log(niz);

//spajanje vise nizova
let nekiNoviNiz = niz1.concat(niz2, niz3);
console.log(nekiNoviNiz);

//uzimanje vrednosti iz niza
let podNiz = nekiNoviNiz.slice(2, 7); //od indexa 2 ukljucujuci i njega do indexa 7 ali ne i vrednost na indexu 7
console.log(podNiz); // potpuno novi niz

//pretvaranje niza u string
let tekst = opetNekiNiz.toString();
console.log(tekst);

let tekst1 = opetNekiNiz.join(" | "); // uzima string koji ce se naci izmedju elemenata
console.log(tekst1);

