/* ============================= UTILITIES ============================== */
function vw(percent) {
  const w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (percent * w) / 100;
}

/* ============================= FEATURES ============================== */

const container = document.querySelector(".inner");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let visibleSlides = 4;
let currentIndex = 0;

/* BASE ELEMENT */

const sliderPadding = vw(6);

const sliderContainer = document.querySelector("#slider");
const slideList = Array.from(sliderContainer.querySelectorAll(".slide"));
let elementWidth = 0;

const baseElement = slideList[0].cloneNode(true);
baseElement.style.visibility = "hidden";
sliderContainer.insertAdjacentElement("afterbegin", baseElement);

function resizeSlider() {
  const containerWidth = sliderContainer.getBoundingClientRect().width;
  elementWidth = containerWidth / visibleSlides - vw(3.5);

  for (let i = 0; i < slideList.length; i++) {
    slideList[i].style.width = `${elementWidth}px`;
  }
}

function matchViewportWidth() {
  if (window.innerWidth < 768) {
    visibleSlides = 2;
    // console.log("MINI TABLET")
  } else if (window.innerWidth < 1200) {
    visibleSlides = 3;
    // console.log("TABLET")
  } else {
    visibleSlides = 4;
    // console.log("DESKTOP");
  }
}

window.addEventListener("resize", () => {
  matchViewportWidth();
  resizeSlider();
  updateSlider();
});

resizeSlider();

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
    updateSlider();
  }
});

function updateSlider() {
  let translateValue = 0;

  if (currentIndex === 0) {
    translateValue = (elementWidth * currentIndex - vw(6)) * -1;
  } else if (currentIndex === slideList.length - visibleSlides) {
    translateValue = (elementWidth + vw(5)) * currentIndex * -1;
  } else {
    translateValue = (elementWidth + vw(3.5)) * currentIndex * -1;
  }

  container.style.transform = `translateX(${translateValue}px)`;
}

matchViewportWidth();
resizeSlider();
updateSlider();

/* ============================= FAQ ============================== */

const buttons = document.querySelectorAll(".toggle-button");
const answers = document.querySelectorAll(".answer");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentAnswer = this.parentElement.nextElementSibling;
    const isActive = currentAnswer.classList.contains("active");

    answers.forEach((answer) => {
      if (answer !== currentAnswer) {
        answer.classList.remove("active");
        answer.classList.add("inactive");
        answer.style.maxHeight = "0";
        answer.previousElementSibling.querySelector(
          ".toggle-button"
        ).textContent = "+";
      }
    });

    if (!isActive) {
      currentAnswer.classList.add("active");
      currentAnswer.classList.remove("inactive");
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
      this.textContent = "-";
    } else {
      currentAnswer.classList.remove("active");
      currentAnswer.classList.add("inactive");
      currentAnswer.style.maxHeight = null;
      this.textContent = "+";
    }
  });
});
