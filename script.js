// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

// Landing page:
  // Explanation of the quiz
  // Start button

// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again

  //Create a code quiz that contains the following requirements:
  const startBtn = document.getElementById("start");
  const startScreen = document.getElementById('start-screen');
  const questions = document.getElementById('questions');
  const questionTitle = document.getElementById('question-title');
  const answers = document.getElementById('choices');



// Press the start button :
//a timer starts and the first question appears.
//addEventListener to a button and run a function to start a timer and show a first question.

  startButton.addEventListener("click", function () {
    console.log("button clicked");
  });


// - Questions contain buttons for each answer.
// -
// - When answer is clicked, the next question appears
// -
// - If the answer clicked was incorrect then subtract time from the clock

// - The quiz should end when all questions are answered or the timer reaches 0.

// - When the game ends, it should display their score and give the user the ability to save their initials and their score