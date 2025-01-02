// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.item'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки открытия модальных окон
    const openModalButtons = document.querySelectorAll('.carousel-label');

    // Добавляем обработчик события для каждой кнопки
    openModalButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартное поведение ссылки

            // Находим ближайшее модальное окно относительно кнопки
            const modalId = this.getAttribute('data-modal'); // Если у кнопки есть атрибут data-modal
            let modal = null;

            if (modalId) {
                modal = document.getElementById(modalId);
            } else {
                // Если нет атрибута data-modal, ищем модальное окно внутри родительского элемента
                modal = this.closest('.item').querySelector('.modal');
            }

            if (modal) {
                // Открываем найденное модальное окно
                modal.style.display = 'block';

                // Добавляем обработчик закрытия модального окна по клику на крестик
                const closeButton = modal.querySelector('.close');
                closeButton.addEventListener('click', () => {
                    modal.style.display = 'none'; // Закрытие модального окна
                });

                // Закрытие модального окна по клику вне его области
                window.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            }
        });
    });
});

var slideIndextwo = 1;
showSlides(slideIndextwo);

function plusSlides(n) {
    showSlides(slideIndextwo += n);
}

function currentSlide(n) {
    showSlides(slideIndextwo = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndextwo = 1}
    if (n < 1) {slideIndextwo = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndextwo-1].style.display = "block";
    dots[slideIndextwo-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  currentSlide(1);
});