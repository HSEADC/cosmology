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
  question: 'Как рождаются звёзды?',
  answers: [{
    text: 'Из сжатия космической пыли под давлением света',
    count: 0
  }, {
    text: 'Из гравитационного сжатия облаков водорода',
    count: 1
  }, {
    text: 'Из остатков взорванных планет',
    count: 0
  }, {
    text: 'Из столкновения чёрных дыр',
    count: 0
  }]
}, {
  question: 'Что происходит в ядре звезды в течение большей части её жизни?',
  answers: [{
    text: 'Распад тяжёлых элементов',
    count: 0
  }, {
    text: 'Сжатие пыли',
    count: 0
  }, {
    text: 'Слияние водорода в гелий',
    count: 1
  }, {
    text: 'Образование планет',
    count: 0
  }]
}, {
  question: 'От чего зависит цвет звезды?',
  answers: [{
    text: 'От её размера',
    count: 0
  }, {
    text: 'От скорости вращения',
    count: 0
  }, {
    text: 'От температуры поверхности',
    count: 1
  }, {
    text: 'От расстояния до Земли',
    count: 0
  }]
}, {
  question: 'Какой цвет у самой горячей звезды?',
  answers: [{
    text: 'Красный',
    count: 0
  }, {
    text: 'Жёлтый',
    count: 0
  }, {
    text: 'Белый',
    count: 0
  }, {
    text: 'Синий',
    count: 1
  }]
}, {
  question: 'Что произойдёт с Солнцем в будущем?',
  answers: [{
    text: 'Оно превратится в чёрную дыру',
    count: 0
  }, {
    text: 'Взорвётся как сверхновая',
    count: 0
  }, {
    text: 'Станет белым карликом после стадии красного гиганта',
    count: 1
  }, {
    text: 'Потухнет и исчезнет',
    count: 0
  }]
}, {
  question: 'Что такое сверхновая?',
  answers: [{
    text: 'Новая звезда, недавно сформировавшаяся',
    count: 0
  }, {
    text: 'Звезда, вышедшая на новый этап жизни',
    count: 0
  }, {
    text: 'Взрыв массивной звезды в конце её жизни',
    count: 1
  }, {
    text: 'Гигантская планета, отражающая свет',
    count: 0
  }]
}, {
  question: 'Почему звёзды не могут быть зелёными?',
  answers: [{
    text: 'Зелёный свет не проходит сквозь вакуум',
    count: 0
  }, {
    text: 'Глаза человека не видят зелёный свет в темноте',
    count: 0
  }, {
    text: 'Потому что звезда излучает свет сразу во всех цветах, и зелёный «теряется» среди них ',
    count: 1
  }, {
    text: 'Потому что температура не может быть такой, чтобы получился зелёный',
    count: 0
  }]
}, {
  question: 'Самая яркая звезда на ночном небе — это:',
  answers: [{
    text: 'Полярная звезда',
    count: 0
  }, {
    text: 'Сириус',
    count: 1
  }, {
    text: 'Альдебаран',
    count: 0
  }, {
    text: 'Бетельгейзе',
    count: 0
  }]
}, {
  question: 'Почему звёзды «мерцают», когда мы смотрим на них с Земли?',
  answers: [{
    text: 'Из-за турбулентности в атмосфере Земли',
    count: 1
  }, {
    text: 'Из-за вращения галактики',
    count: 0
  }, {
    text: 'Они на самом деле пульсируют',
    count: 0
  }, {
    text: 'Из-за их собственного магнитного поля',
    count: 0
  }]
}, {
  question: 'Как называется группа звёзд, движущихся вместе в космосе?',
  answers: [{
    text: 'Галактика',
    count: 0
  }, {
    text: 'Туманность',
    count: 0
  }, {
    text: 'Звёздное облако',
    count: 0
  }, {
    text: 'Звёздное скопление',
    count: 1
  }]
}];
var results = [{
  resultText: 'Ты только формируешься в густом облаке космической пыли. Вокруг темно, но внутри уже есть свет. Ещё чуть-чуть — и ты засияешь!'
}, {
  resultText: 'Ты уже уверенно горишь — не суперярко, но стабильно. Твоя температура — комфортная, как у жёлтого карлика (да-да, как Солнце!).'
}, {
  resultText: 'Сверхновая рок-звезда! Твоя эрудиция ослепляет как последняя вспышка перед превращением в нейтронную звезду. Ты не просто звёздочка — ты галактический феномен!'
}];
document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .v)(stages);
  (0,_showTests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .I)(stages, results);
});
/******/ })()
;