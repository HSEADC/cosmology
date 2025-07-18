import { initTest, chooseAnswer } from './showTests.js'

// база данных: список вопросов и ответов
const stages = [
  {
    question: 'Почему чёрная дыра называется «чёрной»?',
    answers: [
      {
        text: 'Потому что в ней очень темно',
        count: 0
      },
      {
        text: 'Потому что она не отражает свет',
        count: 0
      },
      {
        text: 'Потому что из неё не может выйти даже свет',
        count: 1
      },
      {
        text: 'Потому что она поглощает планеты',
        count: 0
      }
    ]
  },

  {
    question: 'Что такое горизонт событий?',
    answers: [
      {
        text: 'Линия на небе, где заканчивается гравитация',
        count: 0
      },
      {
        text: 'Граница, за которую ничего не может вернуться',
        count: 1
      },
      {
        text: 'Слой атмосферы вокруг чёрной дыры',
        count: 0
      },
      {
        text: 'Оптический эффект от искажения света',
        count: 0
      }
    ]
  },

  {
    question: 'Как появляется чёрная дыра?',
    answers: [
      {
        text: 'Из столкновения двух планет',
        count: 0
      },
      {
        text: 'Из падения материи в пустоту',
        count: 0
      },
      {
        text: 'Из антиматерии',
        count: 0
      },
      {
        text: 'Из коллапса ядра массивной звезды после взрыва сверхновой',
        count: 1
      }
    ]
  },

  {
    question: 'Что такое сингулярность?',
    answers: [
      {
        text: 'Центр чёрной дыры с бесконечной плотностью',
        count: 1
      },
      {
        text: 'Теория об искривлённом времени',
        count: 0
      },
      {
        text: 'Название гравитационного всплеска',
        count: 0
      },
      {
        text: 'Момент испарения чёрной дыры',
        count: 0
      }
    ]
  },

  {
    question: 'Кто предложил идею об излучении чёрных дыр?',
    answers: [
      {
        text: 'Альберт Эйнштейн',
        count: 0
      },
      {
        text: 'Карл Саган',
        count: 0
      },
      {
        text: 'Стивен Хокинг',
        count: 1
      },
      {
        text: 'Ричард Фейнман',
        count: 0
      }
    ]
  },

  {
    question: 'Что говорит голографическая теория?',
    answers: [
      {
        text: 'Всё внутри чёрной дыры исчезает навсегда',
        count: 0
      },
      {
        text: 'Поверхность чёрной дыры хранит всю информацию',
        count: 1
      },
      {
        text: 'Чёрные дыры создают голограммы',
        count: 0
      },
      {
        text: 'Информация рассеивается в пространстве',
        count: 0
      }
    ]
  },

  {
    question:
      'Что было запечатлено на первом изображении чёрной дыры в 2019 году?',
    answers: [
      {
        text: 'Сама чёрная дыра',
        count: 0
      },
      {
        text: 'Ядро галактики',
        count: 1
      },
      {
        text: 'Слияние чёрных дыр',
        count: 0
      },
      {
        text: 'Тень от горизонта событий',
        count: 0
      }
    ]
  }
]

const results = [
  {
    resultText:
      'Ещё не затянуло в тему — самое время прочитать статью! Там всё чётко и без формул.'
  },
  {
    resultText:
      ' Ты неплохо ориентируешься — и знаешь, что сингулярность не шутка. Немного теории — и ты на уровне Хокинга.'
  },
  {
    resultText:
      'Ты видишь сквозь пространство и время, и возможно, уже сам(а) читаешь статьи по физике. Или просто обожаешь космос. В любом случае, респект.'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  console.clear()
  initTest(stages)
  chooseAnswer(stages, results)
})
