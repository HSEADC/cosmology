import { getArticlesTeasers } from './search-data'

let content,
  container = document.querySelector('.S_Content')

document.addEventListener('DOMContentLoaded', () => {
  getArticlesTeasers().then((data) => {
    content = data
    initSearch()
  })
})

function initSearch() {
  const A_searchInput = document.querySelector('.A_searchInput')
  const A_searchButton = document.querySelector('.A_searchButton')

  let requestText = getSearchRequest()

  if (requestText != undefined) {
    A_searchInput.value = requestText

    if (content) {
      searchContent(requestText)
    }
  } else {
    A_searchInput.value = ''
  }

  A_searchInput.addEventListener('input', (e) => {
    requestText = e.target.value

    if (requestText.length >= 3) {
      A_searchButton.classList.remove('disabled')
    } else {
      A_searchButton.classList.add('disabled')
    }
  })

  A_searchInput.addEventListener('keydown', (e) => {
    requestText = e.target.value

    if (e.key === 'Enter') {
      setSearchRequest(requestText)
      searchContent(requestText)
    }
  })

  A_searchButton.addEventListener('click', (e) => {
    if (!e.target.classList.contains('disabled')) {
      requestText = A_searchInput.value
      setSearchRequest(requestText)
      searchContent(requestText)
    }
  })
}

function setSearchRequest(requestText) {
  const url = window.location.href.split('?')[0]
  window.location.href = url + '?request=' + requestText
}

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

function searchContent(requestText) {
  container.innerHTML = ''

  let contentItemIds = []

  content.forEach((contentDataItem) => {
    const nbspRegEx = /[\u202F\u00A0]/gm
    const punctuationRegEx = /[.,\/#!$%\^&\*;:{}=\-_`()]/gm

    let { title, id } = contentDataItem
    title = title.replaceAll(nbspRegEx, ' ')
    title = title.replaceAll(punctuationRegEx, '')

    if (requestText.length >= 3) {
      if (title.includes(requestText)) {
        contentItemIds.push(id)
      } else {
        // contentItemIds.push(id)
      }
    }

    if (contentItemIds.length > 0) {
      renderCardsByIds(contentItemIds)
    } else {
      renderNothingFound()
    }
  })
}

function renderNothingFound() {
  container.innerHTML = 'Ничего не найдено :('
}

function renderCardsByIds(ids) {
  ids = [...new Set(ids)]

  ids.forEach((id) => {
    content.forEach((item) => {
      if (item.id === id) {
        createCards(item)
      }
    })
  })
}

function createCards(contentDataItem) {
  let { title, tag, image, url, className } = contentDataItem

  const contentItem = document.createElement('a')
  contentItem.classList.add('O_contentItem')
  contentItem.classList.add(`${className}`)
  contentItem.href = url

  const contentItemCover = document.createElement('img')
  contentItemCover.classList.add('A_contentItemCover')
  contentItemCover.src = image

  const contentItemTitle = document.createElement('h3')
  contentItemTitle.classList.add('A_contentItemTitle')
  contentItemTitle.innerText = title

  const contentItemTag = document.createElement('div')
  contentItemTag.classList.add('A_contentItemTag')
  contentItemTag.innerText = tag

  contentItem.appendChild(contentItemCover)
  contentItem.appendChild(contentItemTag)
  contentItem.appendChild(contentItemTitle)

  container.appendChild(contentItem)
}
