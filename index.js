let botao = document.getElementById('botao-nav');
let botaoNav = document.getElementById('botao-nav');
let navM = document.getElementById('nav-mob');
let sombra = document.getElementById('sombra');

console.log(sombra);

function abrir() {
    if (navM.style.visibility == "visible") {
        navM.style.visibility = "hidden";
        sombra.style.visibility = "hidden";
    } else {
        navM.style.visibility = "visible";
        sombra.style.visibility = "visible";

    }
}