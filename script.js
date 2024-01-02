//A start button: when clicked a timer starts and the first question appears.

const startBtn = document.getElementById("start");
const timeCount = document.getElementById("time");
let timeLeft = 75;

startBtn.addEventListener("click", function () {
  //btn hide
  startBtn.style.display = "none";
  //timer starts
  setTime();
  //welcome text - dissapears
  
  //first question appears
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
