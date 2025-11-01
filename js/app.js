'use strict';

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('close');
});

const dotButtons = document.querySelectorAll('.dot');
const parent = document.getElementById('parent')

parent.addEventListener('click', (e) => {
  // if(e.target.classList.contains('active')){
  //    e.target.classList.remove('active')
  //    return
  // }
  dotButtons.forEach(btn => btn.classList.remove('active'))
   e.target.classList.add('active')
})

