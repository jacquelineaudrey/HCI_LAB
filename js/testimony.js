const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.querySelectorAll('.dots span');

let elWidth =  slides[0].getBoundingClientRect().width;
let slideIndex = 0;
    
const updateSlider = () => {
    slider.style.transform = `translateX(${elWidth * -1 * slideIndex}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
};

prev.addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : 0;
    slider.style.transform = `translateX(${slideIndex * -1}%)`;
    updateSlider();
});

next.addEventListener('click', () => {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : slides.length - 1;
    slider.style.transform = `translateX(${slideIndex * -1}%)`;
    updateSlider();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slideIndex = i;
        updateSlider();
    });
});

window.addEventListener("resize", () => {
    elWidth = slides[0].getBoundingClientRect().width;
    updateSlider()
})

