// HERE YOU PUT ALL HTML objects you want to Control
let body = document.querySelector("body");
let gamerName = document.getElementById("playerName");
let gameLimit = document.getElementById("timeLimit");
let gameScore = document.getElementById("gameScore");
let shortBirdsCounter = document.getElementById("shotBirdsNumber");

class Bird {
  constructor(
    imageSourceURL = "birds/1.gif",
    positionObject = { x: 0, y: 20 },
    valueOfBird = 5
  ) {
    // let bird = new Bird("1.gif" , {x:0,y:20} , 5) ;
    this.#imageObj = document.createElement("img");
    this.#imageObj.src = imageSourceURL;
    this.#birdValue = valueOfBird;
    this.#imageObj.style.left = positionObject["x"] + "px";
    this.#imageObj.style.top = positionObject["y"] + "px";
    this.#leftOfBird = positionObject.x;
    body.append(this.#imageObj);
    this.#imageObj.addEventListener("click", () => {
      // IF you DON'T Use Arrow Function Here , you will Get Error  ;
      this.birdShot();
    });
    this.birdMove();
  } // End Of CTOR
  #birdValue;
  #leftOfBird;
  #imageObj;

  birdMove() {
    if (this.#leftOfBird < window.innerWidth) {
      // This is in Order to Let The Bird Hide in the "No-Where" ;
      let id = setInterval(() => {
        this.#imageObj.style.left = this.#leftOfBird + "px";
        // position: absolute; IN ORDER TO take Effect
        this.#leftOfBird += 20;
        this.birdHide(id);
      }, 100);
    }
  }

  birdShot() {
    this.#imageObj.src = "assetImages/crash.png";
    // TODO : Make this Image For a BOMB crashed  ;
    let timeOutID = setTimeout(() => {
      this.#imageObj.remove();
      gamer.setScore(this.birdValue);
      clearTimeout(timeOutID);
    }, 100);
  }

  birdHide(id) {
    if (this.#leftOfBird >= window.innerWidth - this.#imageObj.width) {
      this.#imageObj.remove();
      clearInterval(id);
    }
  }

  get birdValue() {
    return this.#birdValue;
  }
} // END OF CLASS BIRD  ;

// /////////////////////////////////////////
class Player {
  #userScore;
  #birdsKilled;
  constructor(userName) {
    this.userName = userName;
    this.#birdsKilled = 0;
    this.#userScore = 0;
    gamerName.innerText = "Welcome: " + this.userName;
  }

  setScore(shotBirdValue) {
    this.#userScore += shotBirdValue;
    this.#birdsKilled += 1;
    gameScore.innerText = "Score : " + this.#userScore;
    shortBirdsCounter.innerText = "Birds killed :" + this.#birdsKilled;
  }

  showResult() {
    // TODO : Show Pop Up after Finishing   ;
    console.log("Game Ended");
  }
} // End Of Player Class

class Bomb {
  #imageObject;
  #topOfBomb;
  constructor(posX) {
    // x Vary , Y start with 0 and Ends At the Botom  ;
    this.#imageObject = document.createElement("img");
    this.#imageObject.src = "assetImages/bomb.png";
    this.#imageObject.style.left = posX + "px";
    this.#imageObject.style.top = "0px";
    this.#topOfBomb = 0;
    body.append(this.#imageObject);
  }
  dropToBottom() {}
}

let gamer = new Player("Ali Samy");
let totalTime = 60;

function gameEngineStart() {
  gameAudio();
  let id = setInterval(() => {
    gameLimit.innerText = "0:" + totalTime;
    totalTime -= 1;
    if (totalTime == 0) {
      gameLimit.innerText = "0:" + totalTime;
      gameEngineEnd(id);
    }
    // TODO : Put Bombs From TOP
    // Every 15 Seconds Make a Random from 0 - 2 Bombs Generated  ;
    if (totalTime % 15 == 0) {
      // sendBombs();
    }
    let imageName = Math.floor(Math.random() * 3);
    let birdValue = imageName * 5;
    if (birdValue == 0) {
      birdValue = -10;
    }
    imageName = "birds/" + imageName;
    imageName += ".gif";
    let posX = 0;
    let posY = Math.ceil(Math.random() * 450);
    let bobo = new Bird(imageName, { x: posX, y: posY }, birdValue);
    // console.log(bobo.birdValue);
    bobo.birdHide(id); // TODO optimize , this will Call Every Second !
  }, 1000);
}

function gameEngineEnd(id) {
  clearInterval(id);
  gamer.showResult();
}

gameEngineStart();

function gameAudio() {
  var audio = new Audio();
  audio.src = "audio/game.mp3";
  // when the sound has been loaded, execute your code
  audio.oncanplaythrough = (event) => {
    var playedPromise = audio.play();
    if (playedPromise) {
      playedPromise
        .catch((e) => {
          console.log(e);
          if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
            console.log(e.name);
          }
        })
        .then(() => {
          console.log("playing sound !!!");
        });
    }
  };
}

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
