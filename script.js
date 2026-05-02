let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if(nome.trim() === ""){
        alert('Campo usuário vazio');
        valido = false
    }

    if(senha.trim() === ""){
        alert('Campo senha vazio');
        valido = false
    }

    if(nome.trim() === 'admin'){
        valido = true
    }else{
       alert('Usuário incorreto');
        valido = false
    }

    if(senha.trim() === '1234'){
        valido = true
    }else{
       alert('Senha incorreta');
        valido = false
    }

    if(valido){
        window.location.href = "home.html";
    }