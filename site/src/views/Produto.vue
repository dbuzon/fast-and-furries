<template>
    <div class="container">
        <div class="row justify-content-md-around">
            <div class="col-md-5 product">
                
                <img id="product-image" src="image/placeholder.jpg" alt="">
                
            </div>
            <div class="col-md-5 product">
                    <h2 id="product-name"></h2>

                    <br>
                    <p id="product-description"></p>
                    <br>

                    <p><span id="product-price"></span></p>

                    <input onclick="addToCart()" type="submit" value="Adicionar ao carrinho">
            </div>                
        </div>            
    </div>
</template>

<script>
export default {
  name: 'Produto',  
}
</script>

<style scoped>
.product{
    margin-bottom: 100px;
    margin-top: 20px;
    display: block;
    padding: 0 20px;
}

.product img{
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #c4c4c4;
}

.product p{
    display: block;
    margin-top: 20px;   
    color: var(--preto);    
}

.product span{
    font-size: 1.25em;
    font-weight: bold;
    color: var(--rosa-escuro);
}
</style>