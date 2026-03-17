let cards = document.querySelectorAll(".card");
for (let card of cards) {

    card.addEventListener("click", function () {
        for (let c of cards) {
            c.classList.remove("ativo");
        }
        card.classList.add("ativo");
    })
    };

