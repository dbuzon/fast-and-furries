window.onload = init;

function init(){
    refreshCart();

}

function add(event){
    let name = document.getElementById("product-name" ).value.trim();
    let category = document.getElementById("product-category").value.trim();
    let price = document.getElementById("product-price").value.trim();
    let description = document.getElementById("product-description").value.trim();
    let image = document.getElementById("product-image").value.trim();

    if (name.length == 0){
        alert('O campo \'Nome\' precisa ser preenchido');
        event.preventDefault();
        return;
    }
    if (category.length == 0){
        alert('O campo  \'Categoria\' precisa ser preenchido');
        event.preventDefault();
        return;
    }
    if (price.length == 0){
        alert('O campo \'Preço\' precisa ser preenchido');
        event.preventDefault();
        return;
    }
    if (description.length == 0){
        alert('O campo \'Descrição\' precisa ser preenchido');
        event.preventDefault();
        return;
    }
    if (image.length == 0){
        alert('O campo \'Imagem\' precisa ser preenchido');
        event.preventDefault();
        return;
    }

    putProducts(name, category, price, description, image);
    alert("Produto " + name + " adicionado!");
}

function remove(event){
    let id = document.getElementById('product-id').value;

    if (deleteProduct(id)) alert("Produto removido com sucesso!");
    else{
        event.preventDefault();

        alert("Produto não encontrado!");
    }
}