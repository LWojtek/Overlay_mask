const button = document.querySelector('.btn');
const buttonWrap = document.querySelector('.button__wrap');
const overlay = document.querySelector('.header');
const span = document.querySelector('.span');
const div = document.querySelector('.slanted__div');

button.addEventListener('mouseover', () => {
      overlay.style.opacity = '0';
      div.style.backgroundColor = 'rgb(8, 163, 184';
      div.style.transition = '.7s';

})

button.addEventListener('mouseout', () => {
      overlay.style.opacity = '1';
      div.style.backgroundColor = 'rgb(255, 165, 0)';

      // div.style.background = 'linear-gradient(to right, rgb(8, 163, 184) 80%, rgb(255, 165, 0) 115%)';
})