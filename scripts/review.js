// Review Counter
let reviewCount = 
    Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

// Display count
const reviewCounter = document.querySelector("#review-count");

if (reviewCounter) {
    reviewCounter.textContent = reviewCount;
}

// Footer
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = 
        `Last Modified: ${document.lastModified}`;
}