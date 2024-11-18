var botao = document.querySelector("#dark-mode-botao")


function mudarParaDarkMode() {
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode')
}

botao.addEventListener('click', mudarParaDarkMode)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var dv = dados.get('dv')
    var nota = dados.get('nt')
    var av = dados.get('av')
    var rb = dados.get('rb')

    var dadosObjeto = {
        nome, dv, nota, av, rb

    }

    console.log(dadosObjeto);
    localStorage.setItem('dados', JSON.stringify(dadosObjeto)
    )

    formulario.reset()

    window.location.href = 'obrigado.html'

}

