var darkModeBotao = document.getElementById("dark-mode-botao");
var body = document.querySelector('body')

darkModeBotao.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
var formulario = document.querySelector('form')
formulario.addEventListener("submit", enviar)

function enviar(evento) {
    evento.preventDefault()

    
    var dados = new FormData(formulario)
    var nome = dados.get("nome")
    var email = dados.get("email")
    var data = dados.get("data-nascimento")
    var genero = dados.get("genero")
    var nivel = dados.get("nivel")
    var obs = dados.get("obs")
    var rating = dados.get("rating")

    console.log(nome, email, data, genero, nivel, obs, rating);

    // convertendo para objeto

    var dadosObjeto = { nome, email, data, genero, nivel, obs, rating }
    console.log(dadosObjeto)

   // gravar dados no LocalStorage usando padrão JSON

   localStorage.setItem('dados', JSON.stringify(dadosObjeto))

   // limpar o formulário

   formulario.reset()

   // redirecionar para resultado.html

   document.location.href = "obrigado.html"

}