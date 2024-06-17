//**************************************************** */
//Comando onload que será inserido para gerar os cards
//**************************************************** */


let buttonFilterEl = document.querySelectorAll(".filtros");
console.log(buttonFilterEl);

buttonFilterEl.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle('filtroAtivo');
    })
});
