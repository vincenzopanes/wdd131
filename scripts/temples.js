// Footer
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModified.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

// Hamburger menu
const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        menuButton.setAttribute = "✖";
    }
    else {
        menuButton.setAttribute = "☰";
    }
});