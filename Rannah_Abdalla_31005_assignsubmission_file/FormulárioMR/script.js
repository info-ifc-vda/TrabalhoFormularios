
function mudarParaModoDark(){
    var corpo = document.querySelector('body')
    corpo.classList.toggle('dark-mode') 
}

var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click', mudarParaModoDark)


var formulario = document.querySelector('form') 
formulario.addEventListener("submit" , enviar)

function enviar (evento){
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get("nome")
    var email = dados.get("email")
    var nascimento = dados.get("nascimento")
    var pele = dados.get("pele")
    var produto = dados.get("produto")
    var nota = dados.get("nota")
    var reacao = dados.get("reacao")
    var review = dados.get("review")
    var sugs = dados.get("sugs")

    if (!termos){
        alert("Você precisa aceitar os termos de uso!")
        return
    }


    var dadosObjeto = {nome, email, nascimento, pele, produto, nota, reacao, review, sugs, termos }
    console.log(JSON.stringify(dadosObjeto));



    localStorage.setItem('dados' , JSON.stringify(dadosObjeto))


    formulario.reset()


    document.location.href = "final.html"


}
