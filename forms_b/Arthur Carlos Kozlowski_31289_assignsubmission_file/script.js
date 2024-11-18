function mudarParaDark() {
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode')

}

var botão = document.querySelector('#dark-mode-botao')
botão.addEventListener('click', mudarParaDark)


var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()
    var dadosDoFormulario = new FormData(formulario)

    var nome = dadosDoFormulario.get('nome')
    var email = dadosDoFormulario.get('email')
    var tel = dadosDoFormulario.get('tel')

    var estrela = dadosDoFormulario.get('estrela')
    var avaliacaodescritiva = dadosDoFormulario.get('avaliacaodescritiva')
    var termos = dadosDoFormulario.get('termos')
    var data = dadosDoFormulario.get('data')
    var sabor = dadosDoFormulario.get('sabor')

    var dados = {
        nome, email, tel,
        estrela, avaliacaodescritiva, termos, data, sabor
    }
    console.log(dados)
    localStorage.setItem('banco', JSON.stringify(dados))
    formulario.reset()
    document.location.href = 'agradecimento.html'
}