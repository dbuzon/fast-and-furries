<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="quiz">
                    <h2 class="text-center"><i class="fa fa-asterisk fa-fw" style="color: var(--rosa);"></i> Quiz <i class="fa fa-asterisk fa-fw" style="color: var(--rosa);"></i></h2>
                    <p class="text-center">Com qual bichinho você se parece mais?</p>
                    <br>
                    <ul v-for="(quest, index) in questions" :key="quest.text">
                        <p><span>{{index+1}}.</span> {{quest.text}}</p>
                        <li v-for="opt in quest.options" :key="opt.text">
                            <input type="radio" :name="index" :value="opt.value" :id="opt.id"  v-model="selected[index]"> 
                            <label :for="opt.id">{{opt.text}}</label><br>                           
                        </li>
                    </ul>

                    <table v-show="showResult">
                        <tr>
                            <td><img  :src="results[result].img" alt=""></td>
                            <td>
                                <h2>{{results[result].title}}</h2>
                                <p>{{results[result].text}}</p>                                
                            </td>
                        </tr>
                    </table>
                    
                    <input v-show="!showResult" @click="getResult" class="center-block" type="submit" value="Resultado">
                    <input v-show="showResult" @click="refresh" class="center-block" type="submit" value="Refazer o Teste">
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    name: 'Quiz',  
    data() {
        return {
            publicPath: process.env.BASE_URL,
            showResult: false,
            selected: [,,],
            questions: [{
                text: 'No rolê, você é o amigo que...',
                options: [
                    {id: 'q1op1', text: 'Cuida dos amigos quando todo mundo deu pt', value: 'dog'},
                    {id: 'q1op2', text: 'Pega metade da galera e nem lembra no dia seguinte', value: 'cat'},
                    {id: 'q1op3', text: 'Fica no seu cantinho aproveitando a sua bebida', value: 'turtle'},
                    {id: 'q1op4', text: 'No rolê, você é o amigo que...', value: 'parrot'},
                ]
            },{
                text: 'Na quarentena, você...',
                options: [
                    {id: 'q2op1', text: 'Aproveitou o tempo em casa pra cuidar de você mesmo', value: 'cat'},
                    {id: 'q2op2', text: 'Ficou tranquilo e preparou umas receitas novas', value: 'turtle'},
                    {id: 'q2op3', text: 'Na quarentena, você...', value: 'parrot'},
                    {id: 'q2op4', text: 'Ficou deprimido em casa com saudade dos amigos', value: 'dog'},
                ] 
            },{
                text: 'O tipo de pessoa que você mais acha chata é...',
                options: [
                    {id: 'q3op1', text: 'O tipo de pessoa que você mais acha chata é...', value: 'parrot'},
                    {id: 'q3op2', text: 'Quem nunca tá animado pra nada', value: 'dog'},
                    {id: 'q3op3', text: 'Quem anda sempre com pressa e nunca tem tempo sobrando', value: 'turtle'},
                    {id: 'q3op4', text: 'Gente que não sabe respeitar espaço pessoal', value: 'cat'},
                ] 
            },{
                text: 'Se você ganhasse um milhão de reais, a primeira coisa a fazer seria...',
                options: [
                    {id: 'q4op1', text: 'Investir numa casa enorme e confortável', value: 'turtle'},
                    {id: 'q4op2', text: 'Se você ganhasse na loteria, a primeira coisa a fazer seria...', value: 'parrot'},
                    {id: 'q4op3', text: 'Renovaria todos os móveis e colocaria o resto no banco', value: 'cat'},
                    {id: 'q4op4', text: 'Comprar um carro esporte e sair andando por aí com os amigos', value: 'dog'},
                ] 
            },{
                text: 'Nas férias, tudo o que você precisa é...',
                options: [
                    {id: 'q5op1', text: 'Zerar a Netflix, HBO, Disney+...', value: 'cat'},
                    {id: 'q5op2', text: 'Viajar até não poder mais', value: 'dog'},
                    {id: 'q5op3', text: 'Ler com calma todos os livros atrasados', value: 'turtle'},
                    {id: 'q5op4', text: 'Nas férias, tudo o que você precisa é...', value: 'parrot'},
                ] 
            },{
                text: 'Qual seu desenho de infância favorito?',
                options: [
                    {id: 'q6op1', text: 'Coragem, o cão covarde', value: 'dog'},
                    {id: 'q6op2', text: 'Tartarugas Ninja', value: 'turtle'},
                    {id: 'q6op3', text: 'Qual seu desenho de infância favorito?', value: 'parrot'},
                    {id: 'q6op4', text: 'Tom & Jerry', value: 'cat'},
                ] 
            },{
                text: 'Seu BFF ideal...',
                options: [
                    {id: 'q7op1', text: 'Seu BFF ideal...', value: 'parrot'},
                    {id: 'q7op2', text: 'Te faz uns cafunés quando você tá afim', value: 'cat'},
                    {id: 'q7op3', text: 'É cheio de energia e tá sempre disposto a ajudar', value: 'dog'},
                    {id: 'q7op4', text: 'Gosta de fazer altos nada com você', value: 'turtle'},
                ] 
            }],
            results: [{
                img: require('@/assets/images/gato.png'),
                title: 'Gato 🐱',
                text: 'Você é super independente e sabe se virar sozinho, assim como os gatinhos, esses seres super fofos e com a autoestima sempre no topo. Apesar dessa independência toda, você é uma ótima companhia para pessoas que pensam parecido com você!',
            },{
                img: require('@/assets/images/cachorro.png'),
                title: 'Cachorro 🐶',
                text: 'Você é cheio de energia e gosta da companhia dos seus amigos. Cachorros também são assim, super animados! Um ótimo bichinho para os mais necessitados de atenção ou que gostam de estar passeando pela cidade sempre.',
            },{
                img: require('@/assets/images/tartaruga.png'),
                title: 'Tartaruga 🐢',
                text: 'Calmo, paciente, relaxado... É o que todos dizem assim que conversam um pouquinho com você, não é? Sempre tranquilo como uma... Tartaruga! Esse bichinho é uma ótima escolha para os que prezam pelo ditado do "devagar se vai longe".',
            },{
                img: require('@/assets/images/papagaio.png'),
                title: 'Papagaio 🦜',
                text: 'Você... Gosta de repetir o que te dizem, pelo visto? Apesar da falta de criatividade, você é uma companhia amada e cheia de carisma, e as pessoas amam te contar as coisas e ver que você prestou atenção em tudo! Uma ótima escolha para quebrar o climão daqueles dias silenciosos, quando tudo parece estar tão quietinho.',
            }],
            result: 0,
        }
    },
    methods: {
        getResult() {            
            let c = 0, d = 0, t = 0, p = 0;
            for (let i = 0; i < this.selected.length; i++) {
                if (this.selected[i] == 'cat') c++;
                else if (this.selected[i] == 'dog') d++;
                else if (this.selected[i] == 'turtle') t++;
                else if (this.selected[i] == 'parrot') p++;
            }

            if (c+d+t+p !== 7) {
                alert("Preencha todas as questões!");
            }  
            else {
                if (c >= d && c >= t && c >= p) this.result = 0;
                else if (d >= c && d >= t && d >= p) this.result = 1;
                else if (t >= d && t >= c && t >= p) this.result = 2;
                else if (p >= d && p >= c && p >= t) this.result = 3;
                this.showResult = true;
            }                        
        },
        refresh() {
            this.showResult = false;
            this.selected = [,,];
        },
    }
}
</script>

<style scoped>
.quiz{
    width: 100%;
    max-width: 750px;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 60px;
    box-shadow: 0px 0px 5px #ccc;
    padding:30px 60px;    
}

.center-block {
    display: block;
    margin: auto auto;
}

.hide-content {
    display: none;
}

.show-content {
    display: inline;
}

td {
    padding: 30px;
    vertical-align: top;
    text-align: justify;    
}

td img {
    width: 200px;
    border-radius: 3px;
}

td h2 {
    color: var(--rosa);
}

label {
    font-family: 'RobotoS';
    color: #696969;
}

h2{
    font-size: 20px;
    font-weight: bold;
}

p{
    margin-bottom: 10px;
}

.quiz span {
    color: var(--rosa);
    font-weight: bold;
}

</style>