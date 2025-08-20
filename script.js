
let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({nome, preco});
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const total = document.getElementById("total-carrinho");
    lista.innerHTML = "";
    let soma = 0;
    carrinho.forEach((item, index) => {
        soma += item.preco;
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        const btn = document.createElement("button");
        btn.textContent = "Remover";
        btn.onclick = () => removerDoCarrinho(index);
        li.appendChild(btn);
        lista.appendChild(li);
    });
    total.textContent = soma.toFixed(2);
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}
