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

// playIntroSound();

// function playIntroSound() {
//   var audio = new Audio();
//   audio.src = "audio/index.mp3";
//   // when the sound has been loaded, execute your code
//   audio.oncanplaythrough = (event) => {
//     var playedPromise = audio.play();
//     if (playedPromise) {
//       playedPromise
//         .catch((e) => {
//           console.log(e);
//           if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
//             console.log(e.name);
//           }
//         })
//         .then(() => {
//           console.log("playing sound !!!");
//         });
//     }
//   };
// }
