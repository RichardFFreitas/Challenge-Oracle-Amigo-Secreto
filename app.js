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
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada foi Enter
        adicionarAmigo(); // Chama a função para adicionar o amigo
    }});


function sortearAmigo() {
    let lista = document.getElementById("listaAmigos")
    if (amigos) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length)
        let amigoSelecionado = amigos[indiceAleatorio];
        let resultado = document.getElementById("resultado")
        lista.innerHTML = ""
        resultado.textContent = `Seu amigo secreto é: ${amigoSelecionado}`
    } else {
        alert("Não há amigos na lista para selecionar. ")
    }
}