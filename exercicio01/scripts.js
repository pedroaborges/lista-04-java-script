let titulo1 = document.querySelector("#titulo1");
let paragrafo1 = document.querySelector("#paragrafo1");
let btn1 = document.querySelector("#button1");
let mudou = false;

btn1.onclick = function(){
    if(!mudou){
        titulo1.textContent = "TROQUEI";
        paragrafo1.textContent = "TROCANDO";
        mudou = true;
    } else {
        titulo1.textContent = "IFTM";
        paragrafo1.textContent = "CAMPUS ITUIUTABA";
        mudou = false;
    }
    
}

