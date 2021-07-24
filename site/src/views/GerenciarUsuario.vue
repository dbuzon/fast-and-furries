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
            users: [{
                id:'1',
                name: 'user',
                cpf: '99999',
                email: 'user@email.com',
                admin: false,
            }, {
                id:'2',
                name: 'admin',
                cpf: '00000',
                email: 'admin@email.com',
                admin: true,
            },]
        }
    },
    methods: {
        chooseType(type) {
            if (type) return "Admin"
            return "Cliente"
        }
    }
}
</script>

<style scoped>
.manage-box{
    width: 100%;
    max-width: 750px;
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