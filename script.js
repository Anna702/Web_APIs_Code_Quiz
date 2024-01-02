//A start button: when clicked a timer starts and the first question appears.

const startBtn = document.getElementById("start");
const timeCount = document.getElementById("time");
let timeLeft = 75;

startBtn.addEventListener("click", function () {
  //btn hide
  startBtn.style.display = "none";
  //timer starts
  const timerInterval = setInterval(function () {
    timeLeft--;
    timeCount.textContent = timeLeft;
    if (timeLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);

  //first q appears
});
