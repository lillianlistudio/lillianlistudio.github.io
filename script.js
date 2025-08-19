window.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const heroBanner = document.getElementById('hero-banner');
    const fixedLogo = document.getElementById('fixed-logo');

    // Step 1: After 2 seconds, animate the banner (change color and scale down)
    setTimeout(() => {
        heroBanner.classList.add('animate');
    }, 2000);

    // Step 2: After another 1 second (total 3 seconds), hide banner and show logo
    setTimeout(() => {
        heroBanner.classList.add('hide');
        fixedLogo.classList.add('show');
    }, 3000);
});