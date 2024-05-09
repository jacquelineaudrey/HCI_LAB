/* ============================= FEATURES ============================== */

const container = document.querySelector('.inner');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slideWidth = slides[0].offsetWidth;
const visibleSlides = 4; 
let currentIndex = 0;

prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', function () {
    if (currentIndex < slides.length - visibleSlides) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    container.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

updateSlider();

/* ============================= FAQ ============================== */

const buttons = document.querySelectorAll(".toggle-button");
const answers = document.querySelectorAll(".answer");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const currentAnswer = this.parentElement.nextElementSibling;
        answers.forEach(answer => {
            if (answer !== currentAnswer) {
                answer.style.display = "none";
                answer.previousElementSibling.querySelector(".toggle-button").textContent = "+";
            }
        });
        
        currentAnswer.style.display = currentAnswer.style.display === "block" ? "none" : "block";
        this.textContent = currentAnswer.style.display === "block" ? "-" : "+";
    });
});




