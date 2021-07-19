<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="cadastro">

                    <form onsubmit="signup(event)">
                        <h2 class="text-center"><i class="fa fa-user"></i> Cadastre-se </h2>
                        <br>
                        <p>Nome</p>
                        <input id="user-name" type="text"><br>
                        <br>

                        <p>CPF</p>
                        <input id="user-cpf" type="text"><br>
                        <br>

                        <p>Endereço</p>
                        <input id="user-address" type="text"><br>
                        <br>

                        <p>E-mail</p>
                        <input id="user-email" type="text"><br>
                        <br>

                        <p>Senha</p>
                        <input id="user-password" type="password"><br>
                        <br>
                        
                        <input type="submit" value="Cadastrar"><br>
                        <br>

                        <p>Já é cadastrado? <router-link to="/login">Faça login</router-link></p>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cadastro',  
}
</script>


<style scoped>
.cadastro {
    width: 100%;
    max-width: 450px;
    background-color: white;
    margin:60px auto;
    box-shadow: 0px 0px 5px #ccc;
    padding:30px 60px;
}

h2{
    font-size: 20px;
    font-weight: bold;
}

p{
    margin-bottom: 10px;
}

input{
    width: 100%;
}
</style>