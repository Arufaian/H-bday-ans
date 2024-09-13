let birthdayCard = document.querySelector(".birthdayCard");
let cardFonts = document.querySelector(".cardFonts");
let happy = document.querySelector(".happy");

let clicked = 0;

// fungsi play audio
function playAudio(name) {
  let audio = new Audio(name);
  audio.play();
}

let cardSfx = new Audio(
  "../assets/Page Flip Sound Effect No copyrhgt ...sound effect LNC.mp3"
);

birthdayCard.addEventListener("click", function () {
  clicked++;

  this.classList.toggle("rotate");
  cardFonts.classList.toggle("open");

  setTimeout(() => {
    happy.classList.toggle("invisible");
  }, 120);
  playAudio(
    "../assets/Page Flip Sound Effect No copyrhgt ...sound effect LNC.mp3"
  );

  if (clicked == 1) {
    playAudio("../assets/piano.mp3");
  }
});
