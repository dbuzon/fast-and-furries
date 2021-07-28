<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="cadastro">
					<form onsubmit="signup(event)">
						<h2 class="text-center">
							<i class="fa fa-user"></i> Cadastre-se
						</h2>
						<br />
						<p>Nome</p>
						<input
							id="user-name"
							type="text"
							v-model="name"
						/><br />
						<br />

						<p>CPF</p>
						<input id="user-cpf" type="text" v-model="cpf" /><br />
						<br />

						<p>Endereço</p>
						<input
							id="user-address"
							type="text"
							v-model="address"
						/><br />
						<br />

						<p>E-mail</p>
						<input
							id="user-email"
							type="text"
							v-model="email"
						/><br />
						<br />

						<p>Senha</p>
						<input
							id="user-password"
							type="password"
							v-model="password"
						/><br />
						<br />

						<input
							type="submit"
							value="Cadastrar"
							@click="singUp($event)"
						/><br />
						<br />

						<p>
							Já é cadastrado?
							<router-link to="/login">Faça login</router-link>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cadastro",
	data() {
		return {
			name: "",
			cpf: "",
			address: "",
			email: "",
			password: "",
		};
	},
	methods: {
		async singUp(event) {
			event.preventDefault();
			if (
				this.name == "" ||
				this.cpf == "" ||
				this.address == "" ||
				this.email == "" ||
				this.password == ""
			) {
				alert("Preencha todos os campos!");
			} else {
				// Searching for an account with given credentials
				let response = await fetch("http://localhost:3000/accounts/");
				let accounts = await response.json();

				let exists = false;
				for (let account of accounts) {
					if (account.email == this.email) {
						exists = true;
						break;
					}
				}

				if (exists == true) {
					alert("Já existe uma conta cadastrada com esse e-mail!");
				} else {
					let id = 1;
					while (true) {
						let used = false;
						for (let account of accounts) {
							if (account.id == id) used = true;
						}

						if (used == false) {
							let new_account = {
								admin: false,
								id: id,
								name: this.name,
								cpf: this.cpf,
								email: this.email,
								password: this.password,
								address: this.address,
								phone: "",
							};

							await fetch(
								"http://localhost:3000/accounts/" + id,
								{
									method: "PUT",
									headers: {
										Accept: "application/json",
										"Content-Type": "application/json",
									},
									body: JSON.stringify(new_account),
								}
							);

							alert("Cadastro realizado com sucesso!");

							this.$cookies.set("account_id", id);
							window.location.href = "/perfil-cliente";

							break;
						} else id++;
					}
				}
			}
		},
	},
};
</script>

<style scoped>
.cadastro {
	width: 100%;
	max-width: 450px;
	background-color: white;
	margin: 60px auto;
	box-shadow: 0px 0px 5px #ccc;
	padding: 30px 60px;
}

h2 {
	font-size: 20px;
	font-weight: bold;
}

p {
	margin-bottom: 10px;
}

input {
	width: 100%;
}
</style>
