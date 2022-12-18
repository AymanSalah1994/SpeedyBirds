import { Bird } from "./Bird.js";
import { Player } from "./Player.js";
import { Bomb } from "./Bomb.js";

let body = document.querySelector("body");
let gamerName = document.getElementById("playerName");
let gameLimit = document.getElementById("timeLimit");
let gameScore = document.getElementById("gameScore");
let shortBirdsCounter = document.getElementById("shotBirdsNumber");
let totalTime = 60;
let gamer = new Player("Ali Samy"); // TODO from url
gamerName.innerText = "Welcome: " + gamer.userName;

function gameEngineStart() {
  // gameAudio();
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
    // TODO make Data updated From user Data
    shortBirdsCounter.innerText = "Birds killed :" + Bird.shotBirdsCounter;
    if (totalTime == 0) {
      stopUpdatingScore(id);
    }
  }, 100);
}
function stopUpdatingScore(id) {
  clearInterval(id);
}

//gameEngineStart(); // Interval 1
//updateGameScores(); // Interval 2

window.addEventListener("load", function () {
  playIntroSound();
});

function playIntroSound() {
  let backGroundAudio = new Audio();
  backGroundAudio.src = "audio/game.mp3";
  backGroundAudio.play();
}
