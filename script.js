// Get a reference to the hearts container
const heartsContainer = document.querySelector(".hearts-container");

// Function to create a heart element
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heartsContainer.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000); // Remove heart after 5 seconds
}

// Create hearts at random intervals
setInterval(createHeart, 1000); // Creates a heart every 1 second

function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");

  modalImage.src = imageSrc;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

const nextButton = document.getElementById("nextButton");
const paragraphs = document.getElementById("paragraphs").children;
let currentIndex = 0;

nextButton.addEventListener("click", () => {
  paragraphs[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % paragraphs.length;
  paragraphs[currentIndex].classList.add("active");
  paragraphs[currentIndex].parentNode.style.opacity = 1;
  paragraphs[currentIndex].parentNode.style.pointerEvents = "auto";
});
