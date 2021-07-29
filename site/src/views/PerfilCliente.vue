<template>
	<div>
		<div class="container text-left">
			<div class="row">
				<div class="col-md-12">
					<h2>Meu Perfil</h2>
					<p>Home > Meu Perfil</p>
					<hr />
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row justify-content-md-left">
				<div class="col-md-12 perfil">
					<table>
						<tr>
							<td><p>Nome:</p></td>
							<td><input type="text" v-model="name" /></td>
						</tr>
						<tr>
							<td><p>CPF:</p></td>
							<td><input type="text" v-model="cpf" /></td>
						</tr>
						<tr>
							<td><p>E-mail:</p></td>
							<td><input type="text" v-model="email" /></td>
						</tr>
						<tr>
							<td><p>Endereço:</p></td>
							<td><input type="text" v-model="address" /></td>
						</tr>
						<tr>
							<td><p>Telefone:</p></td>
							<td><input type="text" v-model="phone" /></td>
						</tr>
					</table>

					<br />
					<div>
						<input
							type="submit"
							value="Atualizar Cadastro"
							@click="update"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			name: "",
			cpf: "",
			email: "",
			address: "",
			phone: "",
			account: {},
		};
	},
	created() {
		this.getAccountInformation();
	},
	methods: {
		async update() {			
			this.account.name = this.name;
			this.account.cpf = this.cpf;
			this.account.email = this.email;
			this.account.address = this.address;
			this.account.phone = this.phone;
			fetch("http://localhost:3000/accounts/"+this.account.id, {
				method: "PUT",
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.account),                        
            });
			alert("Cadastro atualizado com sucesso!");
		},

		async getAccountInformation() {
			let accountId = this.$cookies.get("account_id");
			if (accountId == null) {
				alert("Você precisa estar logado para acessar esta página.");
				window.location.href = "/login";
			} else {
				let response = await fetch(
					"http://localhost:3000/accounts/" + accountId
				);
				this.account = await response.json();

				this.name = this.account.name;
				this.cpf = this.account.cpf;
				this.email = this.account.email;
				this.address = this.account.address;
				this.phone = this.account.phone;				
			}
			
		},
	},
};
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
