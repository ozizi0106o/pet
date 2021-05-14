"use strict";

$(document).ready(function () {
  $('.envPictures').slick({
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: false,
    nextArrow: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});