document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const nome = document.getElementById('name').value.trim();
        const telefone = document.getElementById('number').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('message').value.trim();

        // --- Validações ---
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
});
