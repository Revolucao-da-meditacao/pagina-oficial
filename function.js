document.getElementById("saibaMais").addEventListener("click", function() {
    document.getElementById("ultimaSection").scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const answer = item.querySelector('.faq-answer');
            const isVisible = answer.style.display === 'block';

            // Fechar todas as respostas antes de abrir a resposta clicada
            faqItems.forEach(item => {
                const answer = item.querySelector('.faq-answer');
                answer.style.display = 'none';
                item.querySelector('.faq-question').classList.remove('active');
            });

            // Abrir a resposta clicada e mudar a cor da pergunta para azul
            answer.style.display = isVisible ? 'none' : 'block';
            question.classList.toggle('active');
        });
    });
});
