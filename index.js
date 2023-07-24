let botao = document.getElementById('botao-nav');
let botaoNav = document.getElementById('botao-nav');
let navM = document.getElementById('nav-mob');

function abrir(){
    if(navM.style.visibility == "visible"){
        navM.style.visibility = "hidden";
    }else{
        navM.style.visibility = "visible";
    }
}