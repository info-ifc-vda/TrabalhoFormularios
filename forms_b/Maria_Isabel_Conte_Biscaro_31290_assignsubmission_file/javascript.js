function mudarParaDarkMode() {
    var corpo = document.querySelector("body");
    corpo.classList.toggle('dark-mode');
}

var botao = document.querySelector("#dark-mode-botao");
botao.addEventListener('click', mudarParaDarkMode);

var formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', enviar);

function enviar(evento) {
    evento.preventDefault();

    var dados = new FormData(formulario);

    var nome = dados.get('nome');
    var telefone = dados.get('tel');
    var dataNascimento = dados.get('data-nascimento');
    var genero = dados.get('genero');
    var hospital = dados.get('hospital');
    var profissional = dados.get('prof');
    var nomeAtendente = dados.get('nome-atendente');
    var avaliacao = dados.get('avaliacao');
    var avaliacaoLocal = dados.get('avaliacao-local');
    var obs = dados.get('obs');
    var termos = dados.get('termos');

    var todos = {
        nome,
        telefone,
        dataNascimento,
        genero,
        hospital,
        profissional,
        nomeAtendente,
        avaliacao,
        avaliacaoLocal,
        obs,
        termos
    };

    console.log(todos);

    localStorage.setItem('dados', JSON.stringify(todos));

    formulario.reset();

    document.location.href = 'resultado.html';
}
