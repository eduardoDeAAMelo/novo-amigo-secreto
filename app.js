
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
    
    amigos.forEach(function (amigos){
        let lista = document.createElement("li");
        lista.innerHTML = amigos;
        listaDeAmigos.appendChild(lista);
    })

}


function limparCampo(){
    let nomesDosAmigos = document.querySelector("input");
    nomesDosAmigos.value = "";

}



function exibirNomesNaTela(){
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.style.backgroundColor =' #ffa096';
    listaDeAmigos.style.border = '1px solid #fc6757';
    listaDeAmigos.style.marginTop = '10px';
    listaDeAmigos.style.padding = '15px 30px';
    listaDeAmigos.innerHTML = "";
    atualizarLista();
    
}


function sortearAmigo(){
    let nomeSorteado = document.getElementById("resultado");
    let gerarSorteio = amigos[Math.floor(Math.random() * amigos.length)]
    nomeSorteado.innerHTML = `Seu amigo secreto é ${gerarSorteio} !`;
    let resultado = document.getElementById("resultado");
    resultado.style.backgroundColor = '#FFFF00';
    resultado.style.border = '1px solid rgb(73, 117, 55)';
    resultado.style.marginTop = '15px';
    resultado.style.padding = '15px 30px';
}
