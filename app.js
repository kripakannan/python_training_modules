// ============================================================
//  app.js — Main application logic
// ============================================================

// ---- State ----
let state = {
  xp: 0,
  completedLessons: new Set(),
  earnedBadges: new Set(),
  quizPerfect: false
};

// Load from localStorage
function loadState() {
  try {
    const saved = localStorage.getItem("pyquest_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      state.xp = parsed.xp || 0;
      state.completedLessons = new Set(parsed.completedLessons || []);
      state.earnedBadges = new Set(parsed.earnedBadges || []);
      state.quizPerfect = parsed.quizPerfect || false;
    }
  } catch (e) { /* fresh start */ }
}

function saveState() {
  try {
    localStorage.setItem("pyquest_state", JSON.stringify({
      xp: state.xp,
      completedLessons: [...state.completedLessons],
      earnedBadges: [...state.earnedBadges],
      quizPerfect: state.quizPerfect
    }));
  } catch (e) {}
}

// ---- XP & Badges ----
function awardXP(amount, label) {
  state.xp += amount;
  document.getElementById("xp-display").textContent = state.xp;
  showXPToast(`+${amount} XP — ${label}!`);
  checkBadges();
  saveState();
}

function showXPToast(msg) {
  const toast = document.createElement("div");
  toast.className = "xp-toast";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

function checkBadges() {
  const lessonsCount = state.completedLessons.size;
  const xp = state.xp;

  BADGES.forEach(badge => {
    if (state.earnedBadges.has(badge.id)) return;
    let earned = false;
    if (badge.lesson_req > 0 && lessonsCount >= badge.lesson_req) earned = true;
    if (badge.xp_req > 0 && xp >= badge.xp_req) earned = true;
    if (badge.quiz_req && state.quizPerfect) earned = true;

    if (earned) {
      state.earnedBadges.add(badge.id);
      showBadgeToast(badge);
      saveState();
      renderBadges();
    }
  });
}

function showBadgeToast(badge) {
  const toast = document.createElement("div");
  toast.className = "badge-toast";
  toast.innerHTML = `<span class="bt-icon">${badge.icon}</span><div><strong>Badge Unlocked!</strong><br/>${badge.name}</div>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3500);
}

// ---- Navigation ----
function showSection(name) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("section-" + name).classList.add("active");
  document.querySelector(`[data-section="${name}"]`).classList.add("active");

  if (name === "home") renderHome();
  if (name === "lessons") {
    renderLessons();
    document.getElementById("lesson-content").style.display = "none";
    document.getElementById("lessons-grid").style.display = "grid";
  }
  if (name === "quiz") renderQuizTopics();
}

// ---- Home Rendering ----
function renderHome() {
  renderProgressCards();
  renderBadges();
}

function renderProgressCards() {
  const container = document.getElementById("progress-cards");
  const total = LESSONS.length;
  const done = state.completedLessons.size;
  const pct = Math.round((done / total) * 100);

  container.innerHTML = `
    <div class="prog-card">
      <div class="prog-num">${state.xp}</div>
      <div class="prog-label">⭐ Total XP</div>
    </div>
    <div class="prog-card">
      <div class="prog-num">${done}/${total}</div>
      <div class="prog-label">📚 Lessons Done</div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="prog-card">
      <div class="prog-num">${state.earnedBadges.size}</div>
      <div class="prog-label">🏆 Badges Earned</div>
    </div>
    <div class="prog-card">
      <div class="prog-num">${BADGES.length - state.earnedBadges.size}</div>
      <div class="prog-label">🎯 Badges Left</div>
    </div>
  `;
}

function renderBadges() {
  const container = document.getElementById("badges-display");
  container.innerHTML = BADGES.map(b => `
    <div class="badge-item ${state.earnedBadges.has(b.id) ? "earned" : "locked"}">
      <div class="badge-icon">${state.earnedBadges.has(b.id) ? b.icon : "🔒"}</div>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
    </div>
  `).join("");
}

// ---- Lessons Rendering ----
function renderLessons() {
  const grid = document.getElementById("lessons-grid");
  grid.innerHTML = LESSONS.map((lesson, i) => `
    <div class="lesson-card ${state.completedLessons.has(lesson.id) ? "completed" : ""}"
         style="--lesson-color:${lesson.color}"
         onclick="openLesson('${lesson.id}')">
      <div class="lesson-emoji">${lesson.emoji}</div>
      <div class="lesson-info">
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-meta">
          <span class="level-badge ${lesson.level.toLowerCase()}">${lesson.level}</span>
          <span class="xp-badge">+${lesson.xp} XP</span>
        </div>
      </div>
      ${state.completedLessons.has(lesson.id) ? '<div class="lesson-check">✓</div>' : ''}
    </div>
  `).join("");
}

function openLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;

  document.getElementById("lessons-grid").style.display = "none";
  const content = document.getElementById("lesson-content");
  content.style.display = "block";

  const alreadyDone = state.completedLessons.has(id);

  document.getElementById("lesson-body").innerHTML = `
    <div class="lesson-wrapper">
      <div class="lesson-header" style="--lesson-color:${lesson.color}">
        <div class="lesson-header-emoji">${lesson.emoji}</div>
        <div>
          <h2 class="lesson-header-title">${lesson.title}</h2>
          <div class="lesson-header-meta">
            <span class="level-badge ${lesson.level.toLowerCase()}">${lesson.level}</span>
            <span class="xp-badge">+${lesson.xp} XP</span>
          </div>
        </div>
      </div>
      <div class="lesson-text">${lesson.content}</div>
      ${!alreadyDone ? `
        <div class="lesson-complete-wrap">
          <button class="complete-btn" onclick="completeLesson('${id}', ${lesson.xp})">
            ✅ Mark as Complete & Earn ${lesson.xp} XP!
          </button>
        </div>
      ` : `
        <div class="lesson-done-wrap">
          <div class="lesson-done-msg">✅ You've completed this lesson! Great work!</div>
        </div>
      `}
    </div>
  `;

  content.scrollIntoView({ behavior: "smooth" });
}

function closelesson() {
  document.getElementById("lesson-content").style.display = "none";
  document.getElementById("lessons-grid").style.display = "grid";
  renderLessons();
}

function completeLesson(id, xp) {
  if (state.completedLessons.has(id)) return;
  state.completedLessons.add(id);
  saveState();
  awardXP(xp, "Lesson Complete");

  const btn = document.querySelector(".complete-btn");
  if (btn) {
    btn.textContent = "✅ Lesson Completed!";
    btn.disabled = true;
    btn.style.opacity = "0.7";
  }
}

// ---- Quiz Topic Rendering ----
function renderQuizTopics() {
  const container = document.getElementById("quiz-topics");
  container.innerHTML = Object.entries(QUIZ_DATA).map(([key, data]) => `
    <div class="quiz-topic-card" style="--q-color:${data.color}" onclick="startQuiz('${key}')">
      <div class="qt-emoji">${data.emoji}</div>
      <div class="qt-title">${data.title}</div>
      <div class="qt-count">${data.questions.length} Questions</div>
    </div>
  `).join("");

  document.getElementById("quiz-select").style.display = "block";
  document.getElementById("quiz-active").style.display = "none";
  document.getElementById("quiz-results").style.display = "none";
}

// ---- Stars background ----
function createStars() {
  const container = document.getElementById("stars");
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-delay: ${Math.random() * 3}s;
      animation-duration: ${2 + Math.random() * 3}s;
    `;
    container.appendChild(star);
  }
}

// ---- Init ----
window.addEventListener("DOMContentLoaded", () => {
  loadState();
  createStars();
  document.getElementById("xp-display").textContent = state.xp;
  renderHome();
  renderLessons();
});
