/******/ (() => { // webpackBootstrap
console.clear();
document.addEventListener('DOMContentLoaded', function () {
  initFilter();
});
function initFilter() {
  var filters = document.querySelectorAll('.A_filterButton');
  var tagAll = document.querySelector('.all');
  var articlesContent = document.querySelector('.S_articlesContent');
  var articles = document.querySelectorAll('.O_cardArticle');
  filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      if (filter != tagAll) {
        tagAll.classList.remove('active');
        filter.classList.toggle('active');
        articlesContent.classList.remove('selected');
        articles.forEach(function (article) {
          article.classList.remove('selected');
        });
        filterByTag();
      }
      var activeTags = document.querySelectorAll('.active');
      if (filter == tagAll && !filter.classList.contains('active')) {
        activeTags.forEach(function (tag) {
          tag.classList.remove('active');
        });
        filter.classList.add('active');
        filterAll();
      }
      if (filters.length - 1 == activeTags.length || activeTags.length == 0) {
        activeTags.forEach(function (tag) {
          tag.classList.remove('active');
        });
        tagAll.classList.add('active');
        filterAll();
      }
    });
  });
}
function filterByTag() {
  var articles = document.querySelectorAll('.O_cardArticle');
  var activeTags = document.querySelectorAll('.active');
  var tagList = [];
  var count;
  articles.forEach(function (article) {
    article.style.display = 'none';
  });
  activeTags.forEach(function (tag) {
    var classList = tag.className.split(' ');
    classList = classList.sort();
    count = 1;
    if (classList[1] == 'active') {
      count++;
    }
    for (var i = count; i < classList.length; i++) {
      tagList.push(classList[i]);
    }
  });
  tagList.forEach(function (tagName) {
    articles.forEach(function (article) {
      if (article.classList.contains(tagName)) {
        article.style.display = 'block';
      }
    });
  });
}
function filterAll() {
  var articles = document.querySelectorAll('.O_cardArticle');
  var articlesContent = document.querySelector('.S_articlesContent');
  var activeTags = document.querySelectorAll('.active');
  activeTags.forEach(function (tag) {
    if (tag.classList.contains('all')) {
      articles.forEach(function (article) {
        article.style.display = 'block';
      });
    }
  });
  articlesContent.classList.add('selected');
  articles.forEach(function (article) {
    article.classList.add('selected');
  });
}
/******/ })()
;