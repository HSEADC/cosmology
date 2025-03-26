import './index.css'

/* ------------------------- headerActiveLinks ----------------------- */
const pathName = window.location.pathname
const pageName = pathName.split('/').pop()

if (pageName === 'articles.html') {
  document.querySelector('#articles').classList.add('activePage')
}

if (pageName === 'cards.html') {
  document.querySelector('#cards').classList.add('activePage')
}

if (pageName === 'tests.html') {
  document.querySelector('#tests').classList.add('activePage')
}

const hamMenu = document.querySelector('.M_Navigation.hamMenu')
const closeMenu = document.querySelector('.M_Navigation.closeMenu')
const offScreenMenu = document.querySelector('.M_Navigation.overlay')

hamMenu.addEventListener('click', () => {
  hamMenu.classList.add('active')
  offScreenMenu.classList.add('active')
})

closeMenu.addEventListener('click', () => {
  hamMenu.classList.remove('active')
  offScreenMenu.classList.remove('active')
})
