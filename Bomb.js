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
    // TODO onClick FOr Bomb Even  ;
    this.#imageObject.addEventListener("click", () => {
      let currentBirds = document.querySelectorAll("[valueOfBird]");
      for (let eachBird of currentBirds) {
        // For Right

        if (eachBird.x > this.#imageObject.x) {
          if (
            eachBird.x - this.#imageObject.x < 150 &&
            this.#imageObject.y - eachBird.y < 150
          ) {
            Bird.destroyAnonBirdImage(eachBird);
          }
        }

        // For Left
        else if (eachBird.x < this.#imageObject.x) {
          if (
            this.#imageObject.x - eachBird.x < 150 &&
            this.#imageObject.y - eachBird.y < 150
          ) {
            Bird.destroyAnonBirdImage(eachBird);
          }
        }
      }
    });
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
