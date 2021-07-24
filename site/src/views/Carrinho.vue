<template>
    <div class="title container">
        <div class="row">
            <div class="col-md-12">
                <h2>Carrinho</h2>
                <p>Home > Carrinho</p>
                <hr> 
            </div>                
        </div>            
    </div>          
    <br> 

    <div class="product-container container">
        <div class="product row">
            <div class="col-md12">                                           
                <table id="cart-table">                        
                    <tr v-for="product in products" :key="product.id">
                        <td class="image"><img :src="product.img" alt=""></td>
                        <td class="name"><p>{{product.name}}</p></td>
                        <td class="qtd">
                            <p>
                                <span @click="decrease(product.id)">-</span>
                                {{product.quantity}}
                                <span @click="increase(product.id)">+</span>
                            </p>
                        </td>
                        <td class="price"><p>R${{product.totalPrice}}</p></td>
                        <td class="delete" @click="removeFromCart(product.id)"><p><i class="fa fa-trash"></i></p></td>
                    </tr>               
                </table> 
            </div>         
        </div>   
        <br> 

        <div class="row">
            <div class="col-md-12">
                <p id="total-price">{{totalPrice}}</p>
                <router-link to="/finalizar-compra">
                    <input type="submit" value="Finalizar Compra">
                </router-link>
            </div> 
        </div>                      
    </div>
</template>

<script>
export default {
    name: 'Carrinho',  
    data() {
        return {
            products: [{
                id: '1',                
                img: require('@/assets/images/cachorro.png'),
                title: 'golden retriever',
                price: 2000,
                totalPrice: 0,
                quantity: 1,
            },{
                id: '2',
                img: require('@/assets/images/papagaio.png'),
                title: 'papagaio',
                price: 5.50,
                totalPrice: 0,
                quantity: 1,
            }],
            totalPrice: 0,
        }
    },
    computed: {
        products: function() {
            this.totalPrice = 0;
            for (let i = 0; i < this.products.length; i++) {
                this.products[i].totalPrice = this.products[i].price * this.products[i].quantity; 
            }
            for (let i = 0; i < this.products.length; i++) {
                this.totalPrice += this.products[i].totalPrice;
            }
            return this.products;
        }
    },
    methods: {
        increase(id) {
            this.products.forEach((p) => {
                if (p.id == id) p.quantity++;
            })
        },
        decrease(id) {
            this.products.forEach((p) => {
                if (p.id == id) {
                    if (p.quantity > 1) p.quantity--;
                    else this.removeFromCart(id);
                }
            })
        },
        removeFromCart(id) {
            let i = 0;
            for (; i < this.products.length; i++) {
                if (this.products[i].id == id) break;
            }
            this.products.splice(i, 1);
        }
    }

}
</script>

<style scoped>

.product img {
    height: 80px;
    border-radius: 3px;
}

.product-container {
    margin-bottom: 100px;
}

table {
    background-color: #f2f2f2;
    border-radius: 3px;
}

td {
    padding: 20px;
}

td.image {  width: 15%;}
td.name {   width: 40%;}
td.qtd {    width: 20%;}
td.price {  width: 15%;}
td.delete { width: 10%;}

td.delete p{
    color: var(--preto);
    font-size: 20px;
    cursor: pointer;
    display: inline;
    padding:10px;
}
td.delete p:hover{
    color: var(--rosa-escuro);
}

td.qtd {
    text-align: end;
}

input[type="text"] {
    width: 50px;
}
</style>