window.onload = init;

function init(){
    

}

function login(event){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let account = auth(email, password);
    if (account != null){
        event.preventDefault();


        alert("Bem vindo " + account.name);

        if (account.admin) window.location.href = "admin.html";
        else window.location.href = "perfil_cliente.html";
    }
    else alert("E-mail ou senha incorreta!");
}