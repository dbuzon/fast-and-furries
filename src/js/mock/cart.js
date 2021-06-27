var cart = [];

function getCart(){
    return cart;
}

function refreshCart(){
    let size = cart.length;
    if (size > 9) size = 9 + "plus";

    let node = document.getElementById('cart');
    node.className = "shopping-cart";
    node.classList.add("cart-"+size);
}

function removeProduct(id){
    for(let i = 0;i < cart.length;i++){
        if (cart[i].id == id) {
            cart.splice(i, 1);
            break;
        }
    }
}

function addProduct(id){
    let obj = {
        id: id,
        quantity: 1
    };

    let added = false;
    for(let i = 0;i < cart.length;i++){
        if (cart[i].id == id) {
            cart[i].quantity++;
            added = true;
        }
    }
    if (!added) cart.push(obj);
}

addProduct(0);
addProduct(0);
addProduct(7);
addProduct(3);