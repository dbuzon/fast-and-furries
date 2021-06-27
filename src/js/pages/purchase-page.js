window.onload = init;

function init(){
    refreshCart();

    let sum = 0;
    let cart = getCart();
    cart.forEach(productCart => {

        let product = getProduct(productCart.id);
        sum += productCart.quantity * product.price;
    });

    document.getElementById('total-price').innerText = "Preço Total: R$ " + parseFloat(sum).toFixed(2);
}

function purchase(event){
    event.preventDefault();

    let cpf = document.getElementById("user-cpf" ).value.trim();
    let card_number = document.getElementById("user-card-number").value.trim();
    let card_secret = document.getElementById("user-card-secret").value.trim();
    let address = document.getElementById("user-address").value.trim();

    if (cpf.length == 0){
        alert('O campo \'CPF\' precisa ser preenchido');
        return;
    }
    if (card_number.length == 0){
        alert('O campo  \'Número do cartão\' precisa ser preenchido');
        return;
    }
    if (card_secret.length == 0){
        alert('O campo \'Código de segurança\' precisa ser preenchido');
        return;
    }
    if (address.length == 0){
        alert('O campo \'Endereço de entrega\' precisa ser preenchido');
        return;
    }

    alert("Cartão inválido!");
}