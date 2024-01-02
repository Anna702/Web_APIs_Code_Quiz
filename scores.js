const clear = document.getElementById("clear");

clear.addEventListener("click", function () {
  localStorage.removeItem("highscores");
});


