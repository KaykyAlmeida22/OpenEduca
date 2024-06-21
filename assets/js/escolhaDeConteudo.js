//**************************************************** */
//Comando onload que será inserido para gerar os cards
//**************************************************** */


let buttonFilterEl = document.querySelectorAll(".filtros");

buttonFilterEl.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle('filtroAtivo');
    })
});


// A função será adicionada a um FOREACH posteriormente
function criarCardsConteudoFunc(/* Parâmetros a serem adicionados */){
    let divCardMain = document.createElement("div");
    divCardMain.setAttribute("class","cardConteudo");
    //Adicionar append da div


    let divAppend = document.createElement("div");
    divAppend.setAttribute("class","styleCardBorderImg");
    divAppend.appendChild(divCardMain);
    //ESTA PARTE SERÁ ADAPTADA PARA A IMAGEM ALTERAR DE ACORDO COM O CURSO
    /*let imgCurso = document.createElement("img");
    imgCurso.setAttribute("class", "iconeCursoImagem");
    imgCurso.setAttribute("src", )*/


    let paragrafoNomeCurso = document.createElement("p");
    paragrafoNomeCurso.innerHTML = /*Parâmetro a ser passado*/ a;
    paragrafoNomeCurso.setAttribute("class","tituloCurso whiteText");
    paragrafoNomeCurso.appendChild(divCardMain);


    let sectionCardCurso = document.createElement("section");
    sectionCardCurso.setAttribute("class", "sectionCards");
    sectionCardCurso.appendChild(divCardMain);


    let imgIconUser = document.createElement("img");
    //imgIconUser.setAttribute("src", /*Adicionar a URL de Acordo com o curso*/ )
    imgIconUser.setAttribute("class", "iconeCardCurso");
    imgIconUser.appendChild(sectionCardCurso);

    
}