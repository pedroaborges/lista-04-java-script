let btn1 = document.querySelector("#btn1");
let bloco = document.querySelector(".bloco");

btn1.addEventListener("click", function(){
    bloco.classList.toggle("ativo");
});