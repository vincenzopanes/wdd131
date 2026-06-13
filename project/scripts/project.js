// Sample product data
const products = [
    {
        id: 1,
        category: "Clothes",
        name: "Cobquecura T-Shirt",
        description: "Cotton T-shirt inspired by Cobquecura's coastal landscape.",
        image: "images/cobquecura-t-shirt.webp"
    },
    {
        id: 2,
        category: "Souvenirs",
        name: "Cobquecura Mug",
        description: "Ceramic mug featuring iconic views of Cobquecura.",
        image: "images/cobquecura-mug.webp"
    },
    {
        id: 3,
        category: "Souvenirs",
        name: "Cobquecura Tote Bag",
        description: "Reusable tote bag inspired by the coastal lifestyle.",
        image: "images/cobquecura-bag.webp"
    },
    {
        id: 4,
        category: "Clothes",
        name: "Cobquecura Hat",
        description: "Handcrafted hat designed for beach and outdoor activities.",
        image: "images/cobquecura-hat.webp"
    },
    {
        id: 5,
        category: "Art",
        name: "Cobquecura Paintings",
        description: "Local artwork representing all the magic from 'Cobque'.",
        image: "images/cobquecura-paint.webp"
    },
    {
    id: 6,
        category: "Souvenirs",
        name: "Cobquecura Mate",
        description: "Traditional mate inspired by the culture and landscapes of Cobquecura.",
        image: "images/cobquecura-mate.webp"
    }
];

// Function to display products on the page
function displayProducts() {
    const productList = document.getElementById('product-list');

    if (!productList) return;

    productList.innerHTML = '';
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="300" height="220" loading="lazy">
            <p class="category">${product.category}</p>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="favorite-btn" data-id="${product.id}">
                Add to Favorites
            </button>
        `;
        productList.appendChild(productElement);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);

// Contact Form
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you! Your message has been received.");
    });
}

// Local Storage
function addFavorite(productId) {

    const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(productId)) {

        favorites.push(productId);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("Product added to favorites!");
    }
     else {

        alert("This product is already in your favorites.");
    }
}
document.addEventListener("click", (event) => {

    if (event.target.classList.contains("favorite-btn")) {

        const productId =
            Number(event.target.dataset.id);

        addFavorite(productId);
    }
});