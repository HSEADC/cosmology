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
  question: 'Большой взрыв — это...',
  answers: [{
    text: 'Момент, когда из ничего возникла материя в пустом пространстве',
    count: 0
  }, {
    text: 'Взрыв огромной звезды в далёкой галактике',
    count: 0
  }, {
    text: 'Расширение самого пространства, изначально сверхгорячего и плотного',
    count: 1
  }, {
    text: 'Начало времени, но не пространства',
    count: 0
  }]
}, {
  question: 'Что обнаружил Эдвин Хаббл?',
  answers: [{
    text: 'Звёзды пульсируют в такт расширению',
    count: 0
  }, {
    text: 'Галактики удаляются друг от друга',
    count: 1
  }, {
    text: 'Вселенная вращается вокруг центра',
    count: 0
  }, {
    text: 'У Земли особая роль во Вселенной',
    count: 0
  }]
}, {
  question: 'Что такое реликтовое излучение?',
  answers: [{
    text: 'Свет далёких галактик',
    count: 0
  }, {
    text: 'Космический шум от чёрных дыр',
    count: 0
  }, {
    text: 'Отголосок первых секунд после Большого взрыва',
    count: 1
  }, {
    text: 'Остаточная радиация от Солнца',
    count: 0
  }]
}, {
  question: 'Что было «до» Большого взрыва?',
  answers: [{
    text: 'Другой мир',
    count: 0
  }, {
    text: 'Тёмная материя',
    count: 0
  }, {
    text: 'Никто не знает — возможно, не было даже самого понятия «до»',
    count: 1
  }, {
    text: 'Коллапс старой Вселенной',
    count: 0
  }]
}, {
  question: 'Из чего состоит 95% Вселенной?',
  answers: [{
    text: 'Газ, пыль и звёзды',
    count: 0
  }, {
    text: 'Тёмная материя и тёмная энергия',
    count: 1
  }, {
    text: 'Космические лучи',
    count: 0
  }, {
    text: 'Чёрные дыры',
    count: 0
  }]
}];
var results = [{
  resultText: 'Даже тёмная материя знает больше. Но ты в хорошей компании — так начинали все великие исследователи.'
}, {
  resultText: 'Интерес к космосу у тебя есть, и это главное. Начало положено — пора расширяться, как Вселенная.'
}, {
  resultText: 'Ты уже почти как реликтовое излучение — везде и про всё знаешь. Время лететь преподавать астрофизику.'
}];
document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .v)(stages);
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .I)(stages, results);
});
/******/ })()
;