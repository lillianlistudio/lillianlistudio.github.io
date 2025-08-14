window.addEventListener('scroll', function() {
    const workSection = document.getElementById('work');
    const homeWord = document.querySelector('.sticky-word.home');
    const workWord = document.querySelector('.sticky-word.work');

    if (!workSection || !homeWord || !workWord) return;

    // Get the position of the work section relative to the viewport
    const workTop = workSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Animation starts when the work section is halfway into view
    const triggerStart = windowHeight * 0.5;
    const triggerEnd = windowHeight * 0.1; // adjust for when animation ends

    // Calculate progress (0 to 1)
    let progress = (triggerStart - workTop) / (triggerStart - triggerEnd);
    progress = Math.min(Math.max(progress, 0), 1);

    // Animate "HOME" out and "WORK" in
    homeWord.style.top = `${50 - 100 * progress}%`;
    workWord.style.top = `${150 - 100 * progress}%`;
});