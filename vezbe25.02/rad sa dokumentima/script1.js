window.addEventListener("load", main);

// izbacivalo ti je gresku, verovatno bez obzira sto su dva razlicita foldera imena za .html i .js moraju biti razlicita
function main() {
    let holder = document.getElementById("holder"); //pristup div elementu preko id-a

    holder.style.border = "2px solid #000"; //stavljamo nasem div elementu borduru

    holder.style.minHeight = "250px"; //ukoliko je prazan min je 250

    holder.innerText = "ovo je neki tekst"; // doslovno definise ukucani tekst

    holder.innerHTML = "ovo je <b>neki</b> drugi tekst";//zasto je ispisao samo drugi deo teksta, a prvi "ovo je neki tekst" nije

    //KREIRANJE ELEMENTA
    let naslov = document.createElement("h1");
    naslov.style.color = "#001188";
    naslov.style.borderBottom = "2px solid #001188";
    naslov.innerText = "Neki naslov";
    //NJEGOVO PRIKAZIVANJE 
    holder.appendChild(naslov);


    let paragraf1 = document.createElement("p");
    paragraf1.style.textAlign = "center";
    paragraf1.innerHTML = "Ovo je <u>prvi</u> paragraf";
    holder.appendChild(paragraf1);

    let paragraf2 = document.createElement("p");
    paragraf2.style.textAlign = "center";
    paragraf2.innerHTML = "Ovo je <u>drugi</u> paragraf";
    holder.appendChild(paragraf2);

    let paragraf3 = document.createElement("p");
    paragraf3.style.textAlign = "center";
    paragraf3.innerHTML = "Ovo je <u>treci</u> paragraf";
    holder.appendChild(paragraf3);

    let dugme = document.createElement("button");
    dugme.innerText = "Selektuj drugi paragraf";
    dugme.addEventListener("click", dugmeKlik);
    holder.appendChild(dugme);

    let dugmeRemove = document.createElement("button");
    dugmeRemove.innerText = "Obrisi";
    dugmeRemove.addEventListener("click", removeKlik);
    holder.appendChild(dugmeRemove);
}

function dugmeKlik() {
    let holder = document.getElementById("holder");

    let paragrafi = holder.querySelectorAll("p"); //selektujem sve paragrafe u holderu

    let drugiParagraf = paragrafi[1];
    drugiParagraf.style.color = "red";

    /*
    Moze i ovako...
    document.querySelectorAll("#holder > p")[1].style.color = "red"
    */
}

// GRESKA !!!!!!!!!!!!! Kako da pristupim paragrafima u listi paragrafi
function removeKlik() {
    let holder = document.getElementById("holder");
    let paragrafi = holder.querySelectorAll("p");

    
    // za svaku promenljivu paragraf iz liste paragraf
    for (let paragraf of paragrafi) {
        
        holder.removeChild(paragraf); //bila greska ne trebaju navodnici
    }

}

