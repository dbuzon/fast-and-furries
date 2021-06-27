window.onload = init;

function init(){
    refreshCart();

    let table = document.getElementById('cart-table');
    table.innerHTML = "";

    let sum = 0;
    let cart = getCart();
    cart.forEach(productCart => {

        let product = getProduct(productCart.id);

        sum += productCart.quantity * product.price;
        
        let node = document.createElement('tr');
        node.innerHTML =  "<td class=\"image\"><img src=\"image/placeholder.jpg\" alt=\"product image\"></td>";
        node.innerHTML += "<td class=\"name\"><p>"+ product.name +"</p></td>";
        node.innerHTML += "<td class=\"qtd\"><p>"+productCart.quantity+" x</p></td>";
        node.innerHTML += "<td class=\"price\"><p>R$ "+ parseFloat(product.price).toFixed(2) +"</p></td>";
        node.innerHTML += "<td class=\"delete\"><p onclick=\"removeFromCart("+productCart.id+")\"><i class=\"fa fa-trash\"></i></p></td>";

        table.appendChild(node);
    });

    document.getElementById('total-price').innerText = "Preço Total: R$ " + parseFloat(sum).toFixed(2);
}

function removeFromCart(id){
    if (confirm("Tem certeza que deseja remover este produto do carrinho?")){
        removeProduct(id);
        init();
    }
}