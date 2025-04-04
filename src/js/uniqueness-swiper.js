import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const uniquenessSwiper = () => {
  let uniquenessSwiper = null;

  const initUniquenessSwiper = () => {
    if (window.innerWidth < 1440) {
      if (!uniquenessSwiper) {
        uniquenessSwiper = new Swiper(".swiper-uniqueness", {
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          grabCursor: true,
          spaceBetween: 10,
          speed: 800,
          simulateTouch: true,
          touchRatio: 1,
          mousewheel: {
            sensitivity: 0.5,
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          // pagination: {
          //   el: ".swiper-pagination-gallery",
          //   type: "bullets",
          //   clickable: true,
          // },
        });
      }
    } else {
      if (uniquenessSwiper) {
        uniquenessSwiper.destroy(true, true);
        uniquenessSwiper = null;
      }
    }
  };

  initUniquenessSwiper();
  window.addEventListener("resize", initUniquenessSwiper);
};

export default uniquenessSwiper;
