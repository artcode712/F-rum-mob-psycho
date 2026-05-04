let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valido = true;

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if (nome.trim() === "") {
        alert('Campo usuário vazio');
        valido = false
    }

    if (senha.trim() === "") {
        alert('Campo senha vazio');
        valido = false
    }

    if (nome.trim() === 'admin') {
        valido = true
    } else {
        alert('Usuário incorreto');
        valido = false
    }

    if (senha.trim() === '1234') {
        valido = true
    } else {
        alert('Senha incorreta');
        valido = false
    }

    if (valido) {
        window.location.href = "home.html";
    }


    // envio de mensagens do bate-papo na aba de conversas
    function sendMessage() {

        const input = document.getElementById("messageInput");
        const chatBox = document.getElementById("chatBox");

        if (!input || !chatBox) {
            console.log("Erro: elementos não encontrados");
            return;
        }

        if (input.value.trim() === "") return;

        const message = document.createElement("p");

        message.innerHTML = `<strong>@Você</strong> - ${input.value}`;

        chatBox.appendChild(message);

        input.value = "";

        chatBox.scrollTop = chatBox.scrollHeight;
    }