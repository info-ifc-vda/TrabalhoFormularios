

function mudarParaDark() {
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode')
}

var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click', mudarParaDark)

// salvar os Dados 

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

    var sexo = dadosDoFormulario.get('Café')
    var curso = dadosDoFormulario.get('Cidade')
    var obs = dadosDoFormulario.get('obs')
    var termos = dadosDoFormulario.get('termos')

    // Objeto com todos os dadosz
    var dados = {
        nome, email, tel, data,
        sexo, curso, obs, termos
    }

    console.log(dados)

    //salvar no banco de dados 
    localStorage.setItem('banco',
        JSON.stringify(dados))
    //limpar o formulário
    formulario.reset()
    //Redirecionar para outra pagina HTML
    document.location.href = 'resultado.html'

}












