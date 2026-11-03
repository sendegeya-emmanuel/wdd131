// Wait for the DOM structure to fully load before execution
document.addEventListener("DOMContentLoaded", () => {

    // 1. Dynamically retrieve and populate the current copyright year
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Dynamically retrieve and populate the document's last modified date
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
});