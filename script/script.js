// Seleciona a navbar pelo ID
const navbar = document.getElementById('navbar');

// Função que verifica o scroll
window.onscroll = () => {
    if (window.scrollY > 50) {  // Altera o valor conforme a necessidade
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
