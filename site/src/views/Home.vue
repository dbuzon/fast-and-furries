<template>
    <div class="home">
        <div class="container text-center home-content-title">
            <div class="row">
                <div id="product-title" class="col-md-12">
                    <h2>{{title}}</h2>
                    <p>{{subtitle}}</p>
                </div>
            </div>
        </div>
        <div id="product-container" class="container text-center">
            <div v-for="(item, index) in products" :key="index" class="row">
                <div v-for="product in item" :key="product.id" class="col-md-3">
                    <router-link class="product" :to="'/produto?'+product.id">
                        <img :src="product.img" :alt="product.title">
                        <p>{{product.title}}<br><span>{{product.price}}</span></p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',  
    data() {
        return {
            title: "",
            subtitle: "",            
            products: [[{
                id: '1',                
                img: require('@/assets/images/cachorro.png'),
                title: 'golden retriever',
                price: 2000,                                
                category: 0,
            },{
                id: '2',
                img: require('@/assets/images/papagaio.png'),
                title: 'papagaio',
                price: 5.50,                                
                category: 1,
            },{
                id: '2',
                img: require('@/assets/images/papagaio.png'),
                title: 'papagaio',
                price: 5.50,                
                category: 1,
            },{
                id: '2',
                img: require('@/assets/images/papagaio.png'),
                title: 'papagaio',
                price: 5.50,                    
                category: 0,            
            }],[{
                id: '2',
                img: require('@/assets/images/papagaio.png'),
                title: 'papagaio',
                price: 5.50,                
                category: 1,
            }],],
        }
    },
    created () {
        this.getCategory();
    },
    watch: {
        '$route.fullPath' : 'getCategory'
    },
    methods: {
        getCategory() {
            let category;
            if (window.location.search.length == 0) category = -1;
            else category = parseInt(window.location.search.slice(11, 100));

            if (category == -1) this.title = "Em alta";
            else if (category == 0) this.title = "Ração";
            else if (category == 1) this.title = "Brinquedos";
            else if (category == 2) this.title = "Acessórios";
            else if (category == 3) this.title = "Caminhas";
            else if (category == 4) this.title = "Cosméticos";

            if (category == -1) this.subtitle = "As escolhas favoritas dos nossos consumidores.";
            else this.subtitle = "";
        }
    }
}
</script>

<style scoped>
.home-content-title h2{
    font-size: 30px;
    font-weight:bold;
}

.home-content-title p{
    font-size: 16px;
}

.home-content-title{
    margin-bottom: 60px;
}

.product{
    text-decoration: none;
    margin-bottom: 60px;
    display: block;
    padding: 0 20px;
}

.product:hover img, .product:hover p{
    filter: brightness(80%);
    color: var(--rosa-escuro);
    
}

.product img{
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #ccc;
    transition: 0.3s ease;
}

.product p{
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: var(--preto);
    font-weight: bold;
    transition: 0.3s ease;
}

.product span{
    font-size: 1.25em;
    color: var(--rosa-escuro);
}
</style>