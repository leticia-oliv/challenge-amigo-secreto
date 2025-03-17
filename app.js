// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo ao array
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    // Verifica se o nome não está vazio e não está repetido na lista
    if (nome === '') {
        alert('Por favor, digite um nome!');
    } else if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
    } else {
        amigos.push(nome);
        nomeInput.value = ''; // Limpa o campo de input
        nomeInput.focus(); // Foca no campo de input novamente
        atualizarLista(); // Atualiza a lista de amigos na tela
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; // Limpa a lista antes de atualizar

    // Adiciona cada amigo à lista HTML
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Função para sortear um único amigo secreto
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos na lista
    if (amigos.length < 2) {
        alert("Você precisa adicionar pelo menos 2 amigos para o sorteio!");
        return;
    }

    // Sorteia um amigo aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe a mensagem com o nome do amigo sorteado
    exibirSorteio(amigoSorteado);
}

// Função para exibir o resultado do sorteio na tela
function exibirSorteio(amigoSorteado) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Limpa os resultados antigos

    // Exibe o amigo sorteado
    const p = document.createElement('p');
    p.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultadoElement.appendChild(p);
}
