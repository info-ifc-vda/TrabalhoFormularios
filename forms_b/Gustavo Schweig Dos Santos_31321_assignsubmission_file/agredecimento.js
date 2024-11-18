function mudarParaDarkMode() {
    var corpo = document.querySelector("body")
    corpo.classList.toggle('dark-mode')
}

var botao = document.querySelector("#dark-mode-botao")
botao.addEventListener('click', mudarParaDarkMode)

var formulario = document.querySelector('form')
formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()
    var dadosDoFormulario = new FormData(formulario)

    var nome = dadosDoFormulario.get('nome');
    var email = dadosDoFormulario.get('email');
    var tel = dadosDoFormulario.get('tel');
    var sexo = dadosDoFormulario.get('sexo');
    var escolha = dadosDoFormulario.get('escolha');
    var genero = dadosDoFormulario.get('genero');
    var nomeFilme = dadosDoFormulario.get('nomedofilme');
    var avaliacao = dadosDoFormulario.get('avaliacao');
    var obs = dadosDoFormulario.get('obs');
    var recomendacao = dadosDoFormulario.get('s') || dadosDoFormulario.get('n');
    var termos = dadosDoFormulario.get('termos');

    var dados = {
        nome, email, tel, sexo, escolha, genero, nomeFilme, avaliacao, obs, recomendacao, termos
    };


    localStorage.setItem('banco', JSON.stringify(dados));

    formulario.reset();


    document.location.href='FINAL.html';
}
