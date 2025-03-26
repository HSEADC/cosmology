/******/ (() => { // webpackBootstrap
/* popups for cards */
var popups = document.querySelectorAll('.W_popupOverlay');
var cardButtons = document.querySelectorAll('.O_cardInfo');
var closeButtons = document.querySelectorAll('.Q_closeButton');
var popupContents = document.querySelectorAll('.O_moreCardInfo');
var body = document.querySelector('.popup');
var zIndexChange = document.querySelectorAll('.W_cards, .W_articles, .W_tests .O_chapter');
function openPopup(index) {
  popups[index].classList.add('activePopup');
  body.classList.add('scrollLock');
  zIndexChange.forEach(function (element) {
    element.style.zIndex = 'auto';
  });
}
cardButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    return openPopup(index);
  });
});
function closeAllPopups() {
  popups.forEach(function (popup) {
    popup.classList.remove('activePopup');
  });
  body.classList.remove('scrollLock');
  zIndexChange.forEach(function (element) {
    element.style.zIndex = '';
  });
}
closeButtons.forEach(function (button) {
  button.addEventListener('click', closeAllPopups);
});
popups.forEach(function (popup) {
  popup.addEventListener('click', closeAllPopups);
});
popupContents.forEach(function (content) {
  content.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
/******/ })()
;