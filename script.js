// Mobile menu toggle
const menu = document.querySelector("nav ul");
const menuBtn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

// Mobile dropdown behavior
if (dropdown) {
  dropdown.addEventListener("click", (e) => {
    if (window.innerWidth < 850) {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    }
  });
}

// Close menu if clicking outside on mobile
document.addEventListener("click", (e) => {
  if (window.innerWidth < 850 && menu && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove("open");
    dropdown && dropdown.classList.remove("open");
  }
});

// Fade-up scroll effect
const handleReveal = () => {
  document.querySelectorAll(".fade-up").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);


// ------------------------------------
// HERO SLIDER FUNCTIONALITY
// ------------------------------------

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

// Generate dots
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots div");

function updateSlider() {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

function goToSlide(i) {
  index = i;
  updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-Slide
let autoPlay = setInterval(nextSlide, 5500);

// Pause on hover
document.querySelector(".hero-slider").addEventListener("mouseover", () => clearInterval(autoPlay));
document.querySelector(".hero-slider").addEventListener("mouseout", () => autoPlay = setInterval(nextSlide, 3000));


const tiles = document.querySelectorAll('.service-tile');
tiles.forEach((tile, i) => {
  tile.style.opacity = "0";
  tile.style.transform = "translateY(40px)";
  setTimeout(() => {
    tile.style.transition = "0.7s";
    tile.style.opacity = "1";
    tile.style.transform = "translateY(0)";
  }, i * 200 + 300);
});
