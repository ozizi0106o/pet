"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var m_control = document.querySelector('#m_header_control');
  m_control.addEventListener('click', function () {
    var m_header = document.querySelector('.m_header');
    m_header.classList.toggle('m_toggle');
  });
});