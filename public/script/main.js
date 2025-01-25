function showPage(pageId) {
    const sections = document.querySelectorAll('main[role="main"] section[role="region"]');
    sections.forEach(section => {
        if (section.id === pageId) {
            section.classList.add('active');
            section.setAttribute('aria-hidden', 'false');
        } else {
            section.classList.remove('active');
            section.setAttribute('aria-hidden', 'true');
        }
    });
}
function handleHashChange() {
    let hash = window.location.hash || '#home';
    showPage(hash.substring(1));
}

document.addEventListener('DOMContentLoaded', () => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            const targetHash = event.target.getAttribute('href');
            if (targetHash === (window.location.hash || '#home')) {
                event.preventDefault();
            }
        });
    });
});