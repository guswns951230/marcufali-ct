'use strict'

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