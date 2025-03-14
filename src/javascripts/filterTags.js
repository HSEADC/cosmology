console.clear()
document.addEventListener('DOMContentLoaded', () => {
  initFilter()
})

function initFilter() {
  const filters = document.querySelectorAll('.A_filterButton')
  const tagAll = document.querySelector('.all')

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      if (filter != tagAll) {
        tagAll.classList.remove('active')
        filter.classList.toggle('active')

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
  const articles = document.querySelectorAll('.O_cardArticle')
  const activeTags = document.querySelectorAll('.active')
  let tagList = []
  let count

  articles.forEach((article) => {
    article.style.display = 'none'
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
  })
}

function filterAll() {
  const articles = document.querySelectorAll('.O_cardArticle')
  const activeTags = document.querySelectorAll('.active')

  activeTags.forEach((tag) => {
    if (tag.classList.contains('all')) {
      articles.forEach((article) => {
        article.style.display = 'block'
      })
    }
  })
}
