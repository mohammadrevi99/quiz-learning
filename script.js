(function () {
  "use strict";

  var STORAGE_KEY = "ccfa_quiz_state_v1";
  var FULL_POOL = window.QUESTION_BANK;
  var POOL_BY_ID = {};
  FULL_POOL.forEach(function (q) { POOL_BY_ID[q.id] = q; });

  var LENGTH_OPTIONS = [25, 50, 100, "all"];

  var state = loadState() || createFreshState();

  // "questions" always refers to the ACTIVE SESSION's question list (a
  // random subset of FULL_POOL chosen at start/restart time), not the
  // entire pool. This is what every render/grading function operates on.
  var questions = [];
  rebuildSessionQuestions();

  var mainEl = document.getElementById("main-content");
  var modalOverlay = document.getElementById("modal-overlay");
  var modalBox = document.getElementById("modal-box");
  var restartBtn = document.getElementById("restart-btn");

  restartBtn.addEventListener("click", function () {
    showModal({
      title: "Restart Quiz",
      body: "This will erase all your answers and progress, and let you start a new attempt (with a freshly drawn set of questions from the pool of " + FULL_POOL.length + "). This action cannot be undone.",
      actions: [
        { label: "Cancel", className: "btn-ghost", onClick: hideModal },
        {
          label: "Restart",
          className: "btn-danger",
          onClick: function () {
            state = createFreshState();
            saveState();
            rebuildSessionQuestions();
            hideModal();
            render();
          }
        }
      ]
    });
  });

  function createFreshState() {
    return {
      phase: "start", // "start" | "exam" | "results"
      examLength: 50,
      sessionQuestionIds: [],
      currentIndex: 0,
      answers: {}, // id -> string (single) or array (multiple)
      submitted: false
    };
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function drawSessionQuestionIds(length) {
    var allIds = FULL_POOL.map(function (q) { return q.id; });
    var shuffled = shuffle(allIds);
    if (length === "all" || length >= allIds.length) return shuffled;
    return shuffled.slice(0, length);
  }

  function rebuildSessionQuestions() {
    if (!state.sessionQuestionIds || state.sessionQuestionIds.length === 0) {
      questions = [];
      return;
    }
    questions = state.sessionQuestionIds
      .map(function (id) { return POOL_BY_ID[id]; })
      .filter(Boolean);
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return null;
      if (!parsed.phase) {
        // legacy state from the fixed-50 version: treat as start screen
        return createFreshState();
      }
      return parsed;
    } catch (e) {
      return null;
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* ignore quota errors */
    }
  }

  function isAnswered(q) {
    var a = state.answers[q.id];
    if (a === undefined || a === null) return false;
    if (Array.isArray(a)) return a.length > 0;
    return a !== "";
  }

  function answeredCount() {
    var c = 0;
    questions.forEach(function (q) {
      if (isAnswered(q)) c++;
    });
    return c;
  }

  function isCorrect(q) {
    var a = state.answers[q.id];
    if (!isAnswered(q)) return false;
    if (q.type === "multiple") {
      var correct = q.correctAnswers.slice().sort();
      var given = (a || []).slice().sort();
      if (correct.length !== given.length) return false;
      for (var i = 0; i < correct.length; i++) {
        if (correct[i] !== given[i]) return false;
      }
      return true;
    }
    return a === q.correctAnswer;
  }

  function showModal(cfg) {
    modalBox.innerHTML = "";
    var h3 = document.createElement("h3");
    h3.textContent = cfg.title;
    var p = document.createElement("p");
    p.textContent = cfg.body;
    var actions = document.createElement("div");
    actions.className = "modal-actions";
    cfg.actions.forEach(function (a) {
      var btn = document.createElement("button");
      btn.className = "btn " + a.className;
      btn.textContent = a.label;
      btn.addEventListener("click", a.onClick);
      actions.appendChild(btn);
    });
    modalBox.appendChild(h3);
    modalBox.appendChild(p);
    modalBox.appendChild(actions);
    modalOverlay.classList.remove("hidden");
  }

  function hideModal() {
    modalOverlay.classList.add("hidden");
  }

  function render() {
    if (state.phase === "start") {
      renderStartScreen();
    } else if (state.phase === "results" || state.submitted) {
      renderResultsAndReview();
    } else {
      renderExam();
    }
  }

  function renderStartScreen() {
    mainEl.innerHTML = "";

    var panel = document.createElement("div");
    panel.className = "question-panel";
    panel.style.maxWidth = "560px";
    panel.style.margin = "0 auto";

    var heading = document.createElement("div");
    heading.className = "question-text";
    heading.style.marginBottom = "6px";
    heading.textContent = "CCFA Practice Exam";
    panel.appendChild(heading);

    var sub = document.createElement("div");
    sub.style.fontSize = "13.5px";
    sub.style.color = "var(--text-secondary)";
    sub.style.marginBottom = "22px";
    sub.textContent = "This attempt draws a fresh random set of questions from a pool of " +
      FULL_POOL.length + ". Retake the quiz anytime for a mostly-different set - the goal is understanding, not memorizing question order.";
    panel.appendChild(sub);

    var label = document.createElement("div");
    label.style.fontSize = "13px";
    label.style.fontWeight = "600";
    label.style.marginBottom = "10px";
    label.textContent = "How many questions for this attempt?";
    panel.appendChild(label);

    var optionsWrap = document.createElement("div");
    optionsWrap.className = "options-list";

    LENGTH_OPTIONS.forEach(function (opt) {
      var row = document.createElement("label");
      row.className = "option-row";
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "exam_length";
      input.value = String(opt);
      input.checked = state.examLength === opt;
      if (input.checked) row.classList.add("selected");
      input.addEventListener("change", function () {
        state.examLength = opt;
        renderStartScreen();
      });
      var span = document.createElement("span");
      span.textContent = opt === "all"
        ? "All available questions (" + FULL_POOL.length + ")"
        : opt + " questions";
      row.appendChild(input);
      row.appendChild(span);
      optionsWrap.appendChild(row);
    });

    panel.appendChild(optionsWrap);

    var startBtn = document.createElement("button");
    startBtn.className = "btn btn-primary";
    startBtn.style.width = "100%";
    startBtn.textContent = "Start Exam";
    startBtn.addEventListener("click", function () {
      state.sessionQuestionIds = drawSessionQuestionIds(state.examLength);
      state.currentIndex = 0;
      state.answers = {};
      state.submitted = false;
      state.phase = "exam";
      rebuildSessionQuestions();
      saveState();
      render();
      window.scrollTo(0, 0);
    });
    panel.appendChild(startBtn);

    mainEl.appendChild(panel);
  }

  function renderExam() {
    mainEl.innerHTML = "";
    var q = questions[state.currentIndex];

    var layout = document.createElement("div");
    layout.className = "exam-layout";

    layout.appendChild(buildQuestionPanel(q));
    layout.appendChild(buildNavigatorPanel());

    mainEl.appendChild(layout);
  }

  function buildQuestionPanel(q) {
    var panel = document.createElement("div");
    panel.className = "question-panel";

    var meta = document.createElement("div");
    meta.className = "question-meta";
    var left = document.createElement("span");
    left.textContent = "Question " + (state.currentIndex + 1) + " of " + questions.length;
    var right = document.createElement("span");
    right.innerHTML =
      '<span class="badge badge-' + q.difficulty + '">' + q.difficulty + "</span>" +
      '<span class="badge badge-type">' + (q.type === "multiple" ? "Multiple Answer" : "Single Choice") + "</span>";
    meta.appendChild(left);
    meta.appendChild(right);
    panel.appendChild(meta);

    var qText = document.createElement("div");
    qText.className = "question-text";
    qText.textContent = q.question;
    panel.appendChild(qText);

    if (q.type === "multiple") {
      var hint = document.createElement("div");
      hint.className = "multi-hint";
      hint.textContent = "Select all answers that apply.";
      panel.appendChild(hint);
    }

    var optionsList = document.createElement("div");
    optionsList.className = "options-list";

    var currentAnswer = state.answers[q.id];

    q.options.forEach(function (opt) {
      var row = document.createElement("label");
      row.className = "option-row";

      var input = document.createElement("input");
      input.type = q.type === "multiple" ? "checkbox" : "radio";
      input.name = "q_" + q.id;
      input.value = opt;

      var selected = false;
      if (q.type === "multiple") {
        selected = Array.isArray(currentAnswer) && currentAnswer.indexOf(opt) !== -1;
      } else {
        selected = currentAnswer === opt;
      }
      input.checked = selected;
      if (selected) row.classList.add("selected");

      input.addEventListener("change", function () {
        if (q.type === "multiple") {
          var arr = Array.isArray(state.answers[q.id]) ? state.answers[q.id].slice() : [];
          if (input.checked) {
            if (arr.indexOf(opt) === -1) arr.push(opt);
          } else {
            arr = arr.filter(function (o) { return o !== opt; });
          }
          state.answers[q.id] = arr;
        } else {
          state.answers[q.id] = opt;
        }
        saveState();
        renderExam();
      });

      var span = document.createElement("span");
      span.textContent = opt;

      row.appendChild(input);
      row.appendChild(span);
      optionsList.appendChild(row);
    });

    panel.appendChild(optionsList);

    var actions = document.createElement("div");
    actions.className = "question-actions";

    var navBtns = document.createElement("div");
    navBtns.className = "nav-buttons";

    var prevBtn = document.createElement("button");
    prevBtn.className = "btn btn-ghost";
    prevBtn.textContent = "Previous";
    prevBtn.disabled = state.currentIndex === 0;
    prevBtn.addEventListener("click", function () {
      state.currentIndex = Math.max(0, state.currentIndex - 1);
      saveState();
      renderExam();
    });

    var nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-ghost";
    nextBtn.textContent = "Next";
    nextBtn.disabled = state.currentIndex === questions.length - 1;
    nextBtn.addEventListener("click", function () {
      state.currentIndex = Math.min(questions.length - 1, state.currentIndex + 1);
      saveState();
      renderExam();
    });

    navBtns.appendChild(prevBtn);
    navBtns.appendChild(nextBtn);

    var submitBtn = document.createElement("button");
    submitBtn.className = "btn btn-primary";
    submitBtn.textContent = "Submit Exam";
    submitBtn.addEventListener("click", handleSubmitClick);

    actions.appendChild(navBtns);
    actions.appendChild(submitBtn);
    panel.appendChild(actions);

    return panel;
  }

  function buildNavigatorPanel() {
    var panel = document.createElement("div");
    panel.className = "navigator-panel";

    var title = document.createElement("div");
    title.className = "navigator-title";
    title.textContent = "Question Navigator";
    panel.appendChild(title);

    var summary = document.createElement("div");
    summary.className = "progress-summary";
    summary.innerHTML = "<strong>" + answeredCount() + "</strong> of " + questions.length + " answered";
    panel.appendChild(summary);

    var poolNote = document.createElement("div");
    poolNote.style.fontSize = "11px";
    poolNote.style.color = "var(--text-secondary)";
    poolNote.style.marginBottom = "14px";
    poolNote.textContent = "Drawn from a pool of " + FULL_POOL.length + " questions";
    panel.appendChild(poolNote);

    var grid = document.createElement("div");
    grid.className = "navigator-grid";

    questions.forEach(function (q, idx) {
      var cell = document.createElement("div");
      cell.className = "nav-cell";
      if (isAnswered(q)) cell.classList.add("answered");
      if (idx === state.currentIndex) cell.classList.add("current");
      cell.textContent = String(idx + 1);
      cell.addEventListener("click", function () {
        state.currentIndex = idx;
        saveState();
        renderExam();
      });
      grid.appendChild(cell);
    });

    panel.appendChild(grid);

    var legend = document.createElement("div");
    legend.className = "legend";
    legend.innerHTML =
      '<div class="legend-item"><span class="legend-swatch answered"></span> Answered</div>' +
      '<div class="legend-item"><span class="legend-swatch unanswered"></span> Unanswered</div>';
    panel.appendChild(legend);

    return panel;
  }

  function handleSubmitClick() {
    var unanswered = questions.length - answeredCount();
    if (unanswered > 0) {
      showModal({
        title: "Unanswered Questions",
        body: "You have " + unanswered + " unanswered question(s). Do you want to return to the exam or submit anyway?",
        actions: [
          { label: "Return to Exam", className: "btn-ghost", onClick: hideModal },
          {
            label: "Submit Anyway",
            className: "btn-primary",
            onClick: function () {
              hideModal();
              finalizeSubmit();
            }
          }
        ]
      });
    } else {
      finalizeSubmit();
    }
  }

  function finalizeSubmit() {
    state.submitted = true;
    state.phase = "results";
    saveState();
    render();
    window.scrollTo(0, 0);
  }

  function renderResultsAndReview() {
    mainEl.innerHTML = "";

    var total = questions.length;
    var correctCount = 0;
    questions.forEach(function (q) {
      if (isCorrect(q)) correctCount++;
    });
    var incorrectCount = total - correctCount;
    var scorePct = Math.round((correctCount / total) * 100);

    var resultsPanel = document.createElement("div");
    resultsPanel.className = "results-panel";
    resultsPanel.innerHTML =
      "<div>Exam Complete</div>" +
      '<div class="results-score">' + scorePct + "%</div>" +
      '<div class="results-stats">' +
      '<div class="results-stat"><div class="num">' + total + '</div><div class="label">Total Questions</div></div>' +
      '<div class="results-stat correct"><div class="num">' + correctCount + '</div><div class="label">Correct</div></div>' +
      '<div class="results-stat incorrect"><div class="num">' + incorrectCount + '</div><div class="label">Incorrect</div></div>' +
      "</div>";
    mainEl.appendChild(resultsPanel);

    var topActions = document.createElement("div");
    topActions.className = "top-actions";
    var restartBtn2 = document.createElement("button");
    restartBtn2.className = "btn btn-primary";
    restartBtn2.textContent = "Restart Quiz";
    restartBtn2.addEventListener("click", function () {
      restartBtn.click();
    });
    topActions.appendChild(restartBtn2);
    mainEl.appendChild(topActions);

    var sectionTitle = document.createElement("div");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = "Full Question Review";
    mainEl.appendChild(sectionTitle);

    questions.forEach(function (q, idx) {
      mainEl.appendChild(buildReviewItem(q, idx));
    });
  }

  function formatUserAnswer(q) {
    var a = state.answers[q.id];
    if (!isAnswered(q)) return "Not Answered";
    if (q.type === "multiple") return a.join(", ");
    return a;
  }

  function formatCorrectAnswer(q) {
    if (q.type === "multiple") return q.correctAnswers.join(", ");
    return q.correctAnswer;
  }

  function buildReviewItem(q, idx) {
    var wrapper = document.createElement("div");
    wrapper.className = "review-item";

    var header = document.createElement("div");
    header.className = "review-item-header";

    var qNum = document.createElement("div");
    qNum.innerHTML = "<strong>Question " + (idx + 1) + "</strong>";

    var statusSpan = document.createElement("span");
    var answered = isAnswered(q);
    var correct = isCorrect(q);
    var statusClass = !answered ? "unanswered" : correct ? "correct" : "incorrect";
    var statusLabel = !answered ? "Not Answered" : correct ? "Correct" : "Incorrect";
    statusSpan.className = "review-status " + statusClass;
    statusSpan.textContent = statusLabel;

    header.appendChild(qNum);
    header.appendChild(statusSpan);
    wrapper.appendChild(header);

    var qText = document.createElement("div");
    qText.className = "review-question";
    qText.textContent = q.question;
    wrapper.appendChild(qText);

    if (answered) {
      var userBlock = document.createElement("div");
      userBlock.className = "review-answer-block " + (correct ? "user-correct" : "user-wrong");
      userBlock.innerHTML = "<strong>Your answer:</strong> " + escapeHtml(formatUserAnswer(q));
      wrapper.appendChild(userBlock);
    }

    if (!correct) {
      var correctBlock = document.createElement("div");
      correctBlock.className = "review-answer-block correct-answer";
      correctBlock.innerHTML = "<strong>Correct answer:</strong> " + escapeHtml(formatCorrectAnswer(q));
      wrapper.appendChild(correctBlock);
    }

    var explanation = document.createElement("div");
    explanation.className = "review-explanation";
    explanation.textContent = q.explanation;
    wrapper.appendChild(explanation);

    if (q.sourceReference) {
      var source = document.createElement("div");
      source.className = "review-source";
      source.textContent = "Source: " + q.sourceReference;
      wrapper.appendChild(source);
    }

    return wrapper;
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  render();
})();
