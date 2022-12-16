function playIntroSound() {
  var audio = new Audio();
  audio.src = "audio/index.mp3";
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

playIntroSound();
