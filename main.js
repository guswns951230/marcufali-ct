'use strict'

// scroll
function scrollIntoViews(selector) {
  const menuHeight = document.querySelector("#header").offsetHeight;
  const sectionHeight = document.querySelector(selector).offsetTop;
  window.scrollTo({ top: sectionHeight - menuHeight, behavior: 'smooth' });
}

const headerMenu = document.querySelector('.header__menu');
headerMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoViews(link);
});

// toggle button
const toggleBtn = document.querySelector('.header__toggleBtn');
const menu = document.querySelector('.header__menu');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

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