const slideContainer = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide img');
    
    if (index < 0) {
        slideIndex = slides.length - 10;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    const translateX = -slideIndex * 100;
    slideContainer.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

// Cambia automáticamente de imagen cada 3 segundos
setInterval(() => changeSlide(1), 3000);

showSlide(slideIndex);
