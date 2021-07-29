<template>
	<div class="site-navbar">
		<div class="navbar-top">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<router-link to="/">
							<h1 class="navbar-title">
								<i class="fa fa-paw"></i> FAST & FURRIES
							</h1>
						</router-link>
						<span class="navbar-menu">
							<router-link
								id="cart"
								:class="shoppingCartClass"
								to="/carrinho"
								><i class="fa fa-shopping-cart"></i
							></router-link>

							<router-link v-if="logged == false" to="/login">
								<i class="fa fa-user"></i>
								<span class="navbar-text"> Entrar</span>
							</router-link>

							<router-link
								v-if="logged == true"
								to="/perfil-cliente"
							>
								<i class="fa fa-user"></i>
								<span class="navbar-text"> Perfil</span>
							</router-link>

							<router-link
								class="admin"
								v-if="isAdmin == true"
								to="/admin"
							>
								<i class="fa fa-cog"></i>
								<span class="navbar-text"> Admin</span>
							</router-link>

							<a
								class="logout"
								@click="logout"
								v-if="logged == true"
							>
								<i class="fa fa-sign-out"></i>
								<span class="navbar-text"> Sair</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="navbar-bottom text-center">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<router-link to="/?categoria=0">Ração</router-link>
						<router-link to="/?categoria=1">Brinquedos</router-link>
						<router-link to="/?categoria=2">Acessórios</router-link>
						<router-link to="/?categoria=3">Caminhas</router-link>
						<router-link to="/?categoria=4">Cosméticos</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
var emitter = require("tiny-emitter/instance");

export default {
	name: "NavBar",
	data() {
		return {
			shoppingCartClass: "",
			logged: false,
			isAdmin: false,
		};
	},
	created() {
		this.updateShoppingCartClass();
		this.isLogged();
	},
	mounted() {
		// Update shopping cart class when receive this message
		emitter.on("shopping_cart_updated", () => {
			this.updateShoppingCartClass();
		});
	},
	methods: {
		updateShoppingCartClass() {
			let className = "shopping-cart";

			let cart = JSON.parse(this.$cookies.get("shopping_cart"));
			if (cart == null) cart = [];

			if (cart.length > 9) className += " cart-9plus";
			else if (cart.length > 0) className += " cart-" + cart.length;

			this.shoppingCartClass = className;
		},
		async isLogged() {
			let accountId = this.$cookies.get("account_id");

			this.logged = false;
			if (accountId != null) {
				this.logged = true;

				let response = await fetch(
					"http://localhost:3000/accounts/" + accountId
				);
				let account = await response.json();

				this.isAdmin = account.admin;
			}
		},
		logout() {
			this.$cookies.remove("account_id");
			window.location.href = "/";
		},
	},
};
</script>

<style>
.logout {
	margin-left: 20px;
	cursor: pointer;
}

.admin {
	margin-left: 20px;
	cursor: pointer;
}

.navbar-top {
	width: 100%;
	height: 80px;
	background-color: var(--rosa);
}

.navbar-bottom {
	width: 100%;
	background-color: var(--rosa-claro);
	margin-bottom: 60px;
	display: block;
}

.navbar-bottom a {
	font-size: 16px;
	color: var(--preto);
	text-decoration: none;
	margin: 0 20px;
	line-height: 40px;
}

.navbar-bottom a:hover {
	color: var(--rosa-escuro);
	border-bottom: 1px solid var(--rosa-escuro);
	transition: all 0.5s;
}

.navbar-title {
	font-size: 29px;
	line-height: 80px;
	font-weight: bold;
	color: white;
	float: left;
}

.navbar-menu {
	font-size: 20px;
	float: right;
	line-height: 80px;
	font-weight: bold;
	color: white;
}

.navbar-menu a {
	color: white;
	text-decoration: none;
}

.navbar-menu a:hover {
	color: var(--rosa-claro);
	transition: 0.5s;
}

.shopping-cart {
	margin-right: 50px;
	font-size: 30px;
}

/* Cart styles */
.shopping-cart::before {
	content: "0";
	position: absolute;
	top: 15px;
	margin-left: 25px;
	border-radius: 100%;
	width: 22px;
	font-size: 14px;
	text-align: center;
	line-height: 22px;
	display: block;
	background-color: var(--preto);
	font-weight: bold;
	color: white;
}
.cart-1::before {
	content: "1";
}
.cart-2::before {
	content: "2";
}
.cart-3::before {
	content: "3";
}
.cart-4::before {
	content: "4";
}
.cart-5::before {
	content: "5";
}
.cart-6::before {
	content: "6";
}
.cart-7::before {
	content: "7";
}
.cart-8::before {
	content: "8";
}
.cart-9::before {
	content: "9";
}
.cart-9plus::before {
	content: "9+";
}
</style>
