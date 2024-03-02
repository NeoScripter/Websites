document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.querySelector('.share-btn');
    const socialLinks = document.querySelector('.social-links');
    const svgPath = document.querySelector('.svg-icon path');
    let timeoutId;

    shareBtn.addEventListener('mouseover', function() {
        clearTimeout(timeoutId);
        socialLinks.style.display = 'flex';
        svgPath.style.fill = 'white';
        shareBtn.style.backgroundColor = 'hsl(217, 19%, 55%)';
    });
    

    shareBtn.addEventListener('mouseout', function() {
        timeoutId = setTimeout(function() {
            socialLinks.style.display = 'none';
            shareBtn.style.backgroundColor = 'hsla(212, 23%, 69%, 0.2)';
            svgPath.style.fill = '';
        }, 500);
    });
});
