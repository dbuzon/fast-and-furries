window.onload = init;

function init(){
    refreshCart();

    let products = [];
    let cat = getCategoryId();
    if (cat == -1) {
        products = getProducts(8);
        document.getElementById('product-title').innerHTML = "<h2>Em alta</h2><p>As escolhas favoritas dos nossos consumidores.</p>";
    }
    else {
        products = getProductsByCategory(cat);

        let catname = "";
        if (cat == 0) catname = "Ração";
        else if (cat == 1) catname = "Brinquedos";
        else if (cat == 2) catname = "Acessórios";
        else if (cat == 3) catname = "Caminhas";
        else if (cat == 4) catname = "Cosméticos";

        document.getElementById('product-title').innerHTML = "<h2>"+ catname +"</h2>";
    }
    
    let container = document.getElementById('product-container');
    let row = document.createElement('row');
    row.classList.add('row');

    products.forEach( (obj, index) => {
        if (index > 0 && index%4 == 0){
            container.appendChild(row);

            row = document.createElement('row');
            row.classList.add('row');
        }

        let image_path = "image/placeholder.jpg";
        if (obj.image != null) image_path = "image/products/" + obj.image;

        let node = document.createElement("div");
        node.classList.add("col-md-3");
        node.innerHTML = 
        "<a class=\"product\" href=\"produto.html?id="+ obj.id +"\"> <img src=\""+ image_path +"\" alt=\"\"> <p href=\"/\">"+ obj.name +" <br> <span>R$ "+ parseFloat(obj.price).toFixed(2) +"</span></p></a>";

        row.appendChild(node);
    });

    container.appendChild(row);
}

function getCategoryId(){
    if (window.location.search.length == 0) return -1;
    return parseInt(window.location.search.slice(11, 100));
}

