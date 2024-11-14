function ola() {
    alert ("oioi")
}

function mudarParaDark() {
    var corpo = document.querySelector ('body')
    corpo.classList.toggle('dark-mode')

}


var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click', mudarParaDark)

// Salvar os dados

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento)  {
    evento.preventDefault ()
    var dadosDoFormulario =
        new FormData (formulario)
    
    var nome = dadosDoFormulario.get('nome')
    var email = dadosDoFormulario.get('email')
    var idade = dadosDoFormulario.get('idade')
    var gostar = dadosDoFormulario.get('gostar')
    var frequencia = dadosDoFormulario.get('frequencia')
    var local = dadosDoFormulario.get('local')
    var momento = dadosDoFormulario.get('momento')
    var primeiro = dadosDoFormulario.get('primeiro')
    var conjunto = dadosDoFormulario.get('conjunto')
    var influenciar = dadosDoFormulario.get('influenciar')
    var autor = dadosDoFormulario.get('autor')
    var favorito = dadosDoFormulario.get('favorito')
    var sugestao = dadosDoFormulario.get('sugestao')
    var obs = dadosDoFormulario.get('obs')
    var termos = dadosDoFormulario.get('termos')

    //Objeto com todos os dados
    
    var dados = {
        nome, email, idade, gostar, frequencia, local, momento,primeiro, conjunto, influenciar, autor, favorito, sugestao, obs, termos

    }

    console.log (dados)
    // Salvar no banco de dados
    localStorage.setItem('banco', JSON.stringify (dados))
    // Limpar o formulário
    formulario.reset()
    //Redirecionar para outra página HTML
    document.location.href = 'resultado.html'


}