let questions = [
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answer_1: "Berlin",
    answer_2: "Madrid",
    answer_3: "London",
    answer_4: "Paris",
    rght_answer: 4,
  },
  {
    question: "Welcher Ozean liegt östlich von Afrika?",
    answer_1: "Atlantischer Ozean",
    answer_2: "Indischer Ozean",
    answer_3: "Pazifischer Ozean",
    answer_4: "Arktischer Ozean",
    rght_answer: 2,
  },
  {
    question: "Was ist der höchste Berg der Welt?",
    answer_1: "Mount Kilimanjaro",
    answer_2: "Mount Everest",
    answer_3: "K2",
    answer_4: "Mont Blanc",
    rght_answer: 2,
  },
  {
    question:
      "Welches Land wird als das Land der aufgehenden Sonne bezeichnet?",
    answer_1: "China",
    answer_2: "Indien",
    answer_3: "Japan",
    answer_4: "Südkorea",
    rght_answer: 3,
  },
  {
    question: "Was ist die längste Fluss in Europa?",
    answer_1: "Die Themse",
    answer_2: "Die Donau",
    answer_3: "Der Rhein",
    answer_4: "Die Wolga",
    rght_answer: 4,
  },
  {
    question: "Welche Wüste ist die größte der Welt?",
    answer_1: "Sahara-Wüste",
    answer_2: "Gobi-Wüste",
    answer_3: "Arabische Wüste",
    answer_4: "Kalahari-Wüste",
    rght_answer: 1,
  },
  {
    question: "Was ist die Hauptstadt von Australien?",
    answer_1: "Melbourne",
    answer_2: "Sydney",
    answer_3: "Canberra",
    answer_4: "Perth",
    rght_answer: 3,
  },
  {
    question: "Was ist die größte Insel der Welt?",
    answer_1: "Borneo",
    answer_2: "Grönland",
    answer_3: "Java",
    answer_4: "Neuguinea",
    rght_answer: 2,
  },
  {
    question: "Welches Land hat die meisten Zeitzonen?",
    answer_1: "Russland",
    answer_2: "USA",
    answer_3: "China",
    answer_4: "Brasilien",
    rght_answer: 1,
  },
  {
    question: "Welcher Kontinent hat die höchste Bevölkerungsdichte?",
    answer_1: "Afrika",
    answer_2: "Asien",
    answer_3: "Europa",
    answer_4: "Australien",
    rght_answer: 2,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("questionNr").innerHTML = questions.length;

  renderQuestion();
}

function renderQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = parseInt(selection.slice(-1)); 

  if (selectedQuestionNumber === question["rght_answer"]) {
    document.getElementById(selection).classList.add("bg-success");

    let correctAnswer = "answer" + question["rght_answer"];
    document.getElementById(correctAnswer).classList.add("bg-success");
  } else {
    let incorrectAnswer = "answer" + selectedQuestionNumber;
    let correctAnswer = "answer" + question["rght_answer"];

    document.getElementById(selection).classList.add("bg-danger");
    document.getElementById(incorrectAnswer).classList.add("bg-danger");

    document.getElementById(correctAnswer).classList.add("bg-success");
  }

  document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  renderQuestion();

  document.getElementById('nextButton').disabled = true;
  removeClasses();
}

function removeClasses() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`answer${i}`).classList.remove("bg-danger", "bg-success");
    document.getElementById(`answer_${i}`).classList.remove("bg-danger", "bg-success");
  }
}

