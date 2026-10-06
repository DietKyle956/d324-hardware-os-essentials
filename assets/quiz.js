/* ==========================================================================
   Quiz widget - reusable across all lessons.
   Usage: write plain HTML blocks, this script wires them up.

   <div class="quiz-q" data-answer="O(n)" data-explanation="Why the answer is right.">
     <p class="quiz-prompt">Prompt text</p>
     <pre><code>...snippet...</code></pre>   (optional)
     <div class="quiz-options">
       <button data-choice="O(1)">O(1)</button>
       ...
     </div>
   </div>

   Wrap questions in <section class="quiz" data-quiz-title="...">
   and a live score line is added automatically.
   ========================================================================== */

(function () {
  "use strict";

  document.querySelectorAll(".quiz").forEach(function (quizEl) {
    var questions = quizEl.querySelectorAll(".quiz-q");
    var scoreLine = document.createElement("p");
    scoreLine.className = "quiz-score";
    scoreLine.setAttribute("aria-live", "polite");
    quizEl.appendChild(scoreLine);

    var answered = 0;
    var correct = 0;

    function updateScore() {
      if (answered === 0) {
        scoreLine.textContent =
          questions.length + " questions - answer one at a time";
      } else {
        scoreLine.textContent = correct + " of " + answered + " answered right";
      }
    }

    questions.forEach(function (q, i) {
      var answer = q.getAttribute("data-answer");
      var explanation = q.getAttribute("data-explanation") || "";
      var buttons = q.querySelectorAll(".quiz-options button");
      var feedback = document.createElement("p");
      feedback.className = "quiz-feedback";
      feedback.hidden = true;
      q.appendChild(feedback);

      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (q.classList.contains("quiz-answered")) return;

          var choice = btn.getAttribute("data-choice");
          var isRight = choice === answer;
          q.classList.add("quiz-answered");
          answered += 1;
          if (isRight) correct += 1;

          buttons.forEach(function (b) {
            b.disabled = true;
            if (b.getAttribute("data-choice") === answer) {
              b.classList.add("correct");
            }
          });
          if (!isRight) btn.classList.add("wrong");

          feedback.hidden = false;
          feedback.classList.add(isRight ? "correct" : "wrong");
          feedback.textContent = explanation;
          updateScore();
        });
      });
    });

    updateScore();
  });
})();
