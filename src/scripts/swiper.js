const firstSlider = new Swiper(".image-swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Динамические буллеты
        dynamicBullets:true,
        // Автопрокрутка
        autoplay: {
            // Пауза между прокруткой
            delay: 4000,
            // Закончить на последнем слайде
            stopOnLastSlide: false,
            // Отключение после ручного переключения
            disableOnInteraction: false,
        },
        // Скорость прокрутки
        speed: 800,
        // Бесконечный слайдер
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
});

const secondSlider = new Swiper(".textSlider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Динамические буллеты
        dynamicBullets:true,
        // Автопрокрутка
        autoplay: {
            // Пауза между прокруткой
            delay: 2200,
            // Закончить на последнем слайде
            stopOnLastSlide: false,
            // Отключение после ручного переключения
            disableOnInteraction: false,
        },
        // Скорость прокрутки
        speed: 800,
        // Бесконечный слайдер
        loop: true,
});