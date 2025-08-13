window.addEventListener('scroll', function() {
    const block = document.querySelector('.sticky-block');
    const home = block.querySelector('.home');
    const work = block.querySelector('.work');
    const scrollY = window.scrollY;
    const triggerStart = 0;
    const triggerEnd = 300;

    const progress = Math.min(Math.max((scrollY - triggerStart) / (triggerEnd - triggerStart), 0), 1);

    home.style.top = `${50 - 100 * progress}%`;
    work.style.top = `${150 - 100 * progress}%`;
});