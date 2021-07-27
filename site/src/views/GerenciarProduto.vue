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
                                <td> <input id="product-name" type="text" v-model="name"> </td>
                            </tr>
                            <tr>
                                <td><p> Categoria: </p></td>
                                <td> <input id="product-category" type="text" v-model="category"> </td>
                            </tr>
                            <tr>
                                <td><p> Preço: </p></td>
                                <td> <input id="product-price" type="text" v-model="price"> </td>
                            </tr>
                            <tr>
                                <td><p> Descrição: </p></td>
                                <td> <input id="product-description" type="text" v-model="desc"> </td>
                            </tr>
                            <tr>
                                <td><p> Imagem: </p></td>
                                <td> <input id="product-image" type="text" v-model="img"> </td>
                            </tr>
                        </table>
                        <br>
                        <div>
                            <input type="submit" value="Adicionar" @click="addProduct($event)">
                        </div>    
                    </form>

                </div>
                <div class="manage-box">
                    
                    <form onsubmit="remove(event)">
                        <div>
                            <h2>Remover Produto</h2>
                        </div> 
                        <br>
                        <table>
                            <tr>
                                <td><p> ID: </p></td>
                                <td> <input id="product-id" type="text" v-model="id"> </td>
                            </tr>
                        </table>
                        <br>
                        <div>
                            <input type="submit" value="Remover" @click="removeProduct($event)">
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
    data() {
        return {
            name: '',
            category: '',
            price: '',
            desc: '',
            img: '',
            id: '',
        }
    },
    methods: {
        addProduct(event) {            
            if (this.name == '' || this.category == '' || this.price == '' || this.desc == '' || this.img == '') {
                alert("Preencha todos os campos para adicionar um produto!")
                console.log(event)
                event.preventDefault()                
            }       
            else {
                alert("Produto " + this.name + " adicionado com sucesso!")
                event.preventDefault()
            }            
        },
        removeProduct(event) {
            alert("Produto removido com sucesso!")
            event.preventDefault()
        }
    } 
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