function ola() {
  alert("Olá")
}
function mudarParaDark() {
  var corpo = document.querySelector('body')
  corpo.classList.toggle('dark-mode')

}

var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click', mudarParaDark)

//Salvar os Dados

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
  evento.preventDefault()
  var dadosDoFormulario = new FormData(formulario)
  var nome = dadosDoFormulario.get('nome')
  var email = dadosDoFormulario.get('email')
  var tel = dadosDoFormulario.get('tel')
  var data = dadosDoFormulario.get('data-nascimento')
  var posição = dadosDoFormulario.get('posição')
  var experiência = dadosDoFormulario.get('experiência')
  var time = dadosDoFormulario.get('time-atualmente')
  var nmtime = dadosDoFormulario.get('nmtime')
  var camisa = dadosDoFormulario.get('camisa')
  var treinos = dadosDoFormulario.get('treinos')

  //Objeto com todos od Dados

  var dados = {
      nome, email, tel, data,posição,experiência,time,nmtime,camisa,treinos
  }
  console.log(dados)


//Salvar no banco de dados

localStorage.setItem('banco', JSON.stringify(dados))

//limpar o formulário

formulario.reset()

//redirencionar para outra pagina

document.location.href = 'resultados.html'

}