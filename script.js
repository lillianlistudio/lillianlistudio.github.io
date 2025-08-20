window.addEventListener('DOMContentLoaded', function() {
    // Hero banner animation
    const heroBanner = document.getElementById('hero-banner');
    const fixedLogo = document.getElementById('fixed-logo');

    setTimeout(() => {
        heroBanner.classList.add('animate');
    }, 2000);

    setTimeout(() => {
        heroBanner.classList.add('hide');
        fixedLogo.classList.add('show');
    }, 3000);

    // Nav button morph animation
    const navBtn = document.getElementById('nav-toggle');
    if (navBtn) {
        navBtn.addEventListener('mouseenter', () => {
            gsap.to("#navPath", {
                morphSVG: "#navPathHover",
                duration: 0.5,
                fill: "#a259ff"
            });
        });
        navBtn.addEventListener('mouseleave', () => {
            gsap.to("#navPath", {
                morphSVG: {shape: "#navPath"},
                duration: 0.5,
                fill: "#745E5E"
            });
        });
    }

    // Nav menu toggle (optional, for showing/hiding nav list)
    navBtn.addEventListener('click', () => {
        const mainNav = document.getElementById('main-nav');
        mainNav.classList.toggle('show');
    });
});