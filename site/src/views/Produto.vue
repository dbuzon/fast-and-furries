<template>
	<div class="container">
		<div class="row justify-content-md-around">
			<div class="col-md-5 product">
				<img id="product-image" :src="img" alt="" />
			</div>
			<div class="col-md-5 product">
				<h2 id="product-name">{{ name }}</h2>
				<br />
				<p id="product-description">{{ desc }}</p>
				<br />
				<p>
					<span id="product-price">R$ {{ price }}</span>
				</p>
				<input
					@click="addToCart"
					type="submit"
					value="Adicionar ao carrinho"
				/>
			</div>
		</div>
	</div>
</template>

<script>
var emitter = require("tiny-emitter/instance");

export default {
	name: "Produto",
	data() {
		return {
			id: -1,
			img: "",
			name: "",
			desc: "",
			price: "",
		};
	},
	created() {
		this.updateProduct();
	},
	methods: {
		addToCart() {
			let cart = JSON.parse(this.$cookies.get("shopping_cart"));
			if (cart == null) cart = [];

			let added = false;
			for (let item of cart) {
				if (item.id == this.id) {
					item.quantity++;
					added = true;
					break;
				}
			}
			if (added == false) {
				cart.push({
					id: this.id,
					quantity: 1,
				});
			}

			this.$cookies.set("shopping_cart", JSON.stringify(cart));
			emitter.emit("shopping_cart_updated");

			alert("Produto adicionado ao carrinho");
		},

		async updateProduct() {
			if (window.location.search.length > 0) {
				this.id = parseInt(window.location.search.slice(4, 100));
			}

			let response = await fetch(
				"http://localhost:3000/products/" + this.id
			);
			let product = await response.json();

			this.img = require("@/assets/images/" + product.img);
			this.name = product.title;
			this.desc = product.description;
			this.price = product.price.toFixed(2);
		},
	},
};
</script>

<style scoped>
.product {
	margin-bottom: 100px;
	margin-top: 20px;
	display: block;
	padding: 0 20px;
}

.product img {
	width: 100%;
	border-radius: 10px;
	box-shadow: 0px 0px 5px #c4c4c4;
}

.product p {
	display: block;
	margin-top: 20px;
	color: var(--preto);
}

.product span {
	font-size: 1.25em;
	font-weight: bold;
	color: var(--rosa-escuro);
}
</style>
