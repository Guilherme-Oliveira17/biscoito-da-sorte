//declaração de variáveis//
const screen1 = document.querySelector(".cookie-1")
const screen2 = document.querySelector(".cookie-open")
const imgCookie = document.querySelector(".cookie-1 img")
let randomPhrase = Math.round(Math.random() * 10)


//frases//

let phrases = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A palavra “impossível” foi inventada para ser desafiada.",
    "A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.",
    "Apreciando cada passo, mas já sonhando com as próximas conquistas!",
    "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
    "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
    "Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.",
    "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",
    "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!",
    "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!"
]

//eventos//

imgCookie.addEventListener('click', openCookie)
screen2.querySelector('button').addEventListener('click', btnReset)

//funções//

function openCookie(){
    toggleScreen()
    newPhrase()
}

function newPhrase(){
    screen2.querySelector("p").innerText = phrases[randomPhrase]
}
function btnReset(){
    toggleScreen()
    randomPhrase = Math.round(Math.random() * 10)
}
    
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
