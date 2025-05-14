// Carousel Values
let currentImage = 0;
let carouselTime = 4000;
const images = document.querySelectorAll('.carousel-image');
// Car Values
var carDialog = "";
var clickNum = 0;
var hasInteractedWithCar = false;
const car = document.getElementById('carImage');
const carButton = document.getElementById('carImageButton');
const carDialogBox = document.querySelector('.carDialogText');
const explosion = document.querySelector('.explosion');
// Car Emotions
const carEmotion = {
  "neutral" : "https://static.wikia.nocookie.net/garn47/images/f/f8/Car_fluff.png/revision/latest/scale-to-width/360?cb=20240810200531",
  "stare" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZBzo9xhJuyutNoxlwdBaVROSHe_hnurVqg&s",
  "happy" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sWFdyt-BiaBsAPQZMOqVqB6-P1AF7XXKEQ&s",
  "what" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzk4AvzfJZGfYWoJBRIDw2R59aKkwqfHbf-A&s",
  "mad" : "https://media.tenor.com/d5kqdTCu-ScAAAAM/car-garn47-garn47.gif"
}
// Car Dialog Typewriter Effect
var typeWriterDone = true;
var i = 0;
var speed = 30;

// Carousel Logic
function carousel()
{
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}
setInterval(carousel, carouselTime);

// Car Logic
function closeWindow()
{
  window.close();
}

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
    if (clickNum == 4)
    {
      explosion.classList.add('active');
      setTimeout(closeWindow, 3000);
    }
  }
}

carButton.addEventListener("click", () => {
  if (hasInteractedWithCar == false && typeWriterDone == true)
  {
    clickNum++;
    typeWriterDone = false;
    carDialog = "Hello! I am Car!";
    hasInteractedWithCar = true;
    car.src = carEmotion["happy"];
    updateCar();
  }
  else if (clickNum == 1 && typeWriterDone == true)
  {
    clickNum++;
    typeWriterDone = false;
    carDialog = "Why are you still clicking on me?";
    car.src = carEmotion["what"];
    updateCar();
  }
  else if (clickNum == 2 && typeWriterDone == true)
  {
    clickNum++;
    typeWriterDone = false;
    carDialog = "Stop it! Or I'll do something you won't like!";
    car.src = carEmotion["stare"];
    updateCar();
  }
  else if (clickNum == 3 && typeWriterDone == true)
  {
    clickNum++;
    typeWriterDone = false;
    carDialog = "Fine! You asked for it!";
    car.src = carEmotion["mad"];
    updateCar();
  }
});

function updateCar() {
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
