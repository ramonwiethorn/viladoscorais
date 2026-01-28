// Menu Mobile Toggle
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
    // Simples demonstração de alerta para o botão
    const menu = document.getElementById('menu');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "70px";
        menu.style.left = "0";
        menu.style.width = "100%";
        menu.style.background = "white";
        menu.style.padding = "20px";
    }
}

btnMobile.addEventListener('click', toggleMenu);

// Efeito de rolagem no Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
    } else {
        header.style.padding = '15px 0';
    }
});
/* --- Inicialização do Swiper Carrossel --- */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true, // Faz o carrossel girar infinitamente
    effect: "fade", // Efeito de transição suave (fade). Remova se preferir deslizar.
    autoplay: {
        delay: 3500, // Tempo entre slides (3.5 segundos)
        disableOnInteraction: false, // Continua rodando mesmo após clicar
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});