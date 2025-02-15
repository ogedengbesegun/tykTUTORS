const container = document.getElementById('questionContainer');
let score = 0;
const correctAnswers = {
  q1: 'A', q2: 'B', q3: 'C', q4: 'D', q5: 'A', q6: 'B', q7: 'C', q8: 'D', q9: 'A', q10: 'B',
  q11: 'C', q12: 'D', q13: 'A', q14: 'B', q15: 'C', q16: 'D', q17: 'A', q18: 'B', q19: 'C', q20: 'D',
  q21: 'A', q22: 'B', q23: 'C', q24: 'D', q25: 'A', q26: 'B', q27: 'C', q28: 'D', q29: 'A', q30: 'B',
  q31: 'C', q32: 'D', q33: 'A', q34: 'B', q35: 'C', q36: 'D', q37: 'A', q38: 'B', q39: 'C', q40: 'D',
  q41: 'A', q42: 'B', q43: 'C', q44: 'D', q45: 'A', q46: 'B', q47: 'C', q48: 'D', q49: 'A', q50: 'B',
};

// Object to track user answers
const userAnswers = {};
console.log(userAnswers)
// Function to display score
function updateScoreDisplay() {
  let scoreDisplay = document.getElementById('scoreDisplay');
  if (!scoreDisplay) {
    scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'scoreDisplay';
    scoreDisplay.style.marginTop = '20px';
    scoreDisplay.style.fontWeight = 'bold';
    document.body.appendChild(scoreDisplay);
  }
  scoreDisplay.textContent = `Score: ${score}`;
}

// Generate questions dynamically

for (let i = 1; i <= 50; i++) {
  const questionDiv = document.createElement('div');
  questionDiv.className = 'question';
  questionDiv.innerHTML = `
    <p>Question ${i}: What is the correct option?</p>
    <div class="options">
      <label><input type="radio" name="q${i}" value="A"> A</label><br>
      <label><input type="radio" name="q${i}" value="B"> B</label><br>
      <label><input type="radio" name="q${i}" value="C"> C</label><br>
      <label><input type="radio" name="q${i}" value="D"> D</label>
    </div>
  `;
  container.appendChild(questionDiv);

  // Add event listeners to each radio button
  const options = questionDiv.querySelectorAll('input[type="radio"]');
  options.forEach(option => {
    option.addEventListener('change', (e) => {
      const questionKey = `q${i}`;
      console.log(questionKey)
      const selectedOption = e.target.value;

      // Check if the answer was already given
      if (userAnswers[questionKey]) {
        // If previously correct and changed to wrong, deduct score
        if (userAnswers[questionKey] === correctAnswers[questionKey] && selectedOption !== correctAnswers[questionKey]) {
          score--;
        }
        // If previously wrong and changed to correct, add score
        else if (userAnswers[questionKey] !== correctAnswers[questionKey] && selectedOption === correctAnswers[questionKey]) {
          score++;
        }
      } else {
        // First-time selection, add score if correct
        if (selectedOption === correctAnswers[questionKey]) {
          score++;
        }
      }

      // Update user's answer
      userAnswers[questionKey] = selectedOption;
      updateScoreDisplay();
    });
  });
}

// Scroll behavior using arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    container.scrollBy({ top: 50, behavior: 'smooth' });
  } else if (e.key === 'ArrowUp') {
    container.scrollBy({ top: -50, behavior: 'smooth' });
  }
});
