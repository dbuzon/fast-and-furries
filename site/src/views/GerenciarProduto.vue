<template>
    <div class="container text-left">
        <div class="row">
            <div class="col-md-12">
                <h2>Gerenciar Produtos</h2>
                <hr>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="manage-box">
                    
                    <form onsubmit="add(event)">
                        <div class="preco">
                            <h2>Adicionar Produto</h2>
                        </div> 
                        <br>
                        <table>
                            <tr>
                                <td><p> Nome: </p></td>
                                <td> <input id="product-name" type="text"> </td>
                            </tr>
                            <tr>
                                <td><p> Categoria: </p></td>
                                <td> <input id="product-category" type="text"> </td>
                            </tr>
                            <tr>
                                <td><p> Preço: </p></td>
                                <td> <input id="product-price" type="text"> </td>
                            </tr>
                            <tr>
                                <td><p> Descrição: </p></td>
                                <td> <input id="product-description" type="text"> </td>
                            </tr>
                            <tr>
                                <td><p> Imagem: </p></td>
                                <td> <input id="product-image" type="text"> </td>
                            </tr>
                        </table>
                        <br>
                        <div>
                            <input type="submit" value="Adicionar">
                        </div>    
                    </form>

                </div>
                <div class="manage-box">
                    
                    <form onsubmit="remove(event)">
                        <div class="preco">
                            <h2>Remover Produto</h2>
                        </div> 
                        <br>
                        <table>
                            <tr>
                                <td><p> ID: </p></td>
                                <td> <input id="product-id" type="text"> </td>
                            </tr>
                        </table>
                        <br>
                        <div>
                            <input type="submit" value="Remover">
                        </div>    
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GerenciarProduto',  
}
</script>

<style scoped>
.manage-box{
    width: 100%;
    max-width: 750px;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 60px;
    box-shadow: 0px 0px 5px #ccc;
    padding:30px 30px;    
    margin-top:40px;
}

td {
    padding: 0px 10px;
    max-width: 300px;
}

.manage-box h2{
    font-size: 20px;
}
</style>