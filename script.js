const catImages = [
    'cat1.jpeg',
    'cat2.jpeg',
    'cat3.jpeg',
    'cat4.jpeg'
];

let currentIndex = 0;

function changeCatImage() {
    const catImageElement = document.getElementById('catImage');
    currentIndex = (currentIndex + 1) % catImages.length;
    catImageElement.src = catImages[currentIndex];
    catImageElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        catImageElement.style.transform = 'scale(1)';
    }, 500);
}