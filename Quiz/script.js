document.addEventListener("DOMContentLoaded", () => {
  const questionCont = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choiceList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const resultCont = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  const startBtn = document.getElementById("start-btn");

  //QUESTIONS

  const questions = [
    {
      question: "what is your name?",
      choices: ["arun", "aarunn", "arruun", "anonymus"],
      answer: "arun",
    },
    {
      question: "what is your age?",
      choices: ["21", "22", "23", "24"],
      answer: "23",
    },
    {
      question: "what is your recent fav. song?",
      choices: ["Him", "untouchable", "what makes you smile", "night changes"],
      answer: "Him",
    },
  ];

  // PRE-SETS(COUNTS)

  let questionIndexCount = 0;
  let score = 0;

  //BUTTONS
  //start button
  startBtn.addEventListener("click", startQuiz);

  //next button
  nextBtn.addEventListener("click", function () {
    questionIndexCount++;
    // console.log("nxt xlixked");
    if (questionIndexCount < questions.length) {
      showQuestion();
      // console.log("show op");
    } else {
      showResult();
    }
  });

  //restart button
  restartBtn.addEventListener("click", function () {
    questionIndexCount = 0;
    score = 0;
    nextBtn.classList.add("hidden");
    questionCont.classList.add("hidden");
    resultCont.classList.add("hidden");
    startBtn.classList.remove("hidden");
  });

  //FUNCTIONS

  function startQuiz() {
    // console.log("start button clicked");
    startBtn.classList.add("hidden");
    // resultCont.classList.add("hidden");
    questionCont.classList.remove("hidden");
    showQuestion();
  }
  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[questionIndexCount].question;
    showOptions();
  }
  function showOptions() {
    choiceList.innerHTML = "";
    questions[questionIndexCount].choices.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element;
      li.addEventListener("click", function () {
        return evaluateAnswer(element);
      });
      choiceList.appendChild(li);
    });
  }
  function evaluateAnswer(e) {
    // nextBtn.classList.add("hidden");
    let OgAnswer = questions[questionIndexCount].answer;
    // console.log(OgAnswer);
    if (OgAnswer === e) {
      score++;
      // console.log("answ is correct");
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    nextBtn.classList.add("hidden");
    questionCont.classList.add("hidden");
    resultCont.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
