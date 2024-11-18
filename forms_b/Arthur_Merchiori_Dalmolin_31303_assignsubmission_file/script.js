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
    var tel = dadosDoFormulario.get('tel')
    var data = dadosDoFormulario.get('data-nascimento')
    var sexo = dadosDoFormulario.get('sexo')
    var genero = dadosDoFormulario.get('genero-li')
    var obs = dadosDoFormulario.get('obs')
    var termos = dadosDoFormulario.get('termos')
    

    //Objeto com todos os dados
    
    var dados = {
        nome, email, tel, data,
         sexo, genero, obs, termos

    }

    console.log (dados)
    // Salvar no banco de dados
    localStorage.setItem('banco', JSON.stringify (dados))
    // Limpar o formulário
    formulario.reset()
    //Redirecionar para outra página HTML
    document.location.href = 'resultado.html'



}