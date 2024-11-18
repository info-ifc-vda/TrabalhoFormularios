function ola() {
    alert("oiiiiiiiiii")
}

function mudarParaDarkMode() {
    var corpo = document.querySelector("body")
    corpo.classList.toggle('dark-mode')
}

var botao = document.querySelector("#dark-mode-btn")
botao.addEventListener('click', mudarParaDarkMode)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()
    var dados = new FormData(formulario)

    var nome = dados.get('nome')
    var email = dados.get('email')
    var telefone = dados.get('tel')
    var avaliacao = dados.get('avaliacao')
    var sug = dados.get('sug')
    var termos = dados.get('termos')
    var todos = {
        nome, email, telefone, avaliacao, sug, termos
    }

    console.log(todos)

    localStorage.setItem('dados', JSON.stringify(todos))

    formulario.reset

    document.location.href = 'agradecimento.html'
}