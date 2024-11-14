const form = document.getElementById('surveyForm');
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        name: form.name.value,
        suggestions: form.suggestions.value,
        email: form.email.value,
        recommend: form.recommend.value,
        rating: form.rating.value,
        comments: form.comments.value
    };

    localStorage.setItem('surveyData', JSON.stringify(formData));

    form.reset();
    window.location.href ='agradecimento.html';

});
