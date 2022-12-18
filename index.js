let submitBtn = document.getElementById("enterGame");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let gamerName = document.getElementById("playerName");
  if (gamerName.value == "") {
    let spanMSG = document.querySelector(".hiddenSpan");
    spanMSG.classList.remove("hiddenSpan");
  } else {
    let form = document.querySelector("form");
    form.submit();
  }
});

window.addEventListener("load", function () {
  playIntroSound();
});

function playIntroSound() {
  let backGroundAudio = new Audio();
  backGroundAudio.src = "audio/index.mp3";
  backGroundAudio.play();
}
