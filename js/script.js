'use strict';
// Переключение мобильного меню
var header = document.querySelector('.page-header');
var menu = header.querySelector('.main-navigation');
var toggle = header.querySelector('.page-header__toggle');

menu.classList.add('main-navigation--closed');
toggle.classList.remove('page-header__toggle--menu-opened');

toggle.addEventListener('click', function(event){
  event.preventDefault();
  menu.classList.toggle('main-navigation--closed');
  toggle.classList.toggle('page-header__toggle--menu-opened');
});
