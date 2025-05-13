// Carousel Logic
let currentImage = 0;
let carouselTime = 4000;
const images = document.querySelectorAll('.carousel-image');

function carousel() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
} //Closing the Carousel function

setInterval(carousel, carouselTime);
