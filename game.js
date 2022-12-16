import { Bird } from "./Bird.js";
import { Player } from "./Player.js";
import { Bomb } from "./Bomb.js";

let body = document.querySelector("body");
let gamerName = document.getElementById("playerName");
let gameLimit = document.getElementById("timeLimit");
let gameScore = document.getElementById("gameScore");
let shortBirdsCounter = document.getElementById("shotBirdsNumber");

let gamer = new Player("Ali Samy");
gamerName.innerText = "Welcome: " + gamer.userName;
let totalTime = 60;

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
    shortBirdsCounter.innerText = "Birds killed :" + Bird.shotBirdsCounter;
    if (totalTime == 0) {
      stopUpdatingScore(id);
    }
  }, 100);
}
function stopUpdatingScore(id) {
  clearInterval(id);
}

gameEngineStart(); // Interval 1 
updateGameScores(); // Interval 2 
// function gameAudio() {
//   var audio = new Audio();
//   audio.src = "audio/game.mp3";
//   // when the sound has been loaded, execute your code
//   audio.oncanplaythrough = (event) => {
//     var playedPromise = audio.play();
//     if (playedPromise) {
//       playedPromise
//         .catch((e) => {
//           console.log(e);
//           if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
//             console.log(e.name);
//           }
//         })
//         .then(() => {
//           console.log("playing sound !!!");
//         });
//     }
//   };
// }

// function sendBombs() {
//   let bombsNumber = Math.floor(Math.random() * 3);
//   for (let i = 0; i < bombsNumber; i++) {
//     // TODO class Bomb ;
//   }
//   // let birds = Bird.
//   console.log(birds.length);
//   for (let bird of birds) {
//     console.log(bird.x, bird.y);
//     bird.birdShot();
//   }
// }
