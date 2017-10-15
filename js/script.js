'use strict';
// Переключение мобильного меню
var header = document.querySelector('.page-header');
var menu = header.querySelector('.main-navigation');
var toggle = header.querySelector('.page-header__toggle');

menu.classList.add('main-navigation--closed');
toggle.classList.remove('page-header__toggle--no-js');

toggle.addEventListener('click', function(event){
  event.preventDefault();
  menu.classList.toggle('main-navigation--closed');
  toggle.classList.toggle('page-header__toggle--menu-opened');
});

//Маркет на карте на главной странице.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 34.7934198, lng: -111.6862946}
  });

  var image = 'img/map-marker.svg';
  var beachMarker = new google.maps.Marker({
    position: {lat: 34.7934198, lng: -111.6862946},
    map: map,
    icon: image
  });
}
