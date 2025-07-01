/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ chooseAnswer),
/* harmony export */   v: () => (/* binding */ initTest)
/* harmony export */ });
var radioButtons = document.querySelectorAll('.Q_radioButton');
var resultCount = 0;
var currentStage = 0;
function initTest(stages) {
  var numberOfQuestion = document.querySelector('.A_h2.numberOfQuestion');
  var question = document.querySelector('.A_h3.question');
  var answers = document.querySelectorAll('.A_h4.answerText');
  numberOfQuestion.innerHTML = "".concat(currentStage + 1, " / ").concat(stages.length);
  question.innerHTML = stages[currentStage].question;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text;
  }
  for (var _i = 0; _i < radioButtons.length; _i++) {
    radioButtons[_i].dataset.count = stages[currentStage].answers[_i].count;
  }
}
function chooseAnswer(stages, results) {
  var testForward = document.querySelector('.A_mainButton.testForward');
  var testBackward = document.querySelector('.A_mainButton.testBackward');
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      resultCount += Number(radioButton.dataset.count);
    });
  });
  testForward.addEventListener('click', function () {
    updateStage(stages, results);
    radioButtons.forEach(function (radioButton) {
      radioButton.checked = false;
    });
  });
  testBackward.addEventListener('click', function () {
    previousStage(stages, results);
    radioButtons.forEach(function (radioButton) {
      radioButton.checked = false;
    });
  });
}
function updateStage(stages, results) {
  if (currentStage + 1 < stages.length) {
    currentStage++;
    initTest(stages);
  } else {
    showResult(stages, results);
  }
}
function previousStage(stages, results) {
  if (currentStage - 1 >= 0) {
    currentStage--;
    initTest(stages);
  } else {
    showResult(stages, results);
  }
}
function showResult(stages, results) {
  var popups = document.querySelector('.W_popupOverlay');
  var body = document.querySelector('.test');
  popups.classList.add('activePopup');
  body.classList.add('scrollLock');
  var points = document.querySelector('.A_H1.points');
  var resultText = document.querySelector('.A_h4.resultText');
  points.innerHTML = "".concat(resultCount, " / ").concat(stages.length);
  if (stages.length == 10) {
    if (resultCount >= 8) {
      resultText.innerHTML = results[2].resultText;
    } else if (resultCount <= 3) {
      resultText.innerHTML = results[0].resultText;
    } else {
      resultText.innerHTML = results[1].resultText;
    }
  } else if (stages.length == 7) {
    if (resultCount >= 6) {
      resultText.innerHTML = results[2].resultText;
    } else if (resultCount <= 2) {
      resultText.innerHTML = results[0].resultText;
    } else {
      resultText.innerHTML = results[1].resultText;
    }
  } else if (stages.length == 5) {
    if (resultCount >= 4) {
      resultText.innerHTML = results[2].resultText;
    } else if (resultCount <= 1) {
      resultText.innerHTML = results[0].resultText;
    } else {
      resultText.innerHTML = results[1].resultText;
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var _showTests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);


// база данных: список вопросов и ответов
var stages = [{
  question: 'Почему Луна не падает на Землю, несмотря на гравитацию?',
  answers: [{
    text: 'Она привязана невидимой космической верёвочкой',
    count: 0
  }, {
    text: 'Потому что всё время летит вперёд и «промахивается»',
    count: 1
  }, {
    text: 'Слишком далеко, чтобы притягиваться',
    count: 0
  }, {
    text: 'У Земли нет на неё сил',
    count: 0
  }]
}, {
  question: 'Что такое орбита?',
  answers: [{
    text: 'Круг, по которому планеты катаются как на карусели',
    count: 0
  }, {
    text: 'Линия, по которой спутник летит строго по прямой',
    count: 0
  }, {
    text: 'Траектория падения, в которой тело всё время смещается вбок',
    count: 1
  }, {
    text: 'Случайный путь между планетами',
    count: 0
  }]
}, {
  question: 'Какова скорость движения Луны по орбите вокруг Земли?',
  answers: [{
    text: 'Около 100 км/ч — как поезд',
    count: 0
  }, {
    text: 'Почти 3 700 км/ч — как реактивный самолёт',
    count: 1
  }, {
    text: '10 000 км/ч — супербыстро!',
    count: 0
  }, {
    text: 'Стоит на месте и просто крутится',
    count: 0
  }]
}, {
  question: 'Что произойдёт, если Луна перестанет двигаться вперёд?',
  answers: [{
    text: 'Она просто зависнет на месте',
    count: 0
  }, {
    text: 'Улетит в космос',
    count: 0
  }, {
    text: 'Начнёт падать на Землю',
    count: 1
  }, {
    text: 'Превратится в комету',
    count: 0
  }]
}, {
  question: 'Какая сила заставляет Луну двигаться вперёд по орбите?',
  answers: [{
    text: 'Гравитация',
    count: 0
  }, {
    text: 'Магнитное поле Земли',
    count: 0
  }, {
    text: 'Инерция',
    count: 1
  }, {
    text: 'Тёмная материя',
    count: 0
  }]
}, {
  question: 'Что такое центробежная сила по сути?',
  answers: [{
    text: 'Иллюзия из-за стремления тела двигаться прямо',
    count: 1
  }, {
    text: 'Настоящая сила, выталкивающая наружу',
    count: 0
  }, {
    text: 'Гравитационное отталкивание',
    count: 0
  }, {
    text: 'Мощная антиматерийная энергия',
    count: 0
  }]
}, {
  question: 'Как можно сравнить движение Луны с броском камня?',
  answers: [{
    text: 'Никак, совсем разные вещи',
    count: 0
  }, {
    text: 'Камень летит по прямой, Луна — по кругу',
    count: 0
  }, {
    text: 'Камень всегда падает, Луна — никогда',
    count: 0
  }, {
    text: 'Камень летит вперёд и вниз, как и Луна',
    count: 1
  }]
}];
var results = [{
  resultText: 'Похоже, Луна пока ускользает от твоих знаний! Не переживай — гравитация бывает коварной штукой. Освежи материал и попробуй снова.'
}, {
  resultText: 'Ты уже понимаешь, как Луна кружится вокруг Земли. Немного больше практики — и ты сможешь объяснять движение планет на ура.'
}, {
  resultText: 'Вау, ты настоящий космический гуру! С таким уровнем можно уже запускать ракеты и писать собственные законы гравитации!'
}];
document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .v)(stages);
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .I)(stages, results);
});
/******/ })()
;