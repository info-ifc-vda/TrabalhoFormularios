
function mudarParaDarkMode() {
    var corpo = document.querySelector("body");
    corpo.classList.toggle('dark-mode');
}

var botao = document.querySelector("#dark-mode-botao");
botao.addEventListener('click', mudarParaDarkMode);

document.querySelector(".dropdown-btn").addEventListener('click', function() {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
});

document.getElementById("surveyForm").addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    
    var dados = new FormData(this);

   
    var nome = dados.get('nome');
    var email = dados.get('email');
    var telefone = dados.get('telefone');
    var dataNascimento = dados.get('dataNascimento');
    
   
    var generos = [];
    dados.getAll('generos').forEach(function(genero) {
        generos.push(genero);
    });
    
    
    var qualidade = dados.get('qualidade');
    
    
    var opiniao = dados.get('opiniao');
    
 
    var termos = dados.get('termos');
    
    
    if (!nome || !email || !telefone || !dataNascimento || generos.length === 0 || !qualidade || !termos) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    
    var respostas = {
        nome,
        email,
        telefone,
        dataNascimento,
        generos,
        qualidade,
        opiniao,
        termos
    };

    
    localStorage.setItem('respostas', JSON.stringify(respostas));

    
    console.log(respostas);

    
    this.reset();

    // Alerta de sucesso
    alert("Pesquisa enviada com sucesso!");
});

// Função para mostrar/esconder a lista de gêneros
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a dropdown
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Quando o botão de dropdown for clicado, alterna a visibilidade
    dropdownContent.addEventListener('click', function(e) {
        if (e.target.tagName === 'LABEL') {
            e.target.querySelector('input').checked = !e.target.querySelector('input').checked;
        }
    });
});
