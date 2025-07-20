document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".previrous-button");
    const nextButton = document.querySelector(".nexts-button");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showPrevSlide() {
        hideCurrentSlide();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function showNextSlide() {
        hideCurrentSlide();
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Функция для скрытия текущего слайда
    function hideCurrentSlide() {
        slides[currentIndex].classList.remove("active");
    }

    // Функция для отображения слайда по индексу
    function showSlide(index) {
        slides[index].classList.add("active");
    }

    // Обработчик события для кнопки "предыдущий"
    prevButton.addEventListener("click", showPrevSlide);

    // Обработчик события для кнопки "следующий"
    nextButton.addEventListener("click", showNextSlide);

    // Отображение начального слайда
    showSlide(currentIndex);
});