function mudarParaDarkMode() {
    var corpo = document.querySelector("body")
    corpo.classList.toggle('dark-mode')
}

var botao = document.querySelector("#dark-mode-botao")
botao.addEventListener('click', mudarParaDarkMode)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()
    var dados = new FormData(formulario)

    var nome = dados.get('nome')
    var email = dados.get('email')
    var telefone = dados.get('tel')
    var dataNascimento = dados.get('data-nascimento')
    var sexo = dados.get('genero')
    var area = dados.get('area')
    var habi = dados.get('habi')
    var moti = dados.get('moti')
    var obs = dados.get('obs')
    var termos = dados.get('termos')
    var todos = {
        nome, email, telefone, dataNascimento, sexo, area, habi, moti, obs, termos
    }

    console.log(todos)

    localStorage.setItem('dados', JSON.stringify(todos))

    formulario.reset

    document.location.href = 'resultado.html'
}