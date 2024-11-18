var botao = document.querySelector("#dark-mode-botao")
console.log(botao)

function mudarParaDarkMode(){
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode')
}

botao.addEventListener('click', mudarParaDarkMode)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()
    alert("Avaliação enviada")

    var dados = new FormData(avaliacao)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var data = dados.get('data-nascimento')
    var restaurante = dados.get('restaurante')
    var feedback = dados.get('feedback')

    var dadosObjeto = {
        nome, email, data, restaurante, feedback
    }
    console.log(dadosObjeto)

    localStorage.setItem('dados', 
        JSON.stringify(dadosObjeto)
    )

    formulario.reset()
    window.location.href= 'resultado.html'
}