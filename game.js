import { Bird } from "./Bird.js";
import { Player } from "./Player.js";
import { Bomb } from "./Bomb.js";

let body = document.querySelector("body");
let gamerName = document.getElementById("playerName");
let gameLimit = document.getElementById("timeLimit");
let gameScore = document.getElementById("gameScore");
let shortBirdsCounter = document.getElementById("shotBirdsNumber");
let totalTime = 60;

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


 

window.addEventListener("load", function () {

  // 1-Show the Modal For Confirmation 
  // 2-OK ? Play 
  // Once GameEngine Finish Call the Message 
  // If win Dis-Hide Win
  //  Same For loose 
  // OK button Always Hide All Of them And Return to the Home 


  // playIntroSound();
  // gameEngineStart(); // Interval 1
  // updateGameScores(); // Interval 2
});

function playIntroSound() {
  let backGroundAudio = new Audio();
  backGroundAudio.src = "audio/index.mp3";
  backGroundAudio.play();
}


let mainModal = document.querySelector(".modal") ; 
let msg = document.createElement("div") ;


