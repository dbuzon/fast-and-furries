window.onload = init;

function init(){
    refreshCart();

    let users = getAccounts()
    users.forEach(user => {
        addRow(user.id, user.name, user.cpf, user.email, user.admin)        
    });

         
}

function addRow(id, name, cpf, email, type) {
    const table = document.querySelector("[data-table]")

    let row = document.createElement("tr")
    let idNode = document.createElement("td")
    let nameNode = document.createElement("td")
    let cpfNode = document.createElement("td")
    let emailNode = document.createElement("td")
    let typeNode = document.createElement("td")
    let change = document.createElement("td") 

    idNode.innerHTML = "<p>" + id  + "</p>"
    row.appendChild(idNode)
    nameNode.innerHTML = "<p>" + name  + "</p>"
    row.appendChild(nameNode)
    cpfNode.innerHTML = "<p>" + cpf  + "</p>"
    row.appendChild(cpfNode)
    emailNode.innerHTML = "<p>" + email  + "</p>"
    row.appendChild(emailNode)
    
    if (type == true) typeNode.innerHTML = "<p id='user-type-" + id + "'>admin</p>"
    else typeNode.innerHTML = "<p id='user-type-" + id + "'>cliente</p>"        
    row.appendChild(typeNode)

    change.innerHTML = "<input onclick='changeType("+ id +")' data-btn type='submit' value='Mudar Tipo'>"
    row.appendChild(change)
    
    table.appendChild(row)
}

function changeType(id) {
    let user = document.getElementById("user-type-"+id)
    if (user.innerText == "admin") user.innerText = "cliente"
    else user.innerText = "admin"
}