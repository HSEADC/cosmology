/******/ (() => { // webpackBootstrap
/******/ 	"use strict";


/* ------------------------- headerActiveLinks ----------------------- */
var pathName = window.location.pathname;
var pageName = pathName.split('/').pop();
if (pageName === 'articles.html') {
  document.querySelector('#articles').classList.add('activePage');
}
if (pageName === 'cards.html') {
  document.querySelector('#cards').classList.add('activePage');
}
if (pageName === 'tests.html') {
  document.querySelector('#tests').classList.add('activePage');
}

/* ------------------------- updateFilterButtonText ----------------------- */

function renameFilter() {
  var button = document.querySelector('.A_filterButton.big');
  if (!button) return;
  var width = window.innerWidth;
  if (width >= 375 && width <= 767) {
    button.innerText = 'Статьи';
  } else {
    button.innerText = 'Исследования';
  }
}
window.addEventListener('load', renameFilter);
window.addEventListener('resize', renameFilter);
/******/ })()
;