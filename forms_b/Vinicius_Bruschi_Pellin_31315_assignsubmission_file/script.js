
function mudarParaDarkMode() {
    var corpo = document.querySelector("body")
    corpo.classList.toggle('dark-mode')
}

var botao = document.querySelector("#dark-mode-botao")
botao.addEventListener('click' , mudarParaDarkMode)

// Pegar dados do formulário

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()
    var dados = new FormData (formulario)
    console.log(dados)

    var nome = dados.get('nome')
    var email = dados.get('email')
    var telefone = dados.get('tel')
    var obs = dados.get('obs')
    var avaliacao = dados.get('avaliacao')

    console.log(nome, email, telefone)

    var todos = {nome, email, telefone, avaliacao, obs, 

    }
    
    console.log(dados)

    // Salvar no banco de dados
    localStorage.setItem('dados', JSON.stringify(todos))

    // Limpar o formulário
    formulario.reset()

    // Redirecionar para página de resultado
    document.location.href = 'agradecimentos.html' 

}