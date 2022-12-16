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
