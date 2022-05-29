'use strict'

// modal
const modal = document.querySelector('.store__modal');
const imgs = document.querySelectorAll('.store__img')
const modalImg = document.querySelector('.store__modal-img');
const span = document.querySelector('.store__modal-close');

function modalDisplay(text) {
  modal.style.display = text;
}

imgs.forEach(img => {
  img.addEventListener('click', () => {
    modalDisplay('block');
    modalImg.src = img.src;
  });
});

span.addEventListener('click', () => {
  modalDisplay('none');
});

modal.addEventListener('click', () => {
  modalDisplay('none');
});

// map api
let marcufali = new naver.maps.LatLng(35.1786420, 129.1271746);

let map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(35.1786420, 129.1271746),

  zoomControl: true,
  zoomControlOptions: {
    position: naver.maps.Position.RIGHT_CENTER
  },

  zoom: 16
});

let marker = new naver.maps.Marker({
  position: marcufali,
  map: map
});