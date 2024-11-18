function ola() {
    alert("oiiii")
}

function mudarParaDark() {
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode')
}
var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click', mudarParaDark)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()
    var dadosDoFormulario =
        new FormData(formulario)

    var nome = dadosDoFormulario.get('nome')
    var email = dadosDoFormulario.get('email')
    var tel = dadosDoFormulario.get('tel')
    var data = dadosDoFormulario.get('data-nascimento')
    var genero = dadosDoFormulario.get('genero')
    var curso = dadosDoFormulario.get('curso')
    var obs = dadosDoFormulario.get('obs')
    var termos = dadosDoFormulario.get('termos')

    var dados = {
        nome, email, tel, data, genero, curso, obs, termos
    }

    console.log(dados)
    
    localStorage.setItem('banco', 
        JSON.stringify(dados))
    formulario.reset()
    document.location.href = 'resultado.html'
}
