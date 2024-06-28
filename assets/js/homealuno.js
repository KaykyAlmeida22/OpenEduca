
if (localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa pagina");
    window.location.href = "../../index.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá Aluno ${userLogado.nome}`;

function sair(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../../index.html";
}