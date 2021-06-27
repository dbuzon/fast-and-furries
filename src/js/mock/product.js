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

function deleteProduct(id){
    for(let i = 0;i < products.length;i++){
        if (products[i].id == id) {
            products.splice(i, 1);
            return true;
        }
    }
    return false;
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

/*
0 - Ração 
1 - Brinquedos 
2 - Acessórios 
3 - Caminhas 
4 - Cosméticos
*/

// 0 - Ração
putProducts("Ração de Gato", 0, 20.50, "O alimento favorito do seu bichinho! Nutritivo e gostoso, o seu amigo de bigodes vai adorar essa ração feita especialmente para ele.", "racao_gatos.jpg", 1);
putProducts("Ração de Gato Whiskas", 0, 50.00, "Ração premium - Um verdadeiro prato gourmet para as línguas (e bigodes!) mais afiados. Uma explosão de sabores pro seu gatinho!", "whiskas.jpg", 2);
putProducts("Ração de Cachorro", 0, 16.90, "Indicado pra cachorros de 1 a 6 anos. A escolha mais nutritiva para o seu caro amigo cão!", "racao_cachorro.jpg", 100);

// 1 - Brinquedos
putProducts("Bolinha", 1, 34.50, "Bolinha de borracha atóxica e a prova de mordidas. Se seu sonho sempre foi falar \"Vai Rex, pega a bolinha!\", esse brinquedo é pra você.", "bolinha.jpg", 4);
putProducts("Osso de borracha", 1, 4.99, "A melhor escolha para aquele seu cachorrinho que não para quieto por nada nessa vida. Feito em borracha atóxica, esse briquedo vai proporcionar horas de diversão para seu bichinho!", "osso.jpg", 100);
putProducts("Galinha de borracha", 1, 15, "Grande sucesso entre os pets, esse brinquedo é indispensável para aqueles bichinhos de estimação que adoram fazer bastante barulho na casa! Proteção aos ouvidos não inclusa.", "galinha.jpg", 6);

// 2 - Acessórios
putProducts("Colete pra gato", 2, 30.50, "Camisa pra gato em algodão. Pra ele ficar mais gato do que já é.", "roupinha_gato.jpg", 7);
putProducts("Roupa Adidog", 2, 750.00, "Quem disse que cachorros não podem ter SWAG? Adquira já essa roupinha pra fazer o seu valente Chihuahua se sentir o último Pitbull de raça da terra!", "adidog.jpg", 150);
putProducts("Coleira", 2, 13.00, "Coleira pra você passear com seu bichinho em segurança. Garantia de qualidade e conforto pro seu cãozinho (ou cãozão!)", "coleira.jpg", 130);

// 3 - Caminhas 
putProducts("Caminha Pequena", 3, 150, "Conforto e qualidade para o seu bichinho de estimação que aprender todos os truques, menos o de crescer...", "caminha_p.jpg", 140);
putProducts("Arranhador duplo", 3, 269.95, "Se um é bom, dois é bom demais! Com esse arranhador duplo em casa, o seu felino favorito vai parar de destruir o seu sofá (ou destruir ele um pouco menos)", "arranhador.jpg", 20);
putProducts("Caminha Iglu", 3, 666, "Quem disse que iglus não estão na moda? Do polo norte pra sua casa, essas casinhas estão em todo lugar. Deixe o seu bichinho no máximo de conforto!", "iglu.jpg", 23);

// 4 - Acessórios
putProducts("Xampu pra Cachorro", 4, 37.50, "Deixa o seu doguinho com os pelos macios, sedosos e com um cheirinho irrestível! (Os carrapatos odeiam esse truque estranho...)", "xampu_cachorro.jpg", 1);
putProducts("Escova pra Gato", 4, 13.70, "Escova para gatos. Testado e aprovado por 9 a cada 10 gatos especialistas (e especialistas gatos!! aiai...)", "escova_gato.jpg", 500);
putProducts("Neutralizador de Odores", 4, 35, "Cansado daquele seu amigo chato que sempre reclama do cheiro do seu amado felino? Pois bem, agora você não precisa mais colocar o animal pra fora enquanto você fala com seu gatinho.", "neutralizador.jpg", 700);