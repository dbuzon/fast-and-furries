var objects = [];


function getProducts(n = objects.length){
    return objects.slice(0, n);
}

function putProducts(name, price, description){
    objects.push(
        {
            id: objects.length, 
            name: name, 
            price: price, 
            description: description
        }
    );
}

console.log("========= Products =========");
putProducts("produto 1", 10, "descrição");
putProducts("produto 1", 10, "descrição");
putProducts("produto 1", 10, "descrição");
putProducts("produto 1", 10, "descrição");

console.log(getProducts());