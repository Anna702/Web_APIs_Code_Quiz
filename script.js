//A start button: when clicked a timer starts and the first question appears.

const startBtn = document.getElementById("start");
const timeCount = document.getElementById("time");
const answersArray = document.getElementById("answersArray");
let timeLeft = 75;
questionIndex = 0;

//check if the answert is true or false
for (let i = 0; i < 4; i++) {
  answersArray.children[i].addEventListener("click", function (event) {
    if (event.target.dataset.rightAnswer === "false") {
      timeLeft = timeLeft - 10;
      timeCount.textContent = timeLeft;
    } else {
    }
    showQuestion();
  });
}

startBtn.addEventListener("click", function () {
  //btn hide
  startBtn.style.display = "none";
  //timer starts
  setTime();
  //welcome text - dissapears
  document.getElementById("start-screen").classList.add("hide");
  //first question appears
  document.getElementById("questions").classList.remove("hide");
  showQuestion();
});

function setTime() {
  const timerInterval = setInterval(function () {
    timeLeft--;
    timeCount.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      //TODO: when time is over - tell it to user (function)
    }
  }, 1000);
}

function showQuestion() {
  document.getElementById("question-title").textContent =
    allQuestions[questionIndex].question;
  for (let i = 0; i < 4; i++) {
    answersArray.children[i].textContent =
      allQuestions[questionIndex].answers[i];
    if (i === allQuestions[questionIndex].correctAnswer) {
      answersArray.children[i].dataset.rightAnswer = true;
    } else {
      answersArray.children[i].dataset.rightAnswer = false;
    }
  }
  questionIndex++;
}

//index q appears
//all answers are buttons
//user press button
//compare answers
//show if he right - text and next q
//if he wrong - next q, text and minus 10 secs from timer
