
const quizContentArray = [
  {
    id: 1,
    question: "What is the capital city of Finland?",
    answer1: "Stockholm",
    answer2: "Helsinki",
    answer3: "Oslo",
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which famous mobile phone company was founded in Finland?",
    answer1: "Samsung",
    answer2: "Sony",
    answer3: "Nokia",
    correctAnswer: 3
  },
  {
    id: 3,
    question: "Which of these is a traditional Finnish dish?",
    answer1: "Ox-stew",
    answer2: "Karelian pasty",
    answer3: "Kebab",
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What is the name of the region in northern Finland known for its reindeer and the indigenous Sámi people?",
    answer1: "Karelia",
    answer2: "Åland islands",
    answer3: "Lapland",
    correctAnswer: 3
  },
  {
    id: 5,
    question: "Finland is known as the Land of a Thousand Lakes Approximately how many lakes are there in Finland?",
    answer1: "1000",
    answer2: "10,000",
    answer3: "188,000",
    correctAnswer: 3
  },
  {
    id: 6,
    question: "Which sport is Finland particularly famous for dominating in international competitions?",
    answer1: "Ice hockey",
    answer2: "Baseball",
    answer3: "Basketball",
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is the name of the popular Finnish heavy metal band known for their song, Nemo?",
    answer1: "Korpiklaani",
    answer2: "Nightwish",
    answer3: "Metallica",
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What is the official language of Finland alongside Finnish?",
    answer1: "Russian",
    answer2: "Swedish",
    answer3: "Danish",
    correctAnswer: 2
  },
  {
    id: 9,
    question: "In what year did Finland gain independence from Russia",
    answer1: "1907",
    answer2: "1917",
    answer3: "1927",
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which of these is a famous Finnish design company known for its bold prints and colors?",
    answer1: "IKEA",
    answer2: "Zara",
    answer3: "Marimekko",
    correctAnswer: 3
  }

];


let playerName = String;
let playerPoints = 0;

// Reusable HTML-Elements
const startBtn = document.getElementById("start-game-btn")
const restartBtn = document.getElementById("restart-game-btn");
const nextQuestionBtn = document.getElementById("user-answer-btn")
const startScreen = document.getElementById("game-start")
const gameScreen = document.getElementById("game-in-progress")
const feedbackScreen = document.getElementById("game-feedback")
const questionField = document.getElementById("question-field")
const answer1Label = document.getElementById("answer-1-field")
const answer2Label = document.getElementById("answer-2-field")
const answer3Label = document.getElementById("answer-3-field")
const answer1Radio = document.getElementById("answer1")
const answer2Radio = document.getElementById("answer2")
const answer3Radio = document.getElementById("answer3")
const playerNameField = document.getElementById("player-name")
const playerPointsField = document.getElementById("player-points")
 let feedbackMessage = document.getElementById("feedback-message")
 const findOutMoreBtn = document.getElementById("get-an-education-btn")
 // Audio elements
 const correctSound = document.getElementById("correct-sound");
 const incorrectSound = document.getElementById("incorrect-sound");

// LISTENERS
startBtn.addEventListener("click", startGame);
nextQuestionBtn.addEventListener("click", changeQuestion);
restartBtn.addEventListener("click", restartGame);
findOutMoreBtn.addEventListener("click", () => {
  window.open("https://en.wikipedia.org/wiki/Finland", "_blank");
});

// audio funktion för bakgrunds musik

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');
  audio.play().catch(error => {
      console.error("Playback failed: ", error);

  });
});


let currentQuestion = 0;

// Startar spelet
function startGame() {
  playerName = document.getElementById("name-input").value;
  playerPoints = 0;
  currentQuestion = 0;
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  feedbackScreen.style.display = "none";
  populateQuestionFields(currentQuestion);
  playerNameField.innerHTML = playerName;
  playerPointsField.innerHTML = playerPoints;
}
// Tar nya frågor från arrayen
function populateQuestionFields(questionNumber) {
  const questionData = quizContentArray[questionNumber];
  questionField.innerHTML = questionData.question;
  answer1Label.innerHTML = questionData.answer1;
  answer2Label.innerHTML = questionData.answer2;
  answer3Label.innerHTML = questionData.answer3;
  answer1Radio.checked = false;
  answer2Radio.checked = false;
  answer3Radio.checked = false;
}

// byter & laddar upp nästa fråga
function changeQuestion() {
  const chosenAnswer = document.querySelector('input[name="answers"]:checked');
  if (chosenAnswer) {
    const questionData = quizContentArray[currentQuestion];
    const chosenAnswerIndex = Array.from(document.querySelectorAll('input[name="answers"]')).indexOf(chosenAnswer) + 1;

    if (chosenAnswerIndex === questionData.correctAnswer) {
      playerPoints++;
      correctSound.play(); // Play correct answer sound
    } else {
      incorrectSound.play(); // Play incorrect answer sound
    }

    currentQuestion++;

    if (currentQuestion < quizContentArray.length) {
      populateQuestionFields(currentQuestion);
    } else {
      endQuiz();
    }

    playerPointsField.innerHTML = playerPoints;
  } else {
    alert("Please select an answer before moving to the next question.");
  }
}
// slutar spelet
function endQuiz() {
  gameScreen.style.display = "none";
  feedbackScreen.style.display = "block";

  let feedbackMessage;

  // Ger olika feedback beroende på poängantalet
  if (playerPoints >= 0 && playerPoints <= 3) {
    feedbackMessage = "You might want to brush up on your Finland knowledge!";
  } else if (playerPoints >= 4 && playerPoints <= 6) {
    feedbackMessage = "Not bad! You know a fair bit about Finland.";
  } else if (playerPoints >= 7 && playerPoints <= 9) {
    feedbackMessage = "Great job! You have a solid knowledge of Finland.";
  } else if (playerPoints === 10) {
    feedbackMessage = "Excellent! You know Finland inside out!";
  } else {
    feedbackMessage = "Something went wrong.";
  }

 //  laddar up feedback skärmen med poäng och feedback angående poängantalet

  feedbackScreen.querySelector('h2').innerHTML = feedbackMessage;
  feedbackScreen.querySelector('p').innerHTML = `You scored ${playerPoints} out of ${quizContentArray.length}.`;
}

// startar om spelet
function restartGame() {
  feedbackScreen.style.display = "none";
  startScreen.style.display = "block";

  playerName = '';
  playerPoints = 0;
  currentQuestion = 0;

  document.getElementById("name-input").value = '';
  playerNameField.innerHTML = '';
  gameScreen.style.display = "none";
  playerPointsField.innerHTML = playerPoints;
  answer1Radio.checked = false;
  answer2Radio.checked = false;
  answer3Radio.checked = false;
}




const audio = document.getElementById('audio');
        const playButton = document.getElementById('playButton');
        const volumeControl = document.getElementById('volumeControl');

        playButton.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playButton.textContent = 'Pause';
            } else {
                audio.pause();
                playButton.textContent = 'Play';
            }
        });

        volumeControl.addEventListener('input', function() {
            audio.volume = volumeControl.value;
        });