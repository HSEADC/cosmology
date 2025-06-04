const radioButtons = document.querySelectorAll('.Q_radioButton')
let resultCount = 0
let currentStage = 0

function initTest(stages) {
  const numberOfQuestion = document.querySelector('.A_h2.numberOfQuestion')
  const question = document.querySelector('.A_h3.question')
  const answers = document.querySelectorAll('.A_h4.answerText')

  numberOfQuestion.innerHTML = `${currentStage + 1} / ${stages.length}`
  question.innerHTML = stages[currentStage].question

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text
  }

  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].dataset.count = stages[currentStage].answers[i].count
  }
}

function chooseAnswer(stages, results) {
  const testForward = document.querySelector('.A_mainButton.testForward')
  const testBackward = document.querySelector('.A_mainButton.testBackward')
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
      resultCount += Number(radioButton.dataset.count)
    })
  })
  testForward.addEventListener('click', () => {
    updateStage(stages, results)
    radioButtons.forEach((radioButton) => {
      radioButton.checked = false
    })
  })
  testBackward.addEventListener('click', () => {
    previousStage(stages, results)
    radioButtons.forEach((radioButton) => {
      radioButton.checked = false
    })
  })
}

function updateStage(stages, results) {
  if (currentStage + 1 < stages.length) {
    currentStage++
    initTest(stages)
  } else {
    showResult(stages, results)
  }
}

function previousStage(stages, results) {
  if (currentStage - 1 >= 0) {
    currentStage--
    initTest(stages)
  } else {
    showResult(stages, results)
  }
}

function showResult(stages, results) {
  const popups = document.querySelector('.W_popupOverlay')
  const body = document.querySelector('.test')
  popups.classList.add('activePopup')
  body.classList.add('scrollLock')

  const points = document.querySelector('.A_H1.points')
  const resultText = document.querySelector('.A_h4.resultText')

  points.innerHTML = `${resultCount} / ${stages.length}`

  if (resultCount >= 8) {
    resultText.innerHTML = results[2].resultText
  } else if (resultCount <= 3) {
    resultText.innerHTML = results[0].resultText
  } else {
    resultText.innerHTML = results[1].resultText
  }
}

export { initTest, chooseAnswer }
