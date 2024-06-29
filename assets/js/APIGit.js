document.addEventListener('DOMContentLoaded', () => {
    const users = ['gabiopires', 'VitorExl', 'KaykyAlmeida22'];
    const container = document.getElementById('users');

    users.forEach(user => {
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(data => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user-container');

                const userImage = document.createElement('img');
                userImage.src = data.avatar_url;
                userDiv.appendChild(userImage);

                const userName = document.createElement('h2');
                userName.textContent = data.name || 'Perfil sem nome.';
                userDiv.appendChild(userName);

                const userDescription = document.createElement('p');
                userDescription.textContent = data.bio || 'Sem descrição.';
                userDiv.appendChild(userDescription);

                const userFollowers = document.createElement('p');
                userFollowers.textContent = `Followers: ${data.followers}`;
                userDiv.appendChild(userFollowers);

                const userUrl = document.createElement('p');
                const userLink = document.createElement('a');
                userLink.href = data.html_url;
                userLink.target = '_blank';
                userLink.textContent = data.html_url;
                userUrl.appendChild(userLink);
                userDiv.appendChild(userUrl);

                container.appendChild(userDiv);
            })
            .catch(error => console.error('Erro ao buscar os dados do usuário:', error));
    });
});
