var accounts = [];

function putAccounts(name, email, password, cpf = null, endereco = null, telefone = null){
    accounts.push(
        {
            name: name, 
            email: email, 
            password: password,
            cpf: cpf,
            endereco: endereco,
            telefone: telefone
        }
    );
}

function getAccounts(n = accounts.length){
    return accounts.slice(0, n);
}

function auth(email, password){
    for(id in accounts){
        if (accounts[id].email === email && accounts[id].password === password){
            return true;
        }
    }
    
    return false;
}

console.log("========= Accounts =========");
putAccounts("fernando", "lincoln@gmail.com", "123456", "cpf qualquer", "endereço qualquer");
putAccounts("fernando", "lincoln@usp.com", "123456");

console.log(getAccounts())
console.log(auth("lincoln@gmail.com", "123456"));
console.log(auth("lincoln@gmail.com", "1234567"));