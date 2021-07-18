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
                                    
                </table> 
            </div>         
        </div>   
        <br>         
        <div class="row">
            <div class="col-md-12">
                <p id="total-price"></p>
                <a href="finalizar_compra.html">
                    <input type="submit" value="Finalizar Compra">
                </a>
            </div> 
        </div>                      
    </div>
</template>

<script>
export default {
  name: 'Carrinho',  
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