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
var hamMenu = document.querySelector('.M_Navigation.hamMenu');
var closeMenu = document.querySelector('.M_Navigation.closeMenu');
var offScreenMenu = document.querySelector('.M_Navigation.overlay');
hamMenu.addEventListener('click', function () {
  hamMenu.classList.add('active');
  offScreenMenu.classList.add('active');
});
closeMenu.addEventListener('click', function () {
  hamMenu.classList.remove('active');
  offScreenMenu.classList.remove('active');
});
/******/ })()
;