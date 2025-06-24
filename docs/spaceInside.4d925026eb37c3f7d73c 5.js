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
  question: 'Что составляет большую часть массы Вселенной?',
  answers: [{
    text: 'Звёзды и планеты',
    count: 0
  }, {
    text: 'Свет',
    count: 0
  }, {
    text: 'Тёмная материя',
    count: 1
  }, {
    text: 'Газовые туманности',
    count: 0
  }]
}, {
  question: 'Что такое межзвёздное вещество?',
  answers: [{
    text: 'Космическая пыль, которая прилипает к телескопам',
    count: 0
  }, {
    text: 'Материя, заполняющая пространство между звёздами',
    count: 1
  }, {
    text: 'Остатки спутников',
    count: 0
  }, {
    text: 'Тонкий слой атмосферы звёзд',
    count: 0
  }]
}, {
  question: 'Как называется область, где рождаются звёзды?',
  answers: [{
    text: 'Гравитационное эхо',
    count: 0
  }, {
    text: 'Туманность',
    count: 1
  }, {
    text: 'Космический пузырь',
    count: 0
  }, {
    text: 'Антиматерия',
    count: 0
  }]
}, {
  question: 'Из чего в основном состоят звёзды?',
  answers: [{
    text: 'Водород и гелий',
    count: 1
  }, {
    text: 'Кислород и азот',
    count: 0
  }, {
    text: 'Углерод и железо',
    count: 0
  }, {
    text: 'Свет и огонь',
    count: 0
  }]
}, {
  question: 'Почему Вселенная прозрачна, хотя в ней много вещества?',
  answers: [{
    text: 'Потому что свет проходит сквозь атомы',
    count: 0
  }, {
    text: 'Потому что большая часть материи — в форме тёмной энергии',
    count: 0
  }, {
    text: 'Потому что плотность вещества очень мала',
    count: 1
  }, {
    text: 'Потому что вакуум отражает свет',
    count: 0
  }]
}, {
  question: 'Что такое космическая пыль?',
  answers: [{
    text: 'Микроскопические фрагменты метеоритов',
    count: 0
  }, {
    text: 'Остатки разорвавшихся планет',
    count: 0
  }, {
    text: 'Твёрдые частицы размером от молекул до песчинок, из углерода, кремния и льда',
    count: 1
  }, {
    text: 'Радиация в твёрдой форме',
    count: 0
  }]
}, {
  question: 'Что мы видим, когда смотрим на Млечный Путь?',
  answers: [{
    text: 'Полосу межгалактического газа',
    count: 0
  }, {
    text: 'Свет далёких галактик',
    count: 0
  }, {
    text: 'Скопление метеоров',
    count: 0
  }, {
    text: 'Нашу галактику «изнутри», через её диск',
    count: 1
  }]
}];
var results = [{
  resultText: 'Ты стоишь у границы понимания. Космос пока как темнота за окном: пугающий, но манящий. Самое время начать исследование.'
}, {
  resultText: 'Ты уже заглядываешь за звёзды и замечаешь, что Вселенная — не просто точки света. Продолжай исследовать вещества и пустоты.'
}, {
  resultText: 'Ты как будто разговариваешь с космосом на его языке. Видишь не только свет, но и тьму, слышишь шёпот реликтового излучения.'
}];
document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .v)(stages);
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .I)(stages, results);
});
/******/ })()
;