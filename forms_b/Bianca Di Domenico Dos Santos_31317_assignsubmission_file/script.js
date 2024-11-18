function mudarParaDark() {
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode')
    }
    var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click',mudarParaDark)

var formulario = document.querySelector('form')
formulario.addEventListener('submit',enviar)

function enviar(evento) {
evento.preventDefault()
var dadosDoFormulario = new FormData(formulario)
var nome = dadosDoFormulario.get('nome')
var tel = dadosDoFormulario.get('telefone')
var data = dadosDoFormulario.get('datanascimento')
var data = dadosDoFormulario.get('data')
var frequencia = dadosDoFormulario.get('frequencia')
var dores = dadosDoFormulario.get('dores')
var aparelho = dadosDoFormulario.get('aparelho')
var email= dadosDoFormulario.get('email')

//Objeto com todos os dados

var dados = {
nome, tel, data, frequencia, datanascimento, dores, aparelho, email
}

console.log(dados)

//Salvar no Banco de Dados
localStorage.setItem('banco', JSON.stringify(dados))

//Limpar Formularo
formulario.reset()

//Redirecionar Para Outra Paina HTML

document.location.href = 'index2.html'
}