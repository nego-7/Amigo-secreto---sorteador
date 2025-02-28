//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        alert("por favor, insira um nome");
        return; 
    }

    amigos.push(amigo); 

    
    const listaAmigos = document.getElementById("listaAmigos");

    
    const itemLista = document.createElement("li");
    itemLista.textContent = amigo; 

   
    listaAmigos.appendChild(itemLista);

    
    document.getElementById("amigo").value = "";
}
   
   
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Não há amigos na lista. Adicione alguns nomes primeiro.");
        return;
    }

    
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    
    const amigoSorteado = amigos[0];

    // Exibe o resultado na lista de resultados
    const listaResultado = document.getElementById("resultado");
    const itemResultado = document.createElement("li");
    itemResultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
    listaResultado.appendChild(itemResultado);
}

