const startButton = document.getElementById("startButton");
const timeInput = document.getElementById("timeInput");
const countdownDisplay = document.getElementById("countdownDisplay");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");

let timer = null; // Store the interval ID
let isPaused = false; // Track the pause state
let valueInSeconds = 0; // Store the remaining time

function startTimer() {
  console.log("Button Clicked");
  valueInSeconds = parseInt(timeInput.value); // Update the global variable
  console.log(valueInSeconds);
  console.log(typeof valueInSeconds);

  if (isNaN(valueInSeconds)) {
    countdownDisplay.innerText = "Please enter a valid number";
    return;
  }

  if (valueInSeconds <= 0) {
    countdownDisplay.innerText = "Please enter seconds > 0";
    return;
  }

  // Clear any previous timer
  clearInterval(timer);

  // Start the timer
  timer = setInterval(function () {
    if (!isPaused) {
      valueInSeconds--; // Decrement the global variable
      countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;
      countdownDisplay.style.color = "white";

      if (valueInSeconds <= 0) {
        clearInterval(timer);
        countdownDisplay.innerText = "Time is Up!";
      }
    }
  }, 1 * 1000);
}

function pauseResume(event) {
  const action = event.target.id; // Determine whether pause or resume was clicked

  if (action === "pause") {
    isPaused = true; // Pause the timer
    countdownDisplay.innerText = `Timer Paused at: ${valueInSeconds} seconds`;
  } else if (action === "resume") {
    isPaused = false; // Resume the timer
    countdownDisplay.innerText = `Resuming...`;
  }
}

// Event Listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseResume);
resumeButton.addEventListener("click", pauseResume);
