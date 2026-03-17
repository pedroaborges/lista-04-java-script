let botao1 = document.querySelector("#btn1");
let botao2 = document.querySelector("#btn2");
let contator = document.querySelector("#contador");
let valor = 0;

function atualizarTela() {
    contador.textContent = valor;
}

botao1.addEventListener("click", function() {
    valor++;
    atualizarTela();
})

botao2.addEventListener("click", function() {
    if(valor > 0) {
        valor--;
    }
    atualizarTela();
})