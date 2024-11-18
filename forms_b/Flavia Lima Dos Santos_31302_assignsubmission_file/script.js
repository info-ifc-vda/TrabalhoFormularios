
function mudarParaDark() {
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode')
  }

var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click', mudarParaDark)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
  alert("teste")
}

function enviar(evento) {
  evento.preventDefault()
  var dadosDoFormulario = new FormData (formulario)

  var nome = dadosDoFormulario.get ('nome')
  var email = dadosDoFormulario.get ('email')
  var tel = dadosDoFormulario.get ('tel')
  var data = dadosDoFormulario.get ('data-nascimento')
  var sexo = dadosDoFormulario.get ('sexo')
  var curso = dadosDoFormulario.get ('curso')
  var obs = dadosDoFormulario.get ('obs')
  var termos = dadosDoFormulario.get ('termos')

  var dados = {
    nome ,email ,tel ,data ,sexo ,curso ,obs ,termos
  }

  console.log (dados)

  //salvar banco de dados
  localStorage.setItem('banco', JSON.stringify(dados))
  //limpar formulário
  formulario.reset()
  //redirecionar para outra pagina HTML 
  document.location.href = 'resultado.html'

}



