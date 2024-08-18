const squares = document.querySelectorAll('.play');

// Track number of clicks for each color
const timesClicked = {'red': 0, 'green': 0, 'yellow': 0};

// Timer variables
let timerInterval;
let timeLeft = 60;

// Start the timer when the game is started
function startTimer() {
  timeLeft = 15;
  document.getElementById('timer').innerText = `Time left: ${timeLeft}`;

  timerInterval = setInterval(() => {
    timeLeft -= 1;
    document.getElementById('timer').innerText = `Time left: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Time is up!');
      clearScores();
    }
  }, 1000);
}

// Stop and reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById('timer').innerText = 'Time left: 15';
}

function totalScore(){
    const totalScore = timesClicked.red + timesClicked.green + timesClicked.yellow;
    document.getElementById('totalScore').innerText = `Total score: ${totalScore}`;
}

// Event handler for color buttons
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
    totalScore();
  }
});

// Clear scores and reset game
function clearScores() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach(square => {
    square.innerText = '';
  });
  resetTimer();
  startTimer();
  totalScore();
}

// Restart button
const clearGameBtn = document.getElementById('restart');
clearGameBtn.onclick = () => clearScores();

// Home button
const home = document.getElementById('home');
home.onclick = () => {
  window.location.href = 'index.html';
};

// Initialize timer when page loads
window.onload = ()=>{
    startTimer();
    totalScore();
}


