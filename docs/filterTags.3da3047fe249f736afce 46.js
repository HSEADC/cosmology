/******/ (() => { // webpackBootstrap
/* filterTags for articles and tests */

console.clear();
document.addEventListener('DOMContentLoaded', function () {
  initFilter();
});
function initFilter() {
  var filters = document.querySelectorAll('.A_filterButton');
  var tagAll = document.querySelector('.all');
  var content = document.querySelector('.S_articlesContent, .S_testsContent');
  var cards = document.querySelectorAll('.O_cardArticle, .W_cardTest');
  filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      if (filter != tagAll) {
        tagAll.classList.remove('active');
        filter.classList.toggle('active');
        content.classList.remove('selected');
        cards.forEach(function (card) {
          card.classList.remove('selected');
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
  var cards = document.querySelectorAll('.O_cardArticle, .W_cardTest');
  var articles = document.querySelectorAll('.O_cardArticle');
  var tests = document.querySelectorAll('.W_cardTest');
  var activeTags = document.querySelectorAll('.active');
  var tagList = [];
  var count;
  cards.forEach(function (card) {
    card.style.display = 'none';
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
    tests.forEach(function (test) {
      if (test.classList.contains(tagName)) {
        test.style.display = 'flex';
      }
    });
  });
}
function filterAll() {
  var cards = document.querySelectorAll('.O_cardArticle, .W_cardTest');
  var articles = document.querySelectorAll('.O_cardArticle');
  var tests = document.querySelectorAll('.W_cardTest');
  var content = document.querySelector('.S_articlesContent, .S_testsContent');
  var activeTags = document.querySelectorAll('.active');
  activeTags.forEach(function (tag) {
    if (tag.classList.contains('all')) {
      articles.forEach(function (article) {
        article.style.display = 'block';
      });
      tests.forEach(function (test) {
        test.style.display = 'flex';
      });
    }
  });
  content.classList.add('selected');
  cards.forEach(function (card) {
    card.classList.add('selected');
  });
}
/******/ })()
;