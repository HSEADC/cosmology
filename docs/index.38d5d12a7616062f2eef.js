/******/ (() => { // webpackBootstrap
/******/ 	"use strict";


/* ------------------------- headerActiveLinks ----------------------- */
var pathName = window.location.pathname;
var pageName = pathName.split('/').pop();
if (pageName === 'articles.html' || pageName === 'black-hole.html' || pageName === 'eclipse.html' || pageName === 'universe-secrets.html' || pageName === 'universe-smell.html' || pageName === 'big-bang.html' || pageName === 'black-hole.html' || pageName === 'cosmic-distance.html' || pageName === 'moon-fall.html' || pageName === 'cosmic-web.html' || pageName === 'moon-questions.html' || pageName === 'other-planets.html' || pageName === 'star-weight.html' || pageName === 'universe-is-not-infinite.html' || pageName === 'water-oxygen.html') {
  document.querySelector('#articles').classList.add('activePage');
}
if (pageName === 'cards.html') {
  document.querySelector('#cards').classList.add('activePage');
}
if (pageName === 'tests.html' || pageName === 'about-stars-test.html' || pageName === 'big-bang-test.html' || pageName === 'black-hole-test.html' || pageName === 'cosmic-distance-test.html' || pageName === 'moon-fall-test.html' || pageName === 'space-inside-test.html') {
  document.querySelector('#tests').classList.add('activePage');
}
if (pageName === 'about.html') {
  document.querySelector('#about').classList.add('activePage');
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