window.onload = init;

function init(){
    

}

function signup(event){
    event.preventDefault();

    let name = document.getElementById("user-name").value.trim();
    let cpf = document.getElementById("user-cpf" ).value.trim();
    let address = document.getElementById("user-address").value.trim();
    let email = document.getElementById("user-email").value.trim();
    let password = document.getElementById("user-password").value.trim();

    if (name.length == 0){
        alert('O campo Nome precisa ser preenchido');
        return;
    }
    if (cpf.length == 0){
        alert('O campo Cpf precisa ser preenchido');
        return;
    }
    if (address.length == 0){
        alert('O campo Endereço precisa ser preenchido');
        return;
    }
    if (email.length == 0){
        alert('O campo E-mail precisa ser preenchido');
        return;
    }
    if (password.length == 0){
        alert('O campo Senha precisa ser preenchido');
        return;
    }

    let account = getAccountByEmail(email);
    if (account == null){
        putAccounts(name, email, password, false, cpf, address);
        alert("Sua conta foi criada!");
        window.location.href = "perfil_cliente.html";
    }
    else alert("Já existe uma conta cadastrada com esse e-mail.");
}