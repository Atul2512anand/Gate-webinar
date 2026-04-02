// Simple script to handle interaction and reveal animations

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll for any future anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple reveal animation for the speaker card on load
    const speakerCard = document.querySelector('.speaker-card');
    const detailsCard = document.querySelector('.details-card');

    speakerCard.style.opacity = '0';
    speakerCard.style.transform = 'translateX(-20px)';
    detailsCard.style.opacity = '0';
    detailsCard.style.transform = 'translateX(20px)';

    setTimeout(() => {
        speakerCard.style.transition = 'all 0.8s ease-out';
        speakerCard.style.opacity = '1';
        speakerCard.style.transform = 'translateX(0)';
        
        detailsCard.style.transition = 'all 0.8s ease-out';
        detailsCard.style.opacity = '1';
        detailsCard.style.transform = 'translateX(0)';
    }, 300);

    // Dynamic Date check (Optional: could show a "Live Now" badge if current time matches)
    const eventDate = new Date('April 5, 2026 15:00:00');
    const now = new Date();

    if (now.toDateString() === eventDate.toDateString()) {
        console.log("Event is today!");
        // You could add a 'Live' badge logic here
    }
});