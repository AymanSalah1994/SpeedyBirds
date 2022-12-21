import { Bird } from "./Bird.js";
import { Player } from "./Player.js";
import { Bomb } from "./Bomb.js";
import { Modal } from "./Modal.js";
let body = document.querySelector("body");
let gamerName = document.getElementById("playerName");
let gameLimit = document.getElementById("timeLimit");
let gameScore = document.getElementById("gameScore");
let shortBirdsCounter = document.getElementById("shotBirdsNumber");
let totalTime = 60;
let backGroundAudio = new Audio();
let theUserName = document.location.href.split("=")[1];
let gamer = new Player(theUserName);
gamerName.innerText = "Welcome: " + gamer.userName;

function gameEngineStart() {
  let id = setInterval(() => {
    gameLimit.innerText = "0:" + totalTime;
    totalTime -= 1;
    if (totalTime == 0) {
      gameLimit.innerText = "0:" + totalTime;
      gameEngineEnd(id);
    }

    if (totalTime % 5 == 0) {
      let bombo = new Bomb();
      body.append(bombo.imageObject);
      bombo.dropToBottom();
    }

    let bobo = new Bird();
    body.append(bobo.birdImageObject);
    bobo.birdHide(id);
  }, 1000);
}

function gameEngineEnd(id) {
  clearInterval(id);
  gamer.showResult();
}

function updateGameScores() {
  let id = setInterval(() => {
    gamer.setScore(Bird.totalValues, Bird.shotBirdsCounter);
    gameScore.innerText = "Score : " + Bird.totalValues;
    shortBirdsCounter.innerText = "Birds killed :" + Bird.shotBirdsCounter;
    if (totalTime == 0) {
      stopUpdatingScore(id);
      showPlayerScore();
    }
  }, 100);
}
function stopUpdatingScore(id) {
  clearInterval(id);
}

function playIntroSound() {
  backGroundAudio.src = "audio/index.mp3";
  backGroundAudio.play();
}

let mainModal = document.querySelector(".modal");

let startTheGame = function () {
  mainModal.classList.add("modalHidden");
  playIntroSound();
  gameEngineStart(); // Interval 1
  updateGameScores(); // Interval 2
};

window.addEventListener("load", function () {
  let modBody = new Modal(
    "Welcome To the Game , Remeber , Dont Shoot the Yellow Bird ",
    "modal/welcome.gif",
    "Start Playing",
    startTheGame
  );
  mainModal.classList.remove("modalHidden");
  mainModal.append(modBody.modalBody);
});

function showPlayerScore() {
  // Reset the Time  and the Game
  totalTime = 60;
  Bird.totalValues = 0;
  Bird.shotBirdsCounter = 0;
  let modBody;
  if (gamer.userScore > 50) {
    modBody = new Modal(
      "Congratulations !! You Made it , Your Score is : " + gamer.userScore,
      "modal/win.gif",
      "Play Again",
      startTheGame
    );
  } else {
    modBody = new Modal(
      "Sorry , You Lost the Game :( , Your Score is " + gamer.userScore,
      "modal/lose.gif",
      "Play Again",
      startTheGame
    );
  }
  mainModal.classList.remove("modalHidden");
  mainModal.append(modBody.modalBody);
}
