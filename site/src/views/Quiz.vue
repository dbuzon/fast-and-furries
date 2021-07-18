<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="quiz">
                    <h2 class="text-center"><i class="fa fa-asterisk fa-fw" style="color: var(--rosa);"></i> Quiz <i class="fa fa-asterisk fa-fw" style="color: var(--rosa);"></i></h2>
                    <p class="text-center">Com qual bichinho você se parece mais?</p>
                    <br>
                    <p><span>1.</span> No rolê, você é o amigo que...</p>
                    <input type="radio" name="question1" value="dog"> 
                    <label> Cuida dos amigos quando todo mundo deu pt</label><br>
                    <input type="radio" name="question1" value="cat"> 
                    <label> Pega metade da galera e nem lembra no dia seguinte</label><br>
                    <input type="radio" name="question1" value="turtle"> 
                    <label> Fica no seu cantinho aproveitando a sua bebida</label><br>
                    <input type="radio" name="question1" value="parrot"> 
                    <label> No rolê, você é o amigo que...</label><br><br>

                    <p><span>2.</span> Na quarentena, você...</p>
                    <input type="radio" name="question2" value="cat"> 
                    <label> Aproveitou o tempo em casa pra cuidar de você mesmo</label><br>
                    <input type="radio" name="question2" value="turtle"> 
                    <label> Ficou tranquilo e preparou umas receitas novas</label><br>
                    <input type="radio" name="question2" value="parrot"> 
                    <label> Na quarentena, você...</label><br>
                    <input type="radio" name="question2" value="dog"> 
                    <label>  Ficou deprimido em casa com saudade dos amigos</label><br><br>

                    <p><span>3.</span> O tipo de pessoa que você mais acha chata é...</p>
                    <input type="radio" name="question3" value="parrot"> 
                    <label> O tipo de pessoa que você mais acha chata é...</label><br>
                    <input type="radio" name="question3" value="dog"> 
                    <label> Quem nunca tá animado pra nada</label><br>
                    <input type="radio" name="question3" value="turtle"> 
                    <label> Quem anda sempre com pressa e nunca tem tempo sobrando</label><br>
                    <input type="radio" name="question3" value="cat"> 
                    <label> Gente que não sabe respeitar espaço pessoal</label><br><br>

                    <p><span>4.</span> Se você ganhasse um milhão de reais, a primeira coisa a fazer seria...</p>
                    <input type="radio" name="question4" value="turtle"> 
                    <label> Investir numa casa enorme e confortável</label><br>
                    <input type="radio" name="question4" value="parrot"> 
                    <label> Se você ganhasse na loteria, a primeira coisa a fazer seria...</label><br>
                    <input type="radio" name="question4" value="cat"> 
                    <label> Renovaria todos os móveis e colocaria o resto no banco</label><br>
                    <input type="radio" name="question4" value="dog"> 
                    <label> Comprar um carro esporte e sair andando por aí com os amigos</label><br><br>

                    <p><span>5.</span> Nas férias, tudo o que você precisa é...</p>
                    <input type="radio" name="question5" value="cat"> 
                    <label> Zerar a Netflix, HBO, Disney+...</label><br>
                    <input type="radio" name="question5" value="dog"> 
                    <label> Viajar até não poder mais</label><br>
                    <input type="radio" name="question5" value="turtle"> 
                    <label> Ler com calma todos os livros atrasados</label><br>
                    <input type="radio" name="question5" value="parrot"> 
                    <label> Nas férias, tudo o que você precisa é...</label><br><br>

                    <p><span>6.</span> Qual seu desenho de infância favorito?</p>
                    <input type="radio" name="question6" value="dog"> 
                    <label> Coragem, o cão covarde</label><br>
                    <input type="radio" name="question6" value="turtle"> 
                    <label> Tartarugas Ninja</label><br>
                    <input type="radio" name="question6" value="parrot"> 
                    <label> Qual seu desenho de infância favorito?</label><br>
                    <input type="radio" name="question6" value="cat"> 
                    <label> Tom & Jerry</label><br><br>

                    <p><span>7.</span> Seu BFF ideal...</p>
                    <input type="radio" name="question7" value="parrot"> 
                    <label> Seu BFF ideal...</label><br>
                    <input type="radio" name="question7" value="cat"> 
                    <label> Te faz uns cafunés quando você tá afim</label><br>
                    <input type="radio" name="question7" value="dog"> 
                    <label> É cheio de energia e tá sempre disposto a ajudar</label><br>
                    <input type="radio" name="question7" value="turtle"> 
                    <label> Gosta de fazer altos nada com você</label><br><br>
                    
                    <table data-result class="hide-content">
                        <tr>
                            <td><img  data-img src="" alt=""></td>
                            <td>
                                <h2 data-title></h2>
                                <p data-text></p>
                            </td>
                        </tr>
                    </table>
                    
                    <input data-btn class="center-block" type="submit" value="Resultado">
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
  name: 'Quiz',  
}
</script>

<style scoped>
.quiz{
    width: 100%;
    max-width: 750px;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 60px;
    box-shadow: 0px 0px 5px #ccc;
    padding:30px 60px;    
}

.center-block {
    display: block;
    margin: auto auto;
}

.hide-content {
    display: none;
}

.show-content {
    display: inline;
}

td {
    padding: 30px;
    vertical-align: top;
    text-align: justify;    
}

td img {
    width: 200px;
    border-radius: 3px;
}

td h2 {
    color: var(--rosa);
}

label {
    font-family: 'RobotoS';
    color: #696969;
}

h2{
    font-size: 20px;
    font-weight: bold;
}

p{
    margin-bottom: 10px;
}

.quiz span {
    color: var(--rosa);
    font-weight: bold;
}

</style>