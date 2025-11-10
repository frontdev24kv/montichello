'use strict';

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('close');
});

$('.screen.slider').slick({
  dots: true
});

$('.card__box.slider').slick({
  dots: true, // shows navigation dots
  infinite: true, // infinite loop
  speed: 500, // animation speed
  slidesToShow: 3, // how many slides visible at once
  slidesToScroll: 3, // how many slides to scroll per move
  autoplay: true, // enables auto play
  autoplaySpeed: 2000, // delay between slides
  arrows: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false

      }
    },
    {
      breakpoint: 768, // <768px (tablet / mobile)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
});


document.addEventListener("DOMContentLoaded", function() {
  const lightbox = GLightbox({
    selector: '.glightbox', // all images in gallery
    loop: true,             // allow next/prev navigation
    touchNavigation: true,  // swipe support
    zoomable: true          // allow zooming
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([49.036025,30.878545], 13);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);
  // 3. Додаємо маркер

 const myHome = L.marker([49.036025,30.878545])
    .addTo(map)
    .bindPopup('home')
    .openPopup()
  L.marker([48.87,29.76])
    .addTo(map)
    .bindPopup('work')
    .openPopup()
  L.marker([48.8566, 2.3522])
    .addTo(map)
    .bindPopup('dream')
    .openPopup()
  })