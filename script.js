let birthdayCard = document.querySelector(".birthdayCard");
let cardFonts = document.querySelector(".cardFonts");
let happy = document.querySelector(".happy");

let clicked = 0;

// fungsi play audio
function playAudio(name) {
  let audio = new Audio(`./audio/${name}.mp3`);
  audio.play();
}

let cardSfx = new Audio("pf");

birthdayCard.addEventListener("click", function () {
  clicked++;

  this.classList.toggle("rotate");
  cardFonts.classList.toggle("open");

  setTimeout(() => {
    happy.classList.toggle("invisible");
    playAudio(`pf`);
  }, 120);

  if (clicked == 1) {
    playAudio("piano");
  }
});
