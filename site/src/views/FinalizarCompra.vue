<template>
	<div>
		<div class="container text-left">
			<div class="row">
				<div class="col-md-12">
					<h2>Finalizar Compra</h2>
					<p>Home > Carrinho > Finalizar Compra</p>
					<hr />
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row justify-content-md-left">
				<div class="col-md-12 compra">
					<form @submit="purchase($event)">
						<div class="preco">
							<p>R$ {{ totalPrice.toFixed(2) }}</p>
						</div>
						<br />
						<table>
							<tr>
								<td><p>CPF:</p></td>
								<td>
									<input
										id="user-cpf"
										type="text"
										v-model="cpf"
									/>
								</td>
							</tr>
							<tr>
								<td><p>Número do cartão:</p></td>
								<td>
									<input
										id="user-card-number"
										type="text"
										v-model="cardNum"
									/>
								</td>
							</tr>
							<tr>
								<td><p>Código de segurança:</p></td>
								<td>
									<input
										id="user-card-secret"
										type="text"
										v-model="code"
									/>
								</td>
							</tr>
							<tr>
								<td><p>Endereço de entrega:</p></td>
								<td>
									<input
										id="user-address"
										type="text"
										v-model="address"
									/>
								</td>
							</tr>
						</table>

						<br />
						<div>
							<input type="submit" value="Comprar" />
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FinalizarCompra",
	data() {
		return {
			cpf: "",
			cardNum: "",
			code: "",
			address: "",
			totalPrice: 0,
		};
	},
	created() {
		this.updateTotalPrice();
	},
	methods: {
		purchase(event) {
			event.preventDefault();
			if (cpf.length == 0) {
				alert("O campo 'CPF' precisa ser preenchido");
				return;
			}
			if (card_number.length == 0) {
				alert("O campo  'Número do cartão' precisa ser preenchido");
				return;
			}
			if (card_secret.length == 0) {
				alert("O campo 'Código de segurança' precisa ser preenchido");
				return;
			}
			if (address.length == 0) {
				alert("O campo 'Endereço de entrega' precisa ser preenchido");
				return;
			}
			alert("Cartão inválido!");
		},

		async updateTotalPrice() {
			this.totalPrice = 0;

			let cart = JSON.parse(this.$cookies.get("shopping_cart"));
			if (cart == null) cart = [];

			// Get product details from API
			for (let item of cart) {
				let response = await fetch(
					"http://localhost:3000/products/" + item.id
				);
				let product = await response.json();

				this.totalPrice += item.quantity * product.price;
			}
		},
	},
};
</script>

<style scoped>
.compra {
	margin-bottom: 100px;
	margin-top: 20px;
	display: block;
	padding: 0 20px;
}

td {
	padding: 10px;
	max-width: 300px;
}

.preco {
	font-size: 1.25em;
	font-weight: bold;
	color: var(--rosa-escuro);
}
</style>
