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

  showResult() {
    // TODO : Show Pop Up after Finishing   ;
    console.log("Game Ended");
  }
} // End Of Player Class

export { Player };
