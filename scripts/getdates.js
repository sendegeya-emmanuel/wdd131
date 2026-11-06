// Wait for the local document DOM to fully parse before triggering scripts
document.addEventListener("DOMContentLoaded", () => {

    // 1. Target the current year span and inject the system year dynamically
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Target the lastModified block and output the file update timestamp directly
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
});