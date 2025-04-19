const images = [];

// Generate paths for all 100 images
for (let i = 1; i <= 100; i++) {
    images.push(`images/${i}.jpg`);
}

let currentIndex = 0;

const mainImage = document.querySelector('.main-image');
const nextImage = document.querySelector('.next-image');
const backgroundImage = document.querySelector('.background-image');

function updateGallery() {
    // Update images for the next slide
    mainImage.src = images[currentIndex];
    nextImage.src = images[(currentIndex + 1) % images.length];
    backgroundImage.style.backgroundImage = `url(${images[(currentIndex - 1 + images.length) % images.length]})`;
}

document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
    mainImage.style.transform = 'scale(1.05)';
    setTimeout(() => mainImage.style.transform = 'scale(1)', 600);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
    mainImage.style.transform = 'scale(1.05)';
    setTimeout(() => mainImage.style.transform = 'scale(1)', 600);
});

// Load initial image
updateGallery();

// Create a new div for the background
const backgroundDiv = document.createElement('div');

// Style the background div
backgroundDiv.style.position = 'absolute';
backgroundDiv.style.top = '0';
backgroundDiv.style.left = '0';
backgroundDiv.style.width = '100%';
backgroundDiv.style.height = '100%';
backgroundDiv.style.backgroundImage = "url('images/background.jpg')"; // Use the uploaded background image path
backgroundDiv.style.backgroundRepeat = 'no-repeat';
backgroundDiv.style.backgroundPosition = 'center center';
backgroundDiv.style.backgroundSize = 'cover';
backgroundDiv.style.zIndex = '-1'; // Position it behind other content
backgroundDiv.style.filter = 'blur(10px)'; // Optional: Adds a blur effect to the background

// Append the background div to the body
document.body.appendChild(backgroundDiv);
