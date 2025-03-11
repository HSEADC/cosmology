/* ------------------------- activeLinks ----------------------- */
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
