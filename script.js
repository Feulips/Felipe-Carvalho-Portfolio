document.addEventListener('DOMContentLoaded', function () {
    // --- Validação do Formulário ---
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const nome = document.getElementById('name').value.trim();
        const telefone = document.getElementById('number').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('message').value.trim();

        if (nome.length < 10) {
            alert("O nome precisa ter pelo menos 10 caracteres!");
            event.preventDefault();
            return;
        }

        if (mensagem.length < 10) {
            alert("A mensagem precisa ter pelo menos 10 caracteres!");
            event.preventDefault();
            return;
        }

        if ((telefone.length !== 10 && telefone.length !== 11) || isNaN(telefone)) {
            alert("O telefone precisa ter 10 ou 11 números!");
            event.preventDefault();
            return;
        }

        if (!email.includes("@") || !email.includes(".com")) {
            alert("Digite um email válido!");
            event.preventDefault();
            return;
        }

        // Salvar localmente (opcional)
        localStorage.setItem('nome', nome);
        localStorage.setItem('telefone', telefone);
        localStorage.setItem('email', email);
        localStorage.setItem('mensagem', mensagem);
    });

    // --- Menu Hamburguer ---
    const hamburger = document.querySelector('.hamburger');
    const menuDesktop = document.querySelector('.menu-desktop');

    hamburger.addEventListener('click', () => {
        menuDesktop.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // --- Interatividade das Skills ---
    const skills = document.querySelectorAll('.skill');
    const descricao = document.createElement('div');
    descricao.classList.add('descricao-skill');
    descricao.innerHTML = '<p>Clique em uma especialidade para saber mais.</p>';
    document.querySelector('#section-especialidades').appendChild(descricao);

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            const nomeSkill = skill.querySelector('p').textContent;
            let texto = '';

            switch (nomeSkill.toLowerCase()) {
                case 'html':
                    texto = 'HTML é a base da estrutura de qualquer site. Domino a criação de layouts semânticos, acessíveis e otimizados.';
                    break;
                case 'css':
                    texto = 'CSS dá estilo e identidade aos projetos. Tenho experiência com Flexbox, Grid e design responsivo.';
                    break;
                case 'javascript':
                    texto = 'JavaScript adiciona interatividade. Trabalho com manipulação do DOM, animações e integração com APIs.';
                    break;
                case 'php':
                    texto = 'PHP é a linguagem de back-end que utilizo para lidar com lógica de servidor, formulários e banco de dados.';
                    break;
                case 'sql':
                    texto = 'SQL é essencial para bancos de dados relacionais. Tenho experiência com MySQL e modelagem de dados.';
                    break;
            }

            descricao.innerHTML = `<p><strong>${nomeSkill}</strong>: ${texto}</p>`;
        });
    });
});