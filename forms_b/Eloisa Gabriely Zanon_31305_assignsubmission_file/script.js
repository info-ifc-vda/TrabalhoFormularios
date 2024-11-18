function ola() {
    alert("oiiiii")
}

var botao = document.querySelector("#dark-mode-botao")
botao.addEventListener('click', mudarParaDarkMode)

function mudarParaDarkMode() {
    var corpo = document.querySelector("body")
    corpo.classList.toggle('dark-mode')
}

//pegar dados do formulario

var formulario = document.querySelector ('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()
    var dados = new FormData (formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var sexo = dados.get ('genero')
    var curso = dados.get ('curso')
    var obs = dados.get ('obs')
    var obse = dados.get ('obse')
    var termos = dados.get ('termos')
    

    var todos = {
        nome, email, sexo, curso, obs, obse, termos
    }

    console.log (todos)

    //salvar banco de dados
    localStorage.setItem('dados', JSON.stringify(todos))

    //limpar formulario
    formulario.reset

    //redirecionar para pg de resultado
    document.location.href = 'resultado.html'
}



