const quizQuestions = [
  {
    question: "What stores data in a program?",
    answer: "variable"
  },
  {
    question: "What finds errors in code?",
    answer: "debugger"
  },
  {
    question: "What repeats a block of code?",
    answer: "loop"
  },
  {
    question: "What makes decisions in a program?",
    answer: "condition"
  },
  {
    question: "What converts code to machine language?",
    answer: "compiler"
  },
  {
    question: "What holds multiple values together?",
    answer: "array"
  }
];

function runQuiz() {
  let score = 0;
  const totalQuestions = quizQuestions.length;

  for (let i = 0; i < totalQuestions; i++) {
    const currentQuestion = quizQuestions[i];

    const userInput = prompt(currentQuestion.question);

    if (userInput === null) {
      alert("Quiz cancelled. Your current score is: " + score + " out of " + totalQuestions);
      return;
    }

    const normalizedInput = userInput.toLowerCase().trim();
    const correctAnswer = currentQuestion.answer;

    if (normalizedInput === correctAnswer) {
      score++;

      alert("Correct! Your current score is " + score);
    } else {
      alert("Incorrect. The correct answer was: " + correctAnswer);
    }
  }

  alert("Quiz Finished! Your final score is: " + score + " out of " + totalQuestions + ".");
}

runQuiz();