// Array of temple objects
const temples = [
    {
        templeName: "Concepción Chile Temple",
        location: "Concepción, Chile",
        dedicated: "28 October, 2018",
        area: 23095,
        imageUrl: "images/concepcion-chile-temple.jpg",
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicated: "21 May, 1888",
        area: 74792,
        imageUrl: "images/manti-utah-temple.jpg",
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "12 March, 2019",
        area: 41010,
        imageUrl: "images/roma-temple.jpg",
    },
    {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage, Alaska",
        dedicated: "10 January, 1999",
        area: 11937,
        imageUrl: "images/anchorage-alaska-temple.jpg",
    },
    {
        templeName: "Mexico City Temple",
        location: "Mexico City, Mexico",
        dedicated: "4 December, 1983",
        area: 116642,
        imageUrl: "images/mexico-city-temple.jpg",
    },
    {
        templeName: "Bern Switzerland Temple",
        location: "Bern, Switzerland",
        dedicated: "14 September, 1955",
        area: 35546,
        imageUrl: "images/bern-switzerland-temple.jpg",
    },
    {
        templeName: "San Diego California Temple",
        location: "San Diego, California",
        dedicated: "25 April, 1993",
        area: 72000,
        imageUrl: "images/san-diego-temple.jpg",
    },
    {
        templeName: "Preston England Temple",
        location: "Preston, England",
        dedicated: "7 June, 1998",
        area: 69630,
        imageUrl: "images/preston-england-temple.jpg",
    },
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "7 August, 2005",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.jpg",
    },
    {
        templeName: "Buenos Aires Argentina Temple",
        location: "Buenos Aires, Argentina",
        dedicated: "17 January, 1986",
        area: 30659,
        imageUrl: "images/buenos-aires-temple.jpg",
    },
    {
        templeName: "Yigo Guam Temple",
        location: "Yigo, Guam",
        dedicated: "2 May, 2020",
        area: 6861,
        imageUrl: "images/yigo-guam-temple.jpg",
    }
]

// Function to display temples in the gallery
const gallery = document.querySelector('.gallery');

function displayTemples(temples) {
    gallery.innerHTML = '';
    temples.forEach(temple => {
        const card = document.createElement('section');
        card.classList.add('temple-card');

        card.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

displayTemples(temples);

const title = document.querySelector('h1');

// Filter buttons

document.getElementById('home').addEventListener('click', (event) => {
    event.preventDefault();
    title.textContent = 'Home';
    displayTemples(temples);
});

document.getElementById('old').addEventListener('click', (event) => {
    event.preventDefault();
    title.textContent = 'Old';
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', (event) => {
    event.preventDefault();
    title.textContent = 'New';
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', (event) => {
    event.preventDefault();
    title.textContent = 'Large';
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', (event) => {
    event.preventDefault();
    title.textContent = 'Small';
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});

// Footer last modified date
document.querySelector('#currentYear').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;