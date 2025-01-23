//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function atualizarLista() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li")
        item.textContent = amigos[i]
        item.classList.add("amigo-item")
        lista.appendChild(item)
    }
}

function adicionarAmigo() {
    let input = document.getElementById("amigo")
    let nome = input.value

    if (nome) {
        amigos.push(nome)
        input.value = ""
        atualizarLista()
    } else {
        alert("Por favor, adicione o nome de um amigo")
    }
}




