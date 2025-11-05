'use strict';

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('close');
});
/*
const dotButtons = document.querySelectorAll('.dot');
const parent = document.getElementById('parent')

parent.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if(e.target.tagName !== 'BUTTON') return
  
  dotButtons.forEach(btn => btn.classList.remove('active'))
  e.target.classList.add('active')
})
*/


// smooth scroll
// $('.scroll-link').on('click', function (e) {
//   e.preventDefault(); 
//   const target = $(this).attr('href'); 

//   $('html, body').animate({
//     scrollTop: $(target).offset().top
//   }, 2000); 
// });

$('.screen').slick({
  dots: true,
  arrows: false
});

$('.card__box').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true
});
