class Player {
  #userScore;
  #birdsKilled;
  constructor(userName) {
    this.userName = userName;
    this.#birdsKilled = 0;
    this.#userScore = 0;
  }

  setScore(shotBirdValue, shotBirdsNumber) {
    this.#userScore = shotBirdValue;
    this.#birdsKilled = shotBirdsNumber;
  }

  get userScore() {
    return this.#userScore;
  }

  get birdsKilled() {
    return this.#birdsKilled;
  }
} // End Of Player Class

export { Player };
