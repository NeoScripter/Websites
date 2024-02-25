document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.header-links img');
    
    images.forEach(image => {
        const originalSrc = image.src;
        const hoverSrc = image.getAttribute('data-hover');
        
        image.addEventListener('mouseenter', () => {
            image.src = hoverSrc;
        });
        
        image.addEventListener('mouseleave', () => {
            image.src = originalSrc;
        });
    });
});
