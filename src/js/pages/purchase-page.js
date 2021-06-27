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