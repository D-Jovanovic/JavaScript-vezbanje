let fax = "Univerzitet Educons";

fax = fax.toUpperCase(); // sva slova u velika slova
fax = fax.replace("UNIVERZITET", "UNIVESITY");

//fax = fax.substring(10); //uzima sve od 10-og karaktera pa na dalje

fax = fax.substring(0, 10); //uzima sveo od karaktera na indeksu 0 pa narednih 10 karaktera

fax = fax.trim(); //uklanja suvisne beline pre prvog i posle poslednjeg simbola

let slovo = fax[5]; // uzima slovo na indeksu 5

console.log(fax);
console.log(slovo);

let drugoSLovo = 'U';

let indeksSlovaU = fax.indexOf(drugoSLovo);

console.log(indeksSlovaU); // prvo pojavljivanje slova u

let duzinaTeksta = fax.length;

console.log(duzinaTeksta);

if (duzinaTeksta < 6) {
        console.log("Tekst nije ispravan");
} else {
        console.log("Tekst je ispravan");
}
