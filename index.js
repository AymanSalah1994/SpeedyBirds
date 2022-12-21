let backGroundAudioIndex = new Audio();

window.addEventListener("load", function () {});

let submitBtn = document.getElementById("enterGame");
let gamerName = document.getElementById("playerName");

gamerName.addEventListener("focus", function () {
  playIndexSound();
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  gamerName = document.getElementById("playerName");
  if (gamerName.value == "") {
    let spanMSG = document.querySelector(".hiddenSpan");
    spanMSG.classList.remove("hiddenSpan");
  } else {
    let form = document.querySelector("form");
    form.submit();
  }
});

function playIndexSound() {
  backGroundAudioIndex.src = "audio/game.mp3";
  backGroundAudioIndex.play();
}
