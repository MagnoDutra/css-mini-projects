const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progressBar = document.getElementById("progress");

const stepLenght = circles.length;
let currentStep = 0;

nextBtn.addEventListener("click", () => {
  if (currentStep < stepLenght - 1) {
    currentStep++;
    switchActiveClass();
    toggleButtons();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    switchActiveClass();
    toggleButtons();
  }
});

function toggleButtons() {
  nextBtn.disabled = currentStep === stepLenght - 1;
  prevBtn.disabled = currentStep === 0;
}

function switchActiveClass() {
  circles.forEach((number, i) => {
    if (i <= currentStep) number.classList.add("active");
    else number.classList.remove("active");
  });

  progressBar.style.width =
    ((currentStep / (stepLenght - 1)) * 100).toString() + "%";
}
