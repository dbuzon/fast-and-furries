<template>
    <div class="site-navbar">
                <div class="navbar-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <a href="home.html">
                                    <h1 class="navbar-title"><i class="fa fa-paw"></i> FAST & FURRIES</h1>
                                </a>
                                <span class="navbar-menu">
                                    <a id="cart" class="shopping-cart" href="carrinho.html"><i class="fa fa-shopping-cart"></i></a> 
                                    <a href="login.html"><i class="fa fa-user"></i> <span class="navbar-text">Entrar</span></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar-bottom text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <a href="home.html?categoria=0">Ração</a>
                                <a href="home.html?categoria=1">Brinquedos</a>
                                <a href="home.html?categoria=2">Acessórios</a>
                                <a href="home.html?categoria=3">Caminhas</a>
                                <a href="home.html?categoria=4">Cosméticos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<style>
.navbar-top{
    width: 100%;
    height: 80px;
    background-color: var(--rosa);
}

.navbar-bottom{
    width: 100%;
    background-color: var(--rosa-claro);
    margin-bottom: 60px;
    display: block;
}

.navbar-bottom a{
    font-size: 16px;
    color: var(--preto);
    text-decoration: none;
    margin:0 20px;
    line-height: 40px;
}

.navbar-bottom a:hover{
    color: var(--rosa-escuro);
    border-bottom: 1px solid  var(--rosa-escuro);
    transition: all 0.5s;
}

.navbar-title{
    font-size: 29px;
    line-height: 80px;
    font-weight: bold;
    color:white;
    float:left;
}

.navbar-menu{
    font-size: 20px;
    float:right;
    line-height: 80px;
    font-weight: bold;
    color: white;
}

.navbar-menu a{
    color: white;
    text-decoration: none;
}

.navbar-menu a:hover {
    color: var(--rosa-claro);
    transition: 0.5s;
}

.shopping-cart{
    margin-right: 50px;
    font-size: 30px;
}

/* Cart styles */
.shopping-cart::before{
    content: "0";
    position: absolute;
    top:15px;
    margin-left: 25px;
    border-radius: 100%;
    width: 22px;
    font-size: 14px;
    text-align:center;
    line-height: 22px;
    display: block;
    background-color:var(--preto);
    font-weight: bold;
    color:white;
}
.cart-1::before{content: "1";}
.cart-2::before{content: "2";}
.cart-3::before{content: "3";}
.cart-4::before{content: "4";}
.cart-5::before{content: "5";}
.cart-6::before{content: "6";}
.cart-7::before{content: "7";}
.cart-8::before{content: "8";}
.cart-9::before{content: "9";}
.cart-9plus::before{content: "9+";}

</style>