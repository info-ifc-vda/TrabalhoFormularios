function mudarparamododark(){
    var body = document.querySelector("body")
    body.classList.toggle("dark-mode")
}

var botao = document.querySelector("#dark-mode-botao")
botao.addEventListener('click', mudarparamododark)

function enviar (evento){
    evento.preventDefault()
    console.log (evento)
}

var dados = new FormData(form)
var Nome = dados.get ('Nome')
var email = dados.get ('email')
var Idade = dados.get ('Idade')
var genero_filme = dados.get ('genero-filme')
var serie = dados.get ('serie')
var pq = dados.get ('pq')


var dadosObjeto = {
    Nome, email, Idade, genero_filme, serie, pq
}
form.reset()
localStorage.setItem('dados', JSON.stringify(dadosObjeto))


var form = document.querySelector('form')
form.addEventListener("submit", enviar)
