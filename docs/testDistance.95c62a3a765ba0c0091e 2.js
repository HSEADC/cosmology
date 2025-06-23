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
  question: 'Что такое световой год?',
  answers: [{
    text: 'Время, за которое свет облетает Землю',
    count: 0
  }, {
    text: 'Расстояние, которое свет проходит за год',
    count: 1
  }, {
    text: 'Скорость света, умноженная на 365',
    count: 0
  }, {
    text: 'Время, за которое до Земли доходит солнечный свет',
    count: 0
  }]
}, {
  question: 'Кто дальше от Земли?',
  answers: [{
    text: 'Проксима Центавра',
    count: 0
  }, {
    text: 'Солнце',
    count: 0
  }, {
    text: 'Галактика Андромеды',
    count: 1
  }, {
    text: 'Сириус',
    count: 0
  }]
}, {
  question: 'Сколько километров в одном световом годе?',
  answers: [{
    text: '150 миллионов',
    count: 0
  }, {
    text: '3,26 триллиона',
    count: 0
  }, {
    text: '9,46 триллиона',
    count: 1
  }, {
    text: 'Бесконечно много (потому что космос!)',
    count: 0
  }]
}, {
  question: 'Какой метод измерения расстояний используется для ближайших звёзд?',
  answers: [{
    text: 'Красное смещение',
    count: 0
  }, {
    text: 'Космическая рулетка',
    count: 0
  }, {
    text: 'Параллакс',
    count: 1
  }, {
    text: 'Цефеиды',
    count: 0
  }]
}, {
  question: 'Как астрономы «вычисляют» расстояние до далёких галактик, используя цефеиды?',
  answers: [{
    text: 'Считают количество вспышек',
    count: 0
  }, {
    text: 'Сравнивают видимую и истинную яркость',
    count: 1
  }, {
    text: 'Используют термометры',
    count: 0
  }, {
    text: 'Слушают космический гул',
    count: 0
  }]
}, {
  question: 'Парсек — это примерно:',
  answers: [{
    text: '1 световой год',
    count: 0
  }, {
    text: '1000 км',
    count: 0
  }, {
    text: '3,26 световых лет',
    count: 1
  }, {
    text: 'Время полёта до Луны',
    count: 0
  }]
}, {
  question: 'Красное смещение говорит нам о том, что галактика:',
  answers: [{
    text: 'Приближается',
    count: 0
  }, {
    text: 'Далеко от чёрной дыры',
    count: 0
  }, {
    text: 'Удаляется',
    count: 1
  }, {
    text: 'Испускает тепло',
    count: 0
  }]
}, {
  question: 'Цефеиды — это:',
  answers: [{
    text: 'Карликовые планеты',
    count: 0
  }, {
    text: 'Переменные звезды с известной светимостью',
    count: 1
  }, {
    text: 'Остатки сверхновых',
    count: 0
  }, {
    text: 'Космические пульсары',
    count: 0
  }]
}, {
  question: 'Что значит: «мы видим галактику такой, какой она была 13 миллиардов лет назад»?',
  answers: [{
    text: 'Галактика перестала существовать',
    count: 0
  }, {
    text: 'Её свет шёл до нас 13 миллиардов лет',
    count: 1
  }, {
    text: 'Мы телепортировались в прошлое',
    count: 0
  }, {
    text: 'Телескоп был испорчен',
    count: 0
  }]
}, {
  question: 'Сколько времени свет от Солнца добирается до Земли?',
  answers: [{
    text: '~8 минут',
    count: 1
  }, {
    text: '1 секунда',
    count: 0
  }, {
    text: '1 час',
    count: 0
  }, {
    text: 'Мгновенно',
    count: 0
  }]
}];
var results = [{
  resultText: 'Ты только начинаешь путь по бескрайним просторам Вселенной. Продолжай изучать космос — а наше медиа подскажет, с чего начать.'
}, {
  resultText: 'Ты уже многое знаешь и уверенно ориентируешься среди световых лет и звёзд. Исследуй дальше — мы рядом и готовы делиться новыми знаниями.'
}, {
  resultText: 'Кажется, ты точно знаешь, где находится Андромеда и сколько километров в световом годе. Продолжай познавать космос, а наше медиа в этом поможет!'
}];
document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .v)(stages);
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .I)(stages, results);
});
/******/ })()
;