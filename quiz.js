// ============================================================
//  quiz.js — Quiz engine
// ============================================================

let quiz = {
  topic: null,
  questions: [],
  current: 0,
  score: 0,
  answered: false
};

function startQuiz(topicKey) {
  const data = QUIZ_DATA[topicKey];
  quiz.topic = topicKey;
  quiz.questions = shuffleArray([...data.questions]);
  quiz.current = 0;
  quiz.score = 0;
  quiz.answered = false;

  document.getElementById("quiz-select").style.display = "none";
  document.getElementById("quiz-results").style.display = "none";
  document.getElementById("quiz-active").style.display = "block";

  document.getElementById("quiz-topic-label").textContent = `${data.emoji} ${data.title}`;
  document.getElementById("quiz-score").textContent = "0";

  renderQuestion();
}

function renderQuestion() {
  const q = quiz.questions[quiz.current];
  const total = quiz.questions.length;

  document.getElementById("quiz-progress-label").textContent =
    `Question ${quiz.current + 1} of ${total}`;

  document.getElementById("question-text").textContent = q.q;
  document.getElementById("quiz-feedback").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  const grid = document.getElementById("options-grid");
  grid.innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" onclick="selectAnswer(${i})">${opt}</button>
  `).join("");

  quiz.answered = false;

  // Animate card in
  const card = document.getElementById("quiz-card");
  card.classList.remove("pop-in");
  void card.offsetWidth;
  card.classList.add("pop-in");
}

function selectAnswer(idx) {
  if (quiz.answered) return;
  quiz.answered = true;

  const q = quiz.questions[quiz.current];
  const buttons = document.querySelectorAll(".option-btn");
  const feedback = document.getElementById("quiz-feedback");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === idx) btn.classList.add("wrong");
  });

  const isCorrect = idx === q.answer;
  feedback.style.display = "flex";

  if (isCorrect) {
    quiz.score++;
    document.getElementById("quiz-score").textContent = quiz.score;
    feedback.className = "quiz-feedback correct-feedback";
    feedback.innerHTML = `<span class="fb-icon">🎉</span><div><strong>Correct!</strong> ${q.explanation}</div>`;
  } else {
    feedback.className = "quiz-feedback wrong-feedback";
    feedback.innerHTML = `<span class="fb-icon">💡</span><div><strong>Not quite!</strong> ${q.explanation}</div>`;
  }

  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  quiz.current++;
  if (quiz.current >= quiz.questions.length) {
    showQuizResults();
  } else {
    renderQuestion();
  }
}

function showQuizResults() {
  document.getElementById("quiz-active").style.display = "none";
  document.getElementById("quiz-results").style.display = "flex";

  const total = quiz.questions.length;
  const score = quiz.score;
  const pct = Math.round((score / total) * 100);
  const isPerfect = score === total;

  let emoji = "😊";
  let title = "Good effort!";
  let xpEarned = score * 10;

  if (pct === 100) { emoji = "🏆"; title = "PERFECT SCORE!"; xpEarned = score * 20; }
  else if (pct >= 80) { emoji = "🎉"; title = "Great job!"; xpEarned = score * 15; }
  else if (pct >= 60) { emoji = "👍"; title = "Nice work!"; }
  else if (pct >= 40) { emoji = "📚"; title = "Keep practicing!"; }
  else { emoji = "💪"; title = "Don't give up!"; }

  document.getElementById("result-emoji").textContent = emoji;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-score").innerHTML =
    `You got <strong>${score} out of ${total}</strong> correct (${pct}%)`;
  document.getElementById("result-xp").innerHTML =
    `<span class="xp-earned">+${xpEarned} XP earned!</span>`;

  // Award XP
  if (typeof awardXP === "function") {
    const data = QUIZ_DATA[quiz.topic];
    awardXP(xpEarned, `${data.title} Quiz`);
  }

  // Badge for perfect score
  if (isPerfect && typeof state !== "undefined") {
    state.quizPerfect = true;
    checkBadges();
  }
}

function resetQuiz() {
  startQuiz(quiz.topic);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
