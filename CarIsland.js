// Carousel Values
let currentImage = 0;
let carouselTime = 4000;
const images = document.querySelectorAll('.carousel-image');
// Car Values
var carDialog = "";
var clickNum = 0;
var hasInteractedWithCar = false;
const car = document.getElementById('carImage');
const carDialogBox = document.querySelector('.carDialogText');
// Car Dialog Typewriter Effect
var typeWriterDone = true;
var i = 0;
var speed = 50; // The speed/duration of the effect in milliseconds

// Carousel Logic
function carousel()
{
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}
setInterval(carousel, carouselTime);

// Car Logic
function typeWriter(txt)
{
  if (i < txt.length)
  {
    document.getElementById("carDialogText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => typeWriter(txt), speed);
  }
  if (i == txt.length)
  {
    typeWriterDone = true;
  }
}

car.addEventListener("click", () => {
  if (hasInteractedWithCar == false && typeWriterDone == true)
  {
    clickNum++;
    typeWriterDone = false;
    carDialog = "Hello! I am Car!";
    hasInteractedWithCar = true;
    updateCarText();
  }
  else if (clickNum == 1 && typeWriterDone == true)
  {
    clickNum++;
    typeWriterDone = false;
    carDialog = "Why are you still clicking on me?";
    updateCarText();
  }
  else if (clickNum == 2 && typeWriterDone == true)
  {
    clickNum++;
    typeWriterDone = false;
    carDialog = "Stop it! Or I'll do something you won't like!";
    updateCarText();
  }
  else if (clickNum == 3 && typeWriterDone == true)
  {
    clickNum++;
    typeWriterDone = false;
    carDialog = "Fine! You asked for it!";
    updateCarText();
  }
});

function updateCarText() {
  if (carDialog == "")
  {
    carDialogBox.style.visibility = "hidden";
  }
  else
  {
    carDialogBox.style.visibility = "visible";
    document.getElementById("carDialogText").innerHTML = "";
    i = 0;
    typeWriter(carDialog);
  }
}
