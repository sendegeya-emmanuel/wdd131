// Enforce execution safety after DOM parse
document.addEventListener("DOMContentLoaded", () => {

    // 1. Navigation menu hamburger event listener module
    const menuButton = document.querySelector('#menu');
    const navigationMenu = document.querySelector('.navigation');

    menuButton.addEventListener('click', () => {
        navigationMenu.classList.toggle('show');
        menuButton.classList.toggle('show');
    });

    // 2. Dynamic footer year and last modified tracking automation
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
});