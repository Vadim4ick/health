/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
  Navigation,
  Pagination,
  Parallax,
  Autoplay,
  Thumbs,
} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add("swiper");
      slider.classList.add("swiper-wrapper");
      for (const slide of slider.children) {
        slide.classList.add("swiper-slide");
      }
    });
  }
}
// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  // Перечень слайдеров
  if (document.querySelector(".slider-main__slider")) {
    new Swiper(".slider-main__slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Parallax, Autoplay],
      // effect: "fade",
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // observer: true,
      // observeParents: true,
      slidesPerView: 1,
      spaceBetween: 50,
      // parallax: true,
      autoHeight: true,
      speed: 300,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      // Dotts
      pagination: {
        el: ".controll-main-block__dotts",
        clickable: true,
        dynamicBullets: true,
      },
      // Arrows
      // navigation: {
      //   nextEl: ".about__more .more__item_next",
      //   prevEl: ".about__more .more__item_prev",
      // },
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      on: {},
    });
  }

  if (document.querySelector(".clinic__slider")) {
    new Swiper(".clinic__slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Parallax, Autoplay],
      //effect: 'fade',
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      observer: true,
      observeParents: true,
      // slidesPerView: 3,
      // spaceBetween: 40,
      // parallax: true,
      autoHeight: true,
      speed: 300,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      // Dotts
      pagination: {
        el: ".clinic__dotts",
        clickable: true,
        dynamicBullets: true,
      },
      // Arrows
      navigation: {
        nextEl: ".slider-arrow_next",
        prevEl: ".slider-arrow_prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      on: {},
    });
  }

  if (document.querySelector(".reviews__slider")) {
    new Swiper(".reviews__slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Parallax, Autoplay],
      //effect: 'fade',
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      observer: true,
      observeParents: true,
      // slidesPerView: 3,
      // spaceBetween: 10,
      // parallax: true,
      // autoHeight: true,
      speed: 300,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      // Dotts
      pagination: {
        el: ".reviews__dotts",
        clickable: true,
        dynamicBullets: true,
      },
      // Arrows
      navigation: {
        nextEl: ".slider-arrow_next2",
        prevEl: ".slider-arrow_prev2",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
      },
      on: {
        init: function (swiper) {
          const allSlides = document.querySelector(".fraction-controll__all"); //забираем в константу число общего кол-ва слайдов
          // const allSlidesItems = document.querySelectorAll(
          //   ".slide-main-block:not(.swiper-slide-duplicate)"
          // );
          allSlides.innerHTML = swiper.slides.length - 2; //выводим в HTML общее количество слайдов в числе
          // console.log(swiper); //смотрим в консоли swiper и ищем нужные цифры
        },
        slideChange: function (swiper) {
          const currentSlide = document.querySelector(
            ".fraction-controll__current"
          ); //забираем в константу число текущего слайда
          currentSlide.innerHTML = swiper.realIndex + 1; //выводим активный слайд + 1(т.к. начало с нуля)
          // console.log(swiper); //смотрим в консоли swiper и ищем нужные цифры
        },
      },
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
