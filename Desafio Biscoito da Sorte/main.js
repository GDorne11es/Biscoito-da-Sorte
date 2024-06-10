const texts = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
]


function handleClick1() {
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")

    document.querySelector(".screen2 h2").innerText = texts[0]
}

function handleClick2() {
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")

    texts.shift()
}