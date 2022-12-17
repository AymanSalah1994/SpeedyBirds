import { Bird } from "./Bird.js";
class Bomb {
  #imageObject;
  #topOfBomb;
  constructor() {
    this.#imageObject = document.createElement("img");
    this.#imageObject.src = "assetImages/bomb.png";
    let posX = Math.ceil(Math.random() * 650);
    this.#imageObject.style.left = posX + "px"; // Will Be Random Number
    this.#imageObject.style.top = "0px";
    this.#topOfBomb = 0;
    this.#imageObject.addEventListener("click", () => {
      this.bombShot();
      let currentBirds = document.querySelectorAll("[valueOfBird]");
      for (let eachBird of currentBirds) {
        let xDiff = Math.abs(eachBird.x - this.#imageObject.x);
        let yDiff = Math.abs(eachBird.y - this.#imageObject.y);

        if (xDiff < 230 && yDiff < 230) {
          Bird.destroyAnonBirdImage(eachBird);
        }
      }
    });
  }

  bombShot() {
    this.#imageObject.src = "assetImages/bigCrash.png";
    this.#imageObject.style.width = "300px";
    this.#imageObject.style.height = "300px";
    let timerId = setTimeout(() => {
      this.#imageObject.remove();
      clearTimeout(timerId);
    }, 100);
  }

  bombHide(id) {
    if (this.#topOfBomb >= window.innerHeight - this.#imageObject.height) {
      this.#imageObject.remove();
      clearInterval(id);
    }
  }

  dropToBottom() {
    if (this.#topOfBomb < window.innerHeight) {
      let id = setInterval(() => {
        this.#imageObject.style.top = this.#topOfBomb + "px";
        this.#topOfBomb += 20;
        this.bombHide(id);
      }, 100);
    }
  }

  get imageObject() {
    return this.#imageObject;
  }
} // End Of Bomb Class

export { Bomb };
