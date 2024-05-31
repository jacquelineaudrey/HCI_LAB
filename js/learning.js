document.addEventListener("DOMContentLoaded", () => {
  const lessons = document.querySelectorAll(".lesson");

  lessons.forEach((lesson) => {
    lesson.addEventListener("click", () => {
      document
        .querySelectorAll(".lesson-active")
        .forEach((activeLesson) =>
          activeLesson.classList.remove("lesson-active")
        );
      lesson.classList.add("lesson-active");
    });
  });

  const comments = document.getElementById("comments");

  comments.addEventListener("click", (event) => {
    if (event.target.classList.contains("reply-button")) {
      const replyButton = event.target;
      const replyInput = replyButton.previousElementSibling;
      const replyText = replyInput.value.trim();

      if (replyText !== "") {
        const replyElement = document.createElement("div");
        replyElement.classList.add("comment");
        replyElement.innerHTML = `
            <div class="comment-profile">
              <img src="../assets/jacq.jpeg" alt="">
              <span class="name">Jacqueline Audrey</span>
            </div>
            <p>${replyText}</p>
          `;

        const repliesDiv = replyButton.parentElement.nextElementSibling;
        repliesDiv.appendChild(replyElement);

        replyInput.value = "";
      }
    }
  });

  const sendButton = document.getElementById("send-button");
  const commentInput = document.getElementById("comment-input");

  sendButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.innerHTML = `
          <div class="comment-profile">
            <img src="../assets/jacq.jpeg" alt="">
            <span class="name">Jacqueline Audrey</span>
          </div>
          <p>${commentText}</p>
          <div class="reply-section">
            <input type="text" class="reply-input" placeholder="Reply to this comment...">
            <button class="reply-button">Reply</button>
          </div>
          <div class="replies"></div>
        `;
      comments.appendChild(commentElement);
      commentInput.value = "";
      comments.scrollTop = comments.scrollHeight;
    }
  });

  const choiceButtons = document.querySelectorAll(".choice-button");

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isCorrect = button.getAttribute("data-correct") === "true";

      if (isCorrect) {
        button.classList.add("correct");
        button.style.animation = "correct-animation 0.5s forwards";
      } else {
        button.classList.add("incorrect");
        button.style.animation = "incorrect-animation 0.5s forwards";
      }
    });
  });

  const showAnswerButtons = document.querySelectorAll(".show-answer-button");

  showAnswerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choices = button.previousElementSibling.children;
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].getAttribute("data-correct") === "true") {
          choices[i].classList.add("correct-answer");
          const correctAnswerText = button.nextElementSibling;
          correctAnswerText.textContent = `Correct Answer: ${choices[i].textContent}`;
          correctAnswerText.style.display = "block";
        }
      }
    });
  });

  const exerciseButton = document.querySelector(".exercise-button");
  const watchButton = document.querySelector(".watch-button");
  const sectionLearning = document.getElementById("section-learning");
  const questionSection = document.getElementById("question-section");

  sectionLearning.style.display = "block";
  questionSection.style.display = "none";

  exerciseButton.addEventListener("click", () => {
    sectionLearning.style.display = "none";
    questionSection.style.display = "block";
  });

  watchButton.addEventListener("click", () => {
    sectionLearning.style.display = "block";
    questionSection.style.display = "none";
  });
});

// CSS Animations
const style = document.createElement("style");
style.innerHTML = `
  @keyframes correct-animation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  @keyframes incorrect-animation {
    0% { transform: scale(1); }
    50% { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
  `;
document.head.appendChild(style);
