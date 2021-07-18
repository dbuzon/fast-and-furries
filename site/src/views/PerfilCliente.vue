<template>    
    <div class="container text-left">
        <div class="row">
            <div class="col-md-12">
                <h2>Meu Perfil</h2>
                <p>Home > Meu Perfil</p>
                <hr>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row justify-content-md-left">
            <div class="col-md-12 perfil">
                <table>
                    <tr>
                        <td><p> Nome: </p></td>
                        <td> <input type="text"> </td>
                    </tr>
                    <tr>
                        <td><p> CPF: </p></td>
                        <td> <input type="text"> </td>
                    </tr>
                    <tr>
                        <td><p> E-mail: </p></td>
                        <td> <input type="text"> </td>
                    </tr>
                    <tr>
                        <td><p> Endereço: </p></td>
                        <td> <input type="text"> </td>
                    </tr>
                    <tr>
                        <td><p> Telefone: </p></td>
                        <td> <input type="text"> </td>
                    </tr>
                </table>
                <br>
                <div>
                    <input type="submit" value="Atualizar Cadastro">
                </div>    
            </div>           
        </div>                
    </div>
</template>

<script>
export default {
  name: 'Home',  
}
</script>

<style scoped>
.perfil {
    margin-bottom: 100px;
    margin-top: 20px;
    display: block;
    padding: 0 20px;
}

td {
    padding: 10px;
    max-width: 300px;
}
</style>