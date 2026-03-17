let input = document.querySelector("#inputTexto");
let botao = document.querySelector("#botaoAdd");
let lista = document.querySelector("#lista");

botao.addEventListener("click", function() {
    let texto = input.value.trim();

    if (texto === "") {
        alert("Digite algo antes!");
        return;
    }

    let item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);

    input.value = "";
})