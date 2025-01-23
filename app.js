//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    let input = document.getElementById("amigo")
    let nome = input.value

    if (nome) {
        amigos.push(nome)
        input.value = ""
        console.log(amigos)
    } else {
        alert("Por favor, adicione o nome de um amigo")
    }
}
