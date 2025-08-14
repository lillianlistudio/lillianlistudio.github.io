window.addEventListener('scroll', function() {
    const worksSection = document.getElementById('works');
    const wordScroll = document.querySelector('.word-scroll');
    const homeWord = document.querySelector('.sticky-word.home');
    const workWord = document.querySelector('.sticky-word.work');

    // Get the position of the works section relative to the viewport
    const worksTop = worksSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Calculate progress: 0 when landing, 1 when works section is at top of viewport
    const progress = Math.min(Math.max(1 - worksTop / windowHeight, 0), 1);

    // Move "HOME" up and out, "WORK" in
    homeWord.style.top = `${50 - 100 * progress}%`;
    workWord.style.top = `${150 - 100 * progress}%`;
});