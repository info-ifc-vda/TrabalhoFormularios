function mudarParaModoDark() {
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode')
}

var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click', mudarParaModoDark)

var formulario = document.querySelector('form')
formulario.addEventListener("submit", enviar)

function enviar(evento) {
    evento.preventDefault()
    var dados = new FormData(formulario)
    var nome = dados.get("nome")
    var email = dados.get("email")
    var genero = dados.get("genero")
    var livro = dados.get("livro")
    var obs = dados.get("obs")







    var dadosObjeto = { nome, email, genero, obs, livro }
    console.log(JSON.stringify(dadosObjeto));

    localStorage.setItem('dados', JSON.stringify(dadosObjeto))
    formulario.reset()

    document.location.href = "obrigado.html"
}