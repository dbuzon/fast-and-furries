window.onload = init;

function init(){
    refreshCart();


    let product = getProduct(getProductId());

    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-price').innerText = "R$ " + parseFloat(product.price).toFixed(2)
}

function getProductId(){
    return parseInt(window.location.search.slice(4, 100));
}

function addToCart(){
    addProduct(getProductId());
    refreshCart();

    let product = getProduct(getProductId());
    alert("Produto " + product.name + " adicionado ao carrinho!");
}