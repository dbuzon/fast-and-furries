<template>
    <div class="container text-left">
        <div class="row">
            <div class="col-md-12">
                <h2>Administrador</h2>                        
                <hr>
            </div>
        </div>
    </div>

    <div class="container text-center">
        <div class="row">
            <div class="col-md-6">
                <table>
                    <tr><td class="pad"><img :src="pathProduto" alt="produtos"></td></tr>
                    <tr><td>
                        <h3>Gerenciar Produtos</h3>
                        <p>Adicione ou remova produtos da loja</p>
                    </td></tr>
                    <tr><td class="pad">
                        <router-link to="/gerenciar-produto">
                            <input type="submit" value="Gerenciar">
                        </router-link>                        
                    </td></tr>
                </table>
            </div>      
            <div class="col-md-6">
                <table>
                    <tr><td class="pad"><img :src="pathUsuario" alt="cliente"></td></tr>
                    <tr><td>
                        <h3>Gerenciar Usuários</h3>
                        <p>Gerencie os dados e outras informações dos usuários</p>
                    </td></tr>
                    <tr><td class="pad">
                        <router-link to="/gerenciar-usuario">
                            <input type="submit" value="Gerenciar"> 
                        </router-link>                        
                    </td></tr>
                </table> 
            </div>                                
        </div> 
    </div>
</template>

<script>
export default {
    name: 'Admin', 
    data() {
        return {
            pathProduto: require('@/assets/images/productIcon.png'),
            pathUsuario: require('@/assets/images/usersIcon.png'),
        }
    } 
}
</script>

<style scoped>
h2, h3 {
    color: var(--preto);
}

table {
    width: 100%;
    max-width: 550px;
    background-color: white;
    margin: 60px auto;
    margin-bottom: 100px;
    box-shadow: 0px 0px 5px #ccc;
    padding:30px 60px;
}

td {
    width: 400px;
    text-align: center; 
    padding-right: 30px;  
    padding-left: 30px;
}

.pad {
    padding-top: 35px;
    padding-bottom: 35px;
}

td img {
    width: 90px;
    border-radius: 50%;    
}

td h3 {
    font-size: 20px;    
}

td p {
    color: #828282;
}
</style>