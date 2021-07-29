<template>
	<div>
		<div class="title container">
			<div class="row">
				<div class="col-md-12">
					<h2>Carrinho</h2>
					<p>Home > Carrinho</p>
					<hr />
				</div>
			</div>
		</div>
		<br />

		<div class="product-container container">
			<div class="product row">
				<div class="col-md12">
					<table id="cart-table">
						<tr v-for="product in products" :key="product.id">
							<td class="image">
								<img :src="product.img" alt="" />
							</td>
							<td class="name">
								<p>{{ product.title }}</p>
							</td>
							<td class="qtd">
								<p>
									<span @click="decrease(product.id)"> <i class="fa fa-minus" aria-hidden="true"></i> </span>
									{{ product.quantity }}
									<span @click="increase(product.id)"><i class="fa fa-plus" aria-hidden="true"></i> </span>
								</p>
							</td>
							<td class="price">
								<p>
									R$
									{{
										(
											product.price * product.quantity
										).toFixed(2)
									}}
								</p>
							</td>
							<td
								class="delete"
								@click="removeFromCart(product.id)"
							>
								<p><i class="fa fa-trash"></i></p>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<br />

			<div class="row">
				<div class="col-md-12">
					<p id="total-price">
						Preço Total: R$ {{ totalPrice.toFixed(2) }}
					</p>
					<router-link to="/finalizar-compra">
						<input type="submit" value="Finalizar Compra" />
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
var emitter = require("tiny-emitter/instance");

export default {
	name: "Carrinho",
	data() {
		return {
			products: [],
		};
	},
	async created() {
		let cart = JSON.parse(this.$cookies.get("shopping_cart"));
		if (cart == null) cart = [];

		// Get product details from API
		for (let item of cart) {
			let response = await fetch(
				"http://localhost:3000/products/" + item.id
			);
			let product = await response.json();

			this.products.push({
				id: item.id,
				img: require("@/assets/images/products/" + product.img),
				title: product.title,
				price: product.price,
				quantity: item.quantity,
			});
		}
	},
	computed: {
		totalPrice: function() {
			let sum = 0;

			for (let i = 0; i < this.products.length; i++) {
				sum += this.products[i].price * this.products[i].quantity;
			}

			return sum;
		},
	},
	methods: {
		increase(id) {
			this.products.forEach((p) => {
				if (p.id == id) p.quantity++;
			});

			// Update cookies
			this.updateCart();
		},
		decrease(id) {
			this.products.forEach((p) => {
				if (p.id == id) {
					if (p.quantity > 1) p.quantity--;
					else this.removeFromCart(id);
				}
			});

			// Update cookies
			this.updateCart();
		},
		removeFromCart(id) {
			let i = 0;
			for (; i < this.products.length; i++) {
				if (this.products[i].id == id) break;
			}
			this.products.splice(i, 1);

			// Update cookies
			this.updateCart();
		},

		updateCart() {
			let newCart = [];
			for (let item of this.products) {
				newCart.push({
					id: item.id,
					quantity: item.quantity,
				});
			}

			this.$cookies.set("shopping_cart", JSON.stringify(newCart));
			emitter.emit("shopping_cart_updated");
		},
	},
};
</script>

<style scoped>
.product img {
	height: 80px;
	border-radius: 3px;
}

.product-container {
	margin-bottom: 100px;
}

.qtd span {
	padding: 0 1em;
	cursor: pointer;
	font-weight: bold;
	color: var(--rosa-escuro);
}

table {
	background-color: #f2f2f2;
	border-radius: 3px;
}

td {
	padding: 20px;
}

td.image {
	width: 15%;
}
td.name {
	width: 40%;
}
td.qtd {
	width: 20%;
}
td.price {
	width: 15%;
}
td.delete {
	width: 10%;
}

td.delete p {
	color: var(--preto);
	font-size: 20px;
	cursor: pointer;
	display: inline;
	padding: 10px;
}
td.delete p:hover {
	color: var(--rosa-escuro);
}

td.qtd {
	text-align: end;
}

input[type="text"] {
	width: 50px;
}
</style>
