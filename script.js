const choicesInput = document.getElementById('choices');
const pickButton = document.getElementById('pick-button');
const resultText = document.getElementById('result');
const darkModeBtn = document.getElementById('dark-mode-btn');

let isDarkMode = false; // Flag to track dark mode state

pickButton.addEventListener('click', pickRandomChoice);
darkModeBtn.addEventListener('click', toggleDarkMode);

function pickRandomChoice() {
  const choices = choicesInput.value.split(','); // Split choices by commas
  choices.forEach(choice => choice.trim()); // Trim leading/trailing spaces

  if (!choices.length) {
    resultText.textContent = 'Please enter some choices!';
    return;
  }

  const randomIndex = Math.floor(Math.random() * choices.length);
  const selectedChoice = choices[randomIndex];
  resultText.textContent = `Your random choice is: ${selectedChoice}`;
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode'); // Apply dark mode class
}
