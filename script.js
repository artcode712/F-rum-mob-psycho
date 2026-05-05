let form = document.getElementById('form-login');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let nome = document.getElementById("nome").value;
        let senha = document.getElementById("senha").value;

        if (nome === "admin" && senha === "1234") {
            window.location.href = "home.html";
        } else {
            alert("Usuário ou senha incorretos");
        }
    });
}

    // envio de mensagens do bate-papo na aba de conversas
   function sendMessage() {
    
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");

    if (!input || !chatBox) return;

    if (input.value.trim() === "") return;

    const message = document.createElement("p");
    message.innerHTML = `<strong>@Você</strong> - ${input.value}`;

    chatBox.appendChild(message);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}