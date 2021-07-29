<template>
    <div class="container text-left">
        <div class="row">
            <div class="col-md-12">
                <h2>Gerenciar Usuários</h2>
                <hr>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12">                       
                <div class="manage-box">      
                    <div>
                        <h2>Usuários</h2>
                    </div> 
                    <br>
                    <table>
                        <tr v-for="user in users" :key="user.id">
                            <td><p>{{user.id}}</p></td>
                            <td><p>{{user.name}}</p></td>
                            <td><p>{{user.cpf}}</p></td>
                            <td><p>{{user.email}}</p></td>
                            <td>{{chooseType(user.admin)}}</td>
                            <td><input type="submit" value="Mudar Tipo" @click="changeType(user.id)"></td>
                        </tr>                                                             
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GerenciarUsuario',  
    data() {
        return {
            users: [],
        }
    },
    created() {
        this.checkAdmin();
        this.getAccounts(); 			
    },
    methods: {
        chooseType(type) {
            if (type) return "Admin"
            return "Cliente"
        },
        async changeType(id) {
            
            for (let user of this.users) {                
                if (user.id == id) {
                    user.admin = !user.admin;                    
                    fetch("http://localhost:3000/accounts/"+id, {
                        method: "PUT",
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user),                        
                    });
                    break;
                }
            }
        },
        async getAccounts() {
            let response = await fetch("http://localhost:3000/accounts");
			let json = await response.json();
            this.users = json;
        },
        async checkAdmin() {
			let accountId = this.$cookies.get("account_id");
			if (accountId == null) {
				alert(
					"Você precisa estar logado como administrador para acessar esta página."
				);
				window.location.href = "/";
			} else {
				let response = await fetch(
					"http://localhost:3000/accounts/" + accountId
				);
				let account = await response.json();

				if (account.admin == false) {
					alert(
						"Você precisa estar logado como administrador para acessar esta página."
					);
					window.location.href = "/";
				}
			}
		},
    }
}
</script>

<style scoped>
.manage-box{
    width: 100%;
    max-width: 900px;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 60px;
    box-shadow: 0px 0px 5px #ccc;
    padding:30px 30px;    
    margin-top:40px;
}

table {
    background-color: #f4f4f4;
    border-radius: 3px;
    margin: 0 auto;
}

td {
    padding: 15px;
    max-width: 300px;
}

.manage-box h2{
    font-size: 20px;
}
</style>