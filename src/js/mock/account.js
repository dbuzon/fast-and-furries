var accounts = [];

function putAccounts(name, email, password, admin = false, cpf = null, address = null, phone = null){
    accounts.push(
        {
            id: accounts.length, 
            name: name, 
            email: email, 
            password: password,
            admin: admin,
            cpf: cpf,
            address: address,
            phone: phone
        }
    );
}

function getAccounts(n = accounts.length){
    return accounts.slice(0, n);
}

function getAccountById(id){
    for(let i = 0;i < accounts.length;i++){
        if (accounts[i].id == id) return accounts[i];
    }
    return null;
}

function getAccountByEmail(email){
    for(let i = 0;i < accounts.length;i++){
        if (accounts[i].email == email) return accounts[i];
    }
    return null;
}

function auth(email, password){
    for(i in accounts){
        if (accounts[i].email === email && accounts[i].password === password){
            return accounts[i];
        }
    }
    
    return null;
}


putAccounts('Administrador', 'admin', 'admin', true);
putAccounts('Usuário comum', 'user', 'user', false);
