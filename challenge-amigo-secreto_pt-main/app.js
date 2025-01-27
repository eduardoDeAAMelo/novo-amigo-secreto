let amigos = [];

function adicionarAmigo(){
    
    let nomesDosAmigos = document.getElementById("amigo").value;
        if(nomesDosAmigos == ""){
            alert("Por favor, insira um nome");

    } else {
        amigos.push(nomesDosAmigos);
        exibirNomesNaTela();
        limparCampo();
    }
    
}

function limparCampo(){
    nomesDosAmigos = document.querySelector("input");
    nomesDosAmigos.value = "";

}


function exibirNomesNaTela(){
    exibirNomes = document.getElementById("listaAmigos");
    exibirNomes.innerHTML = amigos;
    
}

function sortearAmigo(){
    let nomeSorteado = document.getElementById("resultado");
    let gerarSorteio = amigos[Math.floor(Math.random() * amigos.length)]

            alert(`O nome sorteado foi ${gerarSorteio}!`)

        nomeSorteado.innerHTML = gerarSorteio;
}
