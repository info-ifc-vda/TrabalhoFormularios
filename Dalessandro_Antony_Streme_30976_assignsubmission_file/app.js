//Esse é o botão no html
var botao = document.querySelector("#dark-mode-botao")

function mudarParaDarkMode() {
   // alert("Teste")
   var corpo = document.querySelector('body')
   //Adicionar ou remover a class dark-mode
   corpo.classList.toggle('dark-mode')
}

botao.addEventListener('click', mudarParaDarkMode)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
   /*Previnir a ação padrão de recarregar a 
   tela e apagar todos os dados automaticamente, faremos isso manualmente*/
   evento.preventDefault()

   var dados = new FormData(formulario)
   var nome = dados.get('nome')
   var email = dados.get('email')
   var telefone = dados.get('telefone')
   var data = dados.get('data-nascimento')
   var sexo = dados.get('genero')
   var curso = dados.get('ling')
   var obs = dados.get('obs')
   var termos = dados.get('termos')

   //Objeto com os dados do formulário
   var dadosObjeto = {
      nome, email, telefone, data, sexo, ling, obs, termos
   }
   console.log(dadosObjeto);

   //Salvar os dados no banco de dados do navegador
   localStorage.setItem('dados', JSON.stringify(dadosObjeto))
   //Limpar o formularrio
   formulario.reset()
   //redirecionar
   window.location.href = 'resultado.html'
}