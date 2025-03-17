/* filterTags for articles and tests */

console.clear()
document.addEventListener('DOMContentLoaded', () => {
  initFilter()
})

function initFilter() {
  const filters = document.querySelectorAll('.A_filterButton')
  const tagAll = document.querySelector('.all')

  const content = document.querySelector('.S_articlesContent, .S_testsContent')
  const cards = document.querySelectorAll('.O_cardArticle, .W_cardTest')

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      if (filter != tagAll) {
        tagAll.classList.remove('active')
        filter.classList.toggle('active')

        content.classList.remove('selected')
        cards.forEach((card) => {
          card.classList.remove('selected')
        })

        filterByTag()
      }

      let activeTags = document.querySelectorAll('.active')
      if (filter == tagAll && !filter.classList.contains('active')) {
        activeTags.forEach((tag) => {
          tag.classList.remove('active')
        })
        filter.classList.add('active')
        filterAll()
      }

      if (filters.length - 1 == activeTags.length || activeTags.length == 0) {
        activeTags.forEach((tag) => {
          tag.classList.remove('active')
        })
        tagAll.classList.add('active')
        filterAll()
      }
    })
  })
}

function filterByTag() {
  const cards = document.querySelectorAll('.O_cardArticle, .W_cardTest')
  const articles = document.querySelectorAll('.O_cardArticle')
  const tests = document.querySelectorAll('.W_cardTest')
  const activeTags = document.querySelectorAll('.active')
  let tagList = []
  let count

  cards.forEach((card) => {
    card.style.display = 'none'
  })

  activeTags.forEach((tag) => {
    let classList = tag.className.split(' ')
    classList = classList.sort()
    count = 1
    if (classList[1] == 'active') {
      count++
    }
    for (let i = count; i < classList.length; i++) {
      tagList.push(classList[i])
    }
  })

  tagList.forEach((tagName) => {
    articles.forEach((article) => {
      if (article.classList.contains(tagName)) {
        article.style.display = 'block'
      }
    })

    tests.forEach((test) => {
      if (test.classList.contains(tagName)) {
        test.style.display = 'flex'
      }
    })
  })
}

function filterAll() {
  const cards = document.querySelectorAll('.O_cardArticle, .W_cardTest')
  const articles = document.querySelectorAll('.O_cardArticle')
  const tests = document.querySelectorAll('.W_cardTest')
  const content = document.querySelector('.S_articlesContent, .S_testsContent')
  const activeTags = document.querySelectorAll('.active')

  activeTags.forEach((tag) => {
    if (tag.classList.contains('all')) {
      articles.forEach((article) => {
        article.style.display = 'block'
      })

      tests.forEach((test) => {
        test.style.display = 'flex'
      })
    }
  })
  content.classList.add('selected')
  cards.forEach((card) => {
    card.classList.add('selected')
  })
}
