/* popups for cards */
const popups = document.querySelectorAll('.W_popupOverlay')
const cardButtons = document.querySelectorAll('.O_cardInfo')
const closeButtons = document.querySelectorAll('.Q_closeButton')
const popupContents = document.querySelectorAll('.O_moreCardInfo')
const body = document.querySelector('.popup')
const zIndexChange = document.querySelectorAll(
  '.W_cards, .W_articles, .W_tests .O_chapter'
)

function openPopup(index) {
  popups[index].classList.add('activePopup')
  body.classList.add('scrollLock')
  zIndexChange.forEach((element) => {
    element.style.zIndex = 'auto'
  })
}

cardButtons.forEach((button, index) => {
  button.addEventListener('click', () => openPopup(index))
})

function closeAllPopups() {
  popups.forEach((popup) => {
    popup.classList.remove('activePopup')
  })
  body.classList.remove('scrollLock')
  zIndexChange.forEach((element) => {
    element.style.zIndex = ''
  })
}

closeButtons.forEach((button) => {
  button.addEventListener('click', closeAllPopups)
})

popups.forEach((popup) => {
  popup.addEventListener('click', closeAllPopups)
})

popupContents.forEach((content) => {
  content.addEventListener('click', (event) => {
    event.stopPropagation()
  })
})
