/**
 * Script de Controle - Website Moabe Lima
 * Focado em Performance e UX
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Atualizar Ano do Rodapé automaticamente
    const anoElement = document.getElementById("ano");
    if(anoElement) anoElement.textContent = new Date().getFullYear();

    // 2. Intersection Observer (Scroll Reveal)
    // Faz os elementos aparecerem suavemente ao rolar a página
    const observerOptions = {
        threshold: 0.15, // Ativa quando 15% do elemento aparece
        rootMargin: "0px 0px -50px 0px"
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: para de observar após animar uma vez
                // observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Seleciona todos os elementos que devem "revelar"
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. Efeito Parallax Suave na Imagem do Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImg = document.querySelector('.hero-float');
        if(heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.1}px) rotate(${scrolled * 0.01}deg)`;
        }
    });

    // 4. Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});