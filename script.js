const form = document.getElementById("form-login");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    mensagem.innerHTML = "";

    // validação de campos vazios
    if (email === "" || senha === "") {
        mensagem.innerHTML = `
            <div class="alert alert-danger">
                Preencha todos os campos!
            </div>
        `;
        return;
    }

    // validação de login
    if (email !== usuarioCorreto || senha !== senhaCorreta) {
        mensagem.innerHTML = `
            <div class="alert alert-danger">
                Usuário ou senha incorretos!
            </div>
        `;
        return;
    }

    // sucesso
    mensagem.innerHTML = `
        <div class="alert alert-success">
            Login realizado com sucesso!
        </div>
    `;

    // redirecionamento
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
});