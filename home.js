document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("token") == null) {
        alert("Você precisa estar logado para acessar essa pagina");
        window.location.href = "../../index.html";
    }

    let userLogado = JSON.parse(localStorage.getItem("userLogado"));
    let logado = document.querySelector("#logado");
    logado.innerHTML = `Olá, ${userLogado.nome}!`;

    document.getElementById("logout-button").addEventListener("click", sair);
    document.getElementById("search-button").addEventListener("click", searchContent);
    document.querySelectorAll(".show-courses").forEach(element => {
        element.addEventListener("click", showCourses);
    });
    document.querySelectorAll(".tab-item").forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            showTab(element.getAttribute("href").substring(1));
        });
    });
    document.querySelectorAll(".card").forEach(element => {
        element.addEventListener("click", function() {
            showTab(element.getAttribute("data-tab"));
        });
    });

    document.querySelectorAll(".video-item").forEach(item => {
        item.addEventListener("click", function() {
            expandVideo(item);
        });
    });

    function sair() {
        localStorage.removeItem("token");
        localStorage.removeItem("userLogado");
        window.location.href = "../../index.html";
    }

    function showTab(tabId) {
        document.querySelectorAll('.bg-box').forEach(box => {
            box.style.display = 'none';
        });
        document.getElementById('courses-cards').style.display = 'none';
        document.getElementById(tabId).style.display = 'block';
    }

    function searchContent() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        let tabId = searchInput.toLowerCase();

        if (tabId === 'ia' || tabId === 'inteligencia artificial' || tabId === 'gpt') {
            tabId = 'chatgpt';
        }

        if (document.getElementById(tabId)) {
            showTab(tabId);
        } else {
            alert('Conteúdo não encontrado');
        }
    }

    function showCourses() {
        document.querySelectorAll('.bg-box').forEach(box => {
            box.style.display = 'none';
        });
        document.getElementById('courses-cards').style.display = 'flex';
    }

    function expandVideo(item) {
        document.querySelectorAll('.video-item').forEach(video => {
            video.classList.remove('expanded');
            video.querySelector('.overlay').style.display = 'block';
        });
        item.classList.add('expanded');
        item.querySelector('.overlay').style.display = 'none';
    }
});
