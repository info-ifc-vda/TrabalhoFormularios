// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('satisfactionForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        localStorage.setItem('formData', JSON.stringify(data));
        form.reset();
        window.location.href = 'obrigado.html';
    });

    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerText = 'Escuro/Claro';
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
    document.body.appendChild(darkModeToggle);
});
