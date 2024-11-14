// Função para alternar para o modo escuro
var botao = document.querySelector("#dark-mode-botao");

function mudarParaDarkMode() {
    var corpo = document.querySelector('body');
    corpo.classList.toggle('dark-mode');
}

// Evento de clique para mudar para o modo escuro
botao.addEventListener('click', mudarParaDarkMode);

// Função para processar o envio do formulário
var formulario = document.querySelector('form');
formulario.addEventListener('submit', enviar);

function enviar(evento) {
    evento.preventDefault(); 

    // Obtém os dados do formulário
    var dados = new FormData(formulario);
    var nome = dados.get('nome');
    var email = dados.get('email');
    var tel = dados.get('telefone');
    var senha = dados.get('senha');
    var sexo = dados.get('genero');
    var livro = dados.get('livro');
    var autor = dados.get('autor');
    var favorito = dados.get('favorito');
    var obs = dados.get('obs');
    var termos = dados.get('termos');

    // Cria um objeto com os dados coletados
    var dadosObjeto = {
        nome, email, tel, senha, sexo, livro, autor, favorito, obs, termos,
    };
    console.log(dadosObjeto); // Exibe os dados no console para verificação

    // Salva os dados no localStorage
    localStorage.setItem('dados', JSON.stringify(dadosObjeto));

    // Limpa o formulário após o envio
    formulario.reset();

    // Redireciona para a página mensagem.html
    window.location.href = 'mensagem.html';
}
