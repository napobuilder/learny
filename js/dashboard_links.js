document.addEventListener('DOMContentLoaded', () => {
    // Target the "Continuar" links in the large cards
    const continueLinks = document.querySelectorAll('section.mb-16 a.bg-purple-600');
    continueLinks.forEach(link => {
        link.href = 'reproductor.html';
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default navigation
            window.location.href = 'reproductor.html';
        });
    });

    // Target the smaller course cards (the entire div with card-hover-effect)
    const smallCourseCards = document.querySelectorAll('section:not(.mb-16) .card-hover-effect');
    smallCourseCards.forEach(card => {
        card.style.cursor = 'pointer'; // Indicate it's clickable
        card.addEventListener('click', () => {
            window.location.href = 'reproductor.html';
        });
    });
});