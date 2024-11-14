// Seleciona o botão para alternância de tema e o formulário
const botaoTema = document.getElementById('botao-tema');
const formulario = document.getElementById('form-pesquisa');

// Alterna entre modo claro e escuro
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Armazena a preferência de tema no LocalStorage
    const temaAtual = document.body.classList.contains('dark-mode') ? 'escuro' : 'claro';
    localStorage.setItem('tema', temaAtual);
});

// Verifica se existe uma preferência de tema salva no LocalStorage e aplica
window.addEventListener('load', () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
    }
});

// Função para enviar o formulário
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Previne o comportamento padrão do formulário

    // Captura os dados do formulário
    const dados = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        dataVisita: formulario['data-visita'].value,
        avaliacao: formulario.avaliacao.value,
        sugestoes: formulario.sugestoes.value,
        termos: formulario.termos.checked
    };

    // Salva os dados no LocalStorage
    localStorage.setItem('dadosPesquisa', JSON.stringify(dados));

    // Limpa o formulário após o envio
    formulario.reset();

    // Redireciona para a página de agradecimento
    window.location.href = 'resultado.html';
});