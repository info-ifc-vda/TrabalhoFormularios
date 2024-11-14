function mudarparadark() {
    var corpo = document.querySelector("body")
    corpo.classList.toggle("dark-mode")
}

var botao = document.querySelector("#dark-mode-botao")
botao.addEventListener("click", mudarparadark )


function enviar(evento){
    evento.preventDefault()
    console.log(evento)


    var dados = new FormData(form)
    var nome = dados.get("nome")
    var email = dados.get("email")
    var telefone = dados.get("telefone")
    var filme = dados.get("filme")
    var preferencia = dados.get("preferencia")
    var termos = dados.get("termos")

    if(termos == false){
        alert("Aceite os termos")
        return
    }

    var dadosObjeto = {
        nome, email, telefone, filme, preferencia, termos
    }

    console.log (dadosObjeto);

    form.reset()
    localStorage.setItem("dados", JSON.stringify(dadosObjeto))
    document.location.href = "redireção.html"
}

var form = document.querySelector("form")
form.addEventListener("submit", enviar)