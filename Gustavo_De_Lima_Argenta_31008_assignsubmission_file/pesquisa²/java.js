var botao = document.querySelector("#toggleMode")

function mudarEscuro(){
    var corpo = document.querySelector("body")
    corpo.classList.toggle("dark-mode")
}

botao.addEventListener('click' , mudarEscuro)



document.getElementById('evaluationForm').addEventListener('submit' , function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const feedback = document.getElementById('feedback').value;

    const formData = {
        name,
        email,
        date,
        rating,
        feedback
    };
    localStorage.setItem('formData', JSON.stringify(formData));

    this.reset();

    window.location.href = 'obrigado.html' ;
});
