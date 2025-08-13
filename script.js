window.addEventListener('scroll', function() {
    const scrollArea = document.querySelector('.word-scroll');
    const words = scrollArea.querySelectorAll('.sticky-word');
    const scrollY = window.scrollY;
    const containerHeight = 184; // px, same as .word-container height
    const wordHeight = 184; // px, same as .word-container height
    const triggerStart = 0;
    const triggerEnd = 300; // adjust for scroll distance

    // Calculate progress (0 to 1)
    const progress = Math.min(Math.max((scrollY - triggerStart) / (triggerEnd - triggerStart), 0), 1);

    // Move "home" up and "work" in
    words[0].style.top = `${(1 - progress) * containerHeight}px`;
    words[1].style.top = `${containerHeight + (-progress * containerHeight)}px`;
});