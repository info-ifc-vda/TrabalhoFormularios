
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
    var dadosDoFormulario = new FormData(formulario)

    var nome = dadosDoFormulario.get('Nome')
    var email = dadosDoFormulario.get('email')
    var number = dadosDoFormulario.get('number')
    var tel = dadosDoFormulario.get('tel')
    var data = dadosDoFormulario.get('data-nascimento')
    var sexo = dadosDoFormulario.get('Sexo')
    var curso = dadosDoFormulario.get('exp')
    var obs = dadosDoFormulario.get('obs')
    var termos = dadosDoFormulario.get('termos')

    var dados = {
        nome, email, number, tel, data,
        sexo, exp, obs, termos
    }

    console.log(dados)

    localStorage.setItem('Academia', JSON.stringify(dados))
    formulario.reset()
    document.location.href = 'Agradecimento.html'

}