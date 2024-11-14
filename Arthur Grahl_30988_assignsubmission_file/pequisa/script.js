var botao = document.querySelector("#dark-mode-botao") //QuerySelector seleciona alguma coisa

function mudarParaDarkMode(){
    // alert('Teste')
    var corpo = document.querySelector('body')
    // Adicionar ou remover a classe dark-mode
    corpo.classList.toggle('dark-mode')
}

botao.addEventListener('click', mudarParaDarkMode) // Vai ficar esperando o botão ser clicado

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento){
    // Prevenir a ação padrão
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var sexo = dados.get('genero')
    var campus = dados.get('campus')
    var didatica = dados.get('dida')
    var adequadamente = dados.get('adequadamente')
    var acompanhar = dados.get('acompanhar')
    var termos = dados.get('termos')

    // Objeto com os dados do formulário
    var dadosObjeto = {
        nome, sexo, campus, didatica, adequadamente, acompanhar, termos
    }
    console.log(dadosObjeto)

    // Salvar os dados no banco de dados do navegador

    localStorage.setItem('dados', JSON.stringify(dadosObjeto)) // Vai converter em um formato de texto

    // Limpar o formúlario

    formulario.reset()

    // Recirecionar

    window.location.href = 'resultado.html'
}