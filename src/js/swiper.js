import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const guardiansSwiper = new Swiper('.guardians-swiper', {
  modules: [Navigation, Autoplay],
  loop: true,
  slidesPerView: 1,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.guardians-next',
    prevEl: '.guardians-prev',
  },
});