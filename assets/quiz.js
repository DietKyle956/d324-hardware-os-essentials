/* quiz.js — reusable multiple-choice quiz component for the D324 course.

   Markup contract:
     <div class="quiz" data-answer="0">
       <div class="quiz-q">Question text</div>
       <button class="quiz-opt" data-why="why this is right">Option A</button>
       <button class="quiz-opt" data-why="why this is right">Option B</button>
       ...
       <div class="quiz-feedback" hidden></div>
     </div>

   `data-answer` is the 0-based index of the correct option.
   Put the explanation on the CORRECT option's `data-why`.
   Feedback is shown immediately on click; one attempt per question. */
(function () {
  function initQuiz(quiz) {
    var answer = parseInt(quiz.getAttribute('data-answer'), 10);
    var opts = Array.prototype.slice.call(quiz.querySelectorAll('.quiz-opt'));
    var feedback = quiz.querySelector('.quiz-feedback');
    if (isNaN(answer) || opts.length === 0) return;
    var answered = false;

    opts.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        opts.forEach(function (b, j) {
          b.classList.add(j === answer ? 'is-correct' : 'is-incorrect');
          b.disabled = true;
        });
        var why = opts[answer].getAttribute('data-why') || '';
        if (i === answer) {
          feedback.textContent = 'Correct. ' + why;
          feedback.className = 'quiz-feedback correct';
        } else {
          feedback.textContent = 'Not quite. ' + why;
          feedback.className = 'quiz-feedback incorrect';
        }
        if (feedback) feedback.hidden = false;
      });
    });
  }

  function scan() {
    Array.prototype.forEach.call(document.querySelectorAll('.quiz'), initQuiz);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }
})();
