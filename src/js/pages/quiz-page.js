window.onload = init;

function init(){
    refreshCart();

    const btn = document.querySelector('[data-btn]')
    const res = document.querySelector('[data-result]')
    const resImg = document.querySelector('[data-img]')
    const resTitle = document.querySelector('[data-title]')
    const resText = document.querySelector('[data-text]')

    btn.addEventListener("click", () => {
        const questions = document.querySelectorAll("input[type='radio']")
        let d = 0, c = 0, t = 0, p = 0
        for (let i = 0; i < 28; i++) {
            if(questions[i].checked) {
                if(questions[i].value == "dog") d++
                else if(questions[i].value == "cat") c++
                else if(questions[i].value == "turtle") t++
                else p++
            }
        }
        if (d+c+t+p !== 7) {
            alert("Preencha todas as questões, por favor.")
        }
        else {
            let animal = selectAnimal(d, c, t, p)
            resImg.src = animal.img
            resTitle.textContent = animal.title
            resText.textContent = animal.text
            res.className = "show-content"
        }        
    })
}

function selectAnimal(d, c, t, p) {
    const cat = new Result("image/gato.png", "Gato", "Você é super independente e sabe se virar sozinho, assim como os gatinhos, esses seres super fofos e com a autoestima sempre no topo. Apesar dessa independência toda, você é uma ótima companhia para pessoas que pensam parecido com você!")
    const dog = new Result("image/cachorro.png","Cachorro", "Você é cheio de energia e gosta da companhia dos seus amigos. Cachorros também são assim, super animados! Um ótimo bichinho para os mais necessitados de atenção ou que gostam de estar passeando pela cidade sempre.")
    const turtle = new Result("image/tartaruga.png","Tartaruga", "Calmo, paciente, relaxado... É o que todos dizem assim que conversam um pouquinho com você, não é? Sempre tranquilo como uma... Tartaruga! Esse bichinho é uma ótima escolha para os que prezam pelo ditado do \"devagar se vai longe\".")
    const parrot = new Result("image/papagaio.png","Papagaio", "Você... Gosta de repetir o que te dizem, pelo visto? Apesar da falta de criatividade, você é uma companhia amada e cheia de carisma, e as pessoas amam te contar as coisas e ver que você prestou atenção em tudo! Uma ótima escolha para quebrar o climão daqueles dias silenciosos, quando tudo parece estar tão quietinho.")

    if (d >= c && d >= t && d >= p) return dog
    else if (c >= d && c >= t && c >= p) return cat
    else if (t >= d && t >= c && t >= p) return turtle
    else if (p >= d && p >= c && p >= t) return parrot    
}

function Result(img, title, text) {
    this.img = img
    this.title = title
    this.text = text
}