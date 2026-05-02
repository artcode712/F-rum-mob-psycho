
const form = document.getElementById("form-login");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    mensagem.innerHTML = "";

    if (usuario === "" || senha === "") {
        mensagem.innerHTML = `<div class="alert alert-danger">Preencha todos os campos!</div>`;
        return;
    }

    if (usuario !== usuarioCorreto || senha !== senhaCorreta) {
        mensagem.innerHTML = `<div class="alert alert-danger">Usuário ou senha incorretos!</div>`;
        return;
    }

    mensagem.innerHTML = `<div class="alert alert-success">Login realizado com sucesso!</div>`;

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
});