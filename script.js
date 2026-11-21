document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENÚ RESPONSIVO PARA MÓVILES
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. CONTROL DEL CARRUSEL DE PLANTAS
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -300, behavior: 'smooth' });
    });

    // 3. GALERÍA INTERACTIVA Y FONDO DINÁMICO AL PASAR EL MOUSE / SELECCIONAR
    const gallerySection = document.getElementById('galeria');
    const galleryCards = document.querySelectorAll('.gallery-card');
    const selectionBanner = document.getElementById('selection-banner');
    const selectionText = document.getElementById('selection-text');

    galleryCards.forEach(card => {
        // Cambiar sutilmente el fondo de la zona al pasar el mouse por una planta
        card.addEventListener('mouseenter', () => {
            const color = card.getAttribute('data-color');
            gallerySection.style.backgroundColor = `${color}18`; // Transparencia suave
        });

        card.addEventListener('mouseleave', () => {
            gallerySection.style.backgroundColor = 'transparent';
        });

        // Seleccionar planta favorita al hacer clic
        card.addEventListener('click', () => {
            galleryCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            const plantName = card.getAttribute('data-plant');
            const plantVibe = card.getAttribute('data-vibe');

            selectionText.innerHTML = `🌿 ¡Excelente elección! Elegiste <strong>${plantName}</strong>. Aportará <em>"${plantVibe}"</em> a tu espacio.`;
            selectionBanner.classList.remove('hidden');
        });
    });

    // 4. FONDO INTERACTIVO EN LA SECCIÓN DE PREGUNTAS COMUNES
    const faqSection = document.querySelector('.faq-section');
    const faqItems = document.querySelectorAll('.faq-item');

    const themeColors = {
        turquesa: 'rgba(26, 188, 156, 0.12)',
        naranja: 'rgba(255, 127, 80, 0.12)',
        rojo: 'rgba(231, 76, 60, 0.12)'
    };

    faqItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const theme = item.getAttribute('data-theme');
            faqSection.style.backgroundColor = themeColors[theme] || 'transparent';
        });

        item.addEventListener('mouseleave', () => {
            faqSection.style.backgroundColor = 'transparent';
        });
    });
});