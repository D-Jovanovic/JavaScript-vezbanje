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