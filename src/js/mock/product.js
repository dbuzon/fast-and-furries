var products = [];


function getProducts(n = products.length){
    return products.slice(0, n);
}

function getProduct(id){
    for(let i = 0;i < products.length;i++){
        if (products[i].id == id) return products[i];
    }
    return null;
}

function getProductsByCategory(category){
    let response = [];

    products.forEach( p => {
        if (p.category == category){
            response.push(p);
        }
    });

    return response;
}

function putProducts(name, category, price, description, image = null, sold = 0){
    products.push(
        {
            id: products.length, 
            name: name, 
            category:category,
            price: price, 
            description: description,
            image: image,
            sold: sold
        }
    );

    products.sort( (a, b) => {
        return a.sold < b.sold;
    });
}

putProducts("Produto 1", 0, 9.99, "descrição", "poze.jpeg", 100);
putProducts("Produto 2", 1, 16.90, "descrição", null, 10);
putProducts("Produto 3", 2, 34.50, "descrição", null, 98);
putProducts("Produto 4", 3, 4.99, "descrição", "poze.jpeg", 35);
putProducts("Produto 5", 4, 100, "descrição", null, 34);
putProducts("Produto 6", 0, 20, "descrição", null, 1);
putProducts("Produto 7", 1, 56.50, "descrição", null, 0);
putProducts("Produto 8", 2, 324.99, "descrição", null, 35);
putProducts("Produto 9", 3, 98.50, "descrição", "poze.jpeg", 68);
putProducts("Produto 10", 4, 13.70, "descrição", null, 80);
putProducts("Produto 11", 0, 5, "descrição", null, 23);
putProducts("Produto 12", 1, 1.99, "descrição", null, 12);