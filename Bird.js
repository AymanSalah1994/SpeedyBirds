class Bird {
  constructor() {
    this.#imageObj = document.createElement("img");
    let imageName = Math.floor(Math.random() * 3); // 0,1,2
    this.#birdValue = imageName * 5;
    if (this.#birdValue == 0) {
      this.#birdValue = -10;
    }
    imageName = "birds/" + imageName + ".gif";
    this.#imageObj.src = imageName;
    this.#imageObj.setAttribute("valueOfBird", this.#birdValue);
    let posY = Math.ceil(Math.random() * 450);
    this.#imageObj.style.left = "0px";
    this.#imageObj.style.top = posY + "px";
    this.#leftOfBird = 0;
    this.#imageObj.addEventListener("click", () => {
      this.birdShot();
    });
    this.birdMove();
  } // End Of CTOR
  #birdValue;
  #leftOfBird;
  #imageObj;

  birdMove() {
    if (this.#leftOfBird < window.innerWidth) {
      let id = setInterval(() => {
        this.#imageObj.style.left = this.#leftOfBird + "px";
        this.#leftOfBird += 20;
        this.birdHide(id);
      }, 100);
    }
  }

  birdShot() {
    this.#imageObj.src = "assetImages/crash.png";
    Bird.shotBirdsCounter += 1;
    Bird.totalValues += this.#birdValue;
    let timeOutID = setTimeout(() => {
      this.#imageObj.remove();
      clearTimeout(timeOutID);
    }, 100);
  }

  birdHide(id) {
    if (this.#leftOfBird >= window.innerWidth - this.#imageObj.width) {
      this.#imageObj.remove();
      clearInterval(id);
    }
  }

  // get birdValue() {
  //   return this.#birdValue;
  // }
  // NO NEED ANYMORE 

  get birdImageObject() {
    return this.#imageObj;
  }

  static destroyAnonBirdImage(imageObject) {
    Bird.shotBirdsCounter += 1;
    Bird.totalValues +=Number(imageObject.getAttribute("valueOfBird"));
    imageObject.src = "assetImages/crash.png";
    let timeOutID = setTimeout(() => {
      imageObject.remove();
      clearTimeout(timeOutID);
    }, 100);
  }

  static shotBirdsCounter = 0;
  static totalValues = 0;
} // END OF CLASS BIRD  ;

export { Bird };
