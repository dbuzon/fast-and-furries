<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Sobre nós</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
            sit amet consectetur
          </p>
        </div>
        <div class="col-md-4">
          <h3>Links</h3>
          <hr />
          <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/carrinho'>Carrinho</router-link></li>
            <!-- <li><a href="perfil_cliente.html">Perfil do Cliente</a></li> -->
            <li><router-link to="/quiz">Quiz</router-link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3>Atendimento</h3>
          <hr />
          <p>
            <i class="fa fa-envelope"></i> atendimento@fastandfurries.com <br />
            <i class="fa fa-phone"></i> (12) 1234-5678 <br />
            <br />
            segunda à sexta, 10h00 - 11h00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footer{   
    flex-shrink: 0;
    display: block;
    background-color: var(--rosa);
}

.footer::before{
    position: absolute;
    left: 50%;
    margin-top: -20px;
    content: "\f1b0";    
    font-family: FontAwesome;
    font-size: 30px;
    color: var(--preto);
}

.footer h3{
    margin-top:20px;
    color:white;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
}
.footer p{
    color:white;
}

.footer hr{
    height: 0.5px;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #fff;
    opacity: 0.5;
}
.footer ul{
    padding-left: 0;
}

.footer a{
    color: white;
}
</style>