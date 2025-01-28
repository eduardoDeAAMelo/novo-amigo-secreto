
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

// fazendo essa função
let listaDeAmigos = document.querySelector("ul");


function atualizarLista(){
    
    amigos.forEach(function (y){
        let lista = document.createElement("li");
        lista.innerHTML = y;
        listaDeAmigos.appendChild(lista);
    })

}


function limparCampo(){
    let nomesDosAmigos = document.querySelector("input");
    nomesDosAmigos.value = "";

}



function exibirNomesNaTela(){
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";
    atualizarLista();
    
}


function sortearAmigo(){
    let nomeSorteado = document.getElementById("resultado");
    let gerarSorteio = amigos[Math.floor(Math.random() * amigos.length)]
    if(gerarSorteio == ""){
        alert("Não foi encontrado nenhum nome!")
    }
    nomeSorteado.innerHTML = `Seu amigo secreto é ${gerarSorteio}`;

    
}
