//mudar para dark mode 
// <a id="dark-mode-botao">Dark/Light</a>
function mudarParaModoDark(){
    var corpo = document.querySelector('body') //pegar o body
    corpo.classList.toggle('dark-mode') 
}

var botao = document.querySelector('#dark-mode-botao')
botao.addEventListener('click', mudarParaModoDark)// adiciona um evento ao botão esse botão é o click , ou seja
//se tem a classe dark mode no body ele tira e não tiver ele coloca 
//nossa página em questão vem com a  classe dark mode ent qnd clicamos no botão o modo fica claro , 
//se tirarmos a classe ele vai aparecer claro e se quiser mudar clica no botão




//Pegar os dados do formulário 
var formulario = document.querySelector('form')//pegar o formulário 
formulario.addEventListener("submit" , enviar)//adicionar uma função de enviar

function enviar (evento){
    evento.preventDefault()//previnar que quando os dados sejam enviados o navegador reinicie e página e perca os dados , ou 
    //seja ele previne a ação padrão do navegador, pois queremos tratar esses dadis com javasrcipt

    var dados = new FormData(formulario)//pega um objeto com todos os dados dentro, ou seja cria uma 'caixinha' pra guardar os dados
    var nome = dados.get("nome")//pega o dado recebido do campo , esse ("nome") é do name do formulário como estabelecemos o nome do dado
    var email = dados.get("email")
    var telefone = dados.get("telefone")
    var tipo = dados.get("tipo")
    var sabor = dados.get("sabor")
    var obs = dados.get("obs")
    var termos = dados.get("termos")

    //função que faz a pessoa aceitar os termos de uso 
    //significa se termos não for encontrado 
    if (!termos){
        alert("Você precisa aceitar os termos de uso!")
        return
    }

    //convertendo para objeto
    var dadosObjeto = {nome, email, telefone, tipo, sabor, obs, termos}
    console.log(JSON.stringify(dadosObjeto));


    //gravar os dados no LocalStorge usado padrão JSON, converter em valor de texto 
    //setItem = gravar os dados , stringgify = converte os objetos em formato de texto , JSON.stringify(dadosObjeto)= guarda os dados em um banco , num sistema chave e valor, ex: "name" : "Julia "
    localStorage.setItem('dados' , JSON.stringify(dadosObjeto))


    //limpar o formulário 
    formulario.reset()

    //redirecionar para resultado.html, quando eu clicar no botão de enviar ele vai aparecer outra página redirecionando os meus dados 
    document.location.href = "resultado.html"


}