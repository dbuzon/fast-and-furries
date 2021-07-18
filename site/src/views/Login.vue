<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="login">
                    <form onsubmit="login(event)">

                        <h2 class="text-center"><i class="fa fa-user"></i> Entrar</h2>
                        <br>

                        <p>E-mail</p>
                        <input id="email" placeholder="seu@email.com" type="text"><br>
                        <br>
                        <p>Senha</p>
                        <input id="password" placeholder="******" type="password"><br>
                        <br>
                        
                        <input type="submit" value="Entrar"><br>
                        <br>

                        <p>Não tem cadastro? Crie uma <a href="cadastro.html">nova conta</a></p>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',  
}
</script>

<style scoped>
.login{
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