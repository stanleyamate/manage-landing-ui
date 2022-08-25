AOS.init();

const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger')
  hamburger.onclick = function () {
    hamburger.classList.toggle('active');
    if(hamburger.classList.contains('active')){
      body.classList.add('active')
    }
    else{
      body.classList.remove('active')
    }
    
}
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
