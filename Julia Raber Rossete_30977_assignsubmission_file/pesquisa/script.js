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
    var telefone = dados.get("telefone")
    var sabores = dados.get("sabores")
    var obs = dados.get("obs")
    var frequencia = dados.get("frequencia")

    var dadosObjeto = {nome, telefone, sabores, obs,frequencia }
    console.log(JSON.stringify(dadosObjeto));


   
    localStorage.setItem('dados' , JSON.stringify(dadosObjeto))
      
    formulario.reset()
    document.location.href = "resultado.html"

   
}