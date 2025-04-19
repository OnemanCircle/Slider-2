const images = [];

// Generate paths for all 100 images
for (let i = 1; i <=200; i++) {
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
    setTimeout(() => mainImage.style.transform = 'scale(1)', 1600);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
    mainImage.style.transform = 'scale(1.05)';
    setTimeout(() => mainImage.style.transform = 'scale(1)', 1600);
});

// Load initial image
updateGallery();
