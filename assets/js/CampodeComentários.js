const InputName = document.getElementById('InputName');
const InputText = document.getElementById('InputText');
const form = document.getElementById('formulario');
const commentpost = document.getElementById('commentPost');


form.addEventListener('submit', (event) => {
        event.preventDefault();

        let p = document.createElement('p');
        p.classList = 'p-2 d-flex text-wrap flex-wrap';
        p.innerHTML = `<strong>${InputName.value}: </strong> &nbsp ${InputText.value}`;
        commentpost.appendChild(p);
        InputName.value = '';
        InputText.value = '';
        InputName.focus();

    });