const body = document.querySelector('body')
const btnDarkMode = document.querySelector('#dark-mode-botao')
const formulario = document.querySelector('form')

btnDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode-botao')
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const dados = new FormData(formulario)
    let listaDeDados = []
    dados.forEach((dado) => {
        listaDeDados.push(dado)
    })
    const objetoDados = {
        nome: listaDeDados[0],
        email: listaDeDados[1],
        data_nascimento: listaDeDados[2],
        pergunta: listaDeDados[3],
        tecnologias: listaDeDados[4],
        consideracoes: listaDeDados[5],
        termos: listaDeDados[6]
    }

    localStorage.setItem("Resposta", JSON.stringify(objetoDados))

    window.location.href = "../agradecimento.html"
})

