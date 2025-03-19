/* popups for cards */
const popups = document.querySelectorAll('.W_popupOverlay')
const cardButtons = document.querySelectorAll('.O_cardInfo')
const closeButtons = document.querySelectorAll('.Q_closeButton')
const popupContents = document.querySelectorAll('.O_moreCardInfo')
const body = document.querySelector('.cards')

function openPopup(index) {
  popups[index].classList.add('activePopup')
  body.classList.add('scrollLock')
}

cardButtons.forEach((button, index) => {
  button.addEventListener('click', () => openPopup(index))
})

function closeAllPopups() {
  popups.forEach((popup) => {
    popup.classList.remove('activePopup')
  })
  body.classList.remove('scrollLock')
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
