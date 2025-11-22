<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Image Carousel</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>🖼️Image Carousel</h1>
  <div class="carousel" id="carousel">
    <img id="carouselImage" src="img1.jpg" alt="Carousel Image" />
    <div class="controls">
      <button id="prevBtn">⏪ Previous</button>
      <button id="nextBtn">Next ⏩</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
  padding: 40px;
  text-align: center;
}

h1 {
  color: #333;
}

.carousel {
  position: relative;
  width: 400px;
  margin: 20px auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.carousel img {
  width: 100%;
  height: auto;
  display: block;
}

.controls {
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background: #0056b3;
}
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.getElementById("carousel");

function showImage(index) {
  carouselImage.src = images[index];
}

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
};

// Auto-slide every 3 seconds
let interval = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 3000);

// Pause on hover
carousel.addEventListener("mouseenter", () => clearInterval(interval));
carousel.addEventListener("mouseleave", () => {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000);
});
