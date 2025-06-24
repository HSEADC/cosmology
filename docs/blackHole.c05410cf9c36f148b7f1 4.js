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
  question: 'Почему чёрная дыра называется «чёрной»?',
  answers: [{
    text: 'Потому что в ней очень темно',
    count: 0
  }, {
    text: 'Потому что она не отражает свет',
    count: 0
  }, {
    text: 'Потому что из неё не может выйти даже свет',
    count: 1
  }, {
    text: 'Потому что она поглощает планеты',
    count: 0
  }]
}, {
  question: 'Что такое горизонт событий?',
  answers: [{
    text: 'Линия на небе, где заканчивается гравитация',
    count: 0
  }, {
    text: 'Граница, за которую ничего не может вернуться',
    count: 1
  }, {
    text: 'Слой атмосферы вокруг чёрной дыры',
    count: 0
  }, {
    text: 'Оптический эффект от искажения света',
    count: 0
  }]
}, {
  question: 'Как появляется чёрная дыра?',
  answers: [{
    text: 'Из столкновения двух планет',
    count: 0
  }, {
    text: 'Из падения материи в пустоту',
    count: 0
  }, {
    text: 'Из антиматерии',
    count: 0
  }, {
    text: 'Из коллапса ядра массивной звезды после взрыва сверхновой',
    count: 1
  }]
}, {
  question: 'Что такое сингулярность?',
  answers: [{
    text: 'Центр чёрной дыры с бесконечной плотностью',
    count: 1
  }, {
    text: 'Теория об искривлённом времени',
    count: 0
  }, {
    text: 'Название гравитационного всплеска',
    count: 0
  }, {
    text: 'Момент испарения чёрной дыры',
    count: 0
  }]
}, {
  question: 'Кто предложил идею об излучении чёрных дыр?',
  answers: [{
    text: 'Альберт Эйнштейн',
    count: 0
  }, {
    text: 'Карл Саган',
    count: 0
  }, {
    text: 'Стивен Хокинг',
    count: 1
  }, {
    text: 'Ричард Фейнман',
    count: 0
  }]
}, {
  question: 'Что говорит голографическая теория?',
  answers: [{
    text: 'Всё внутри чёрной дыры исчезает навсегда',
    count: 0
  }, {
    text: 'Поверхность чёрной дыры хранит всю информацию',
    count: 1
  }, {
    text: 'Чёрные дыры создают голограммы',
    count: 0
  }, {
    text: 'Информация рассеивается в пространстве',
    count: 0
  }]
}, {
  question: 'Что было запечатлено на первом изображении чёрной дыры в 2019 году?',
  answers: [{
    text: 'Сама чёрная дыра',
    count: 0
  }, {
    text: 'Ядро галактики',
    count: 1
  }, {
    text: 'Слияние чёрных дыр',
    count: 0
  }, {
    text: 'Тень от горизонта событий',
    count: 0
  }]
}];
var results = [{
  resultText: 'Ещё не затянуло в тему — самое время прочитать статью! Там всё чётко и без формул.'
}, {
  resultText: ' Ты неплохо ориентируешься — и знаешь, что сингулярность не шутка. Немного теории — и ты на уровне Хокинга.'
}, {
  resultText: 'Ты видишь сквозь пространство и время, и возможно, уже сам(а) читаешь статьи по физике. Или просто обожаешь космос. В любом случае, респект.'
}];
document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .v)(stages);
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .I)(stages, results);
});
/******/ })()
;