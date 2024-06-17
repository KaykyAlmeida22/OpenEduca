let textoEmailProfessorEl = document.querySelector("#textoEmailProfessor");
let textoSenhaProfessorEl = document.querySelector("#textoSenhaProfessor");
let buttonEnviarEl = document.querySelector("#buttonEnviar");

function validarEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function validarSenha(senha){
    const re = /^[0-9a-zA-Z]{8,}$/;
    return re.test(senha);
}

function CriarEmail(emailProfessor, senhaProfessor){
    if(validarEmail(emailProfessor) == true && validarSenha(senhaProfessor) == true){

        //*********************************** */
        // Adiciona a conta no banco de dados
        //*********************************** */

    } else if (validarEmail(emailProfessor) == false){
        emailProfessor.style.backgroundcolor = "#FF0F0F";
        emailProfessor.innerHTML = 'Padrão de Email Inválido!';
        emailProfessor.setAttribute('style', 'border-color: red')
    } if (validarSenha(senhaProfessor) == false) {
        senhaProfessor.setAttribute('style', 'color: red');
        senhaProfessor.innerHTML = "Digite uma senha que possua ao menos 8 caracteres!";
        senhaProfessor.setAttribute('style', 'border-color: red')
    }
}

buttonEnviarEl.addEventListener("click", CriarEmail(textoEmailProfessorEl, textoSenhaProfessorEl));
