var botao = document.querySelector("#dark-mode-botao")
console.log(botao)

function mudarParaDarkMode(){
    var corpo = document.querySelector('body')
    // Adicionar ou remover a classe dark-mode
    corpo.classList.toggle('dark-mode')
}

botao.addEventListener('click', mudarParaDarkMode)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    //Previnir a ação padrão
    evento.preventDefault()
    alert("Formulário enviado")

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var data = dados.get('data assistiu')
    var sexo = dados.get('avaliacao')
    var curso = dados.get('série')
    var obs = dados.get('obs')
    var termos = dados.get('termos')

    console.log(nome, email, data, serie,obs, termos);

    // se não aceitar os termos de uso retornar

    if (!termos) {
        alert("você precisa aceitar os termos de uso")
        return
    }

    //Objeto com os dados do fomulário

    var dadosObjeto = {
        nome, email, telefone, data, sexo, curso, obs, termos
    }
    console.log(dadosObjeto)

    //Salvar os dados no banco de dados do navegador
    localStorage.setItem('dados', 
        JSON.stringify(dadosObjeto)
    )
    //Limpar o formuláro
    formulario.reset()

    //redirecionar para o resultado.html
    window.location.href = 'resultado.html'
}
