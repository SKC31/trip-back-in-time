const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const startBtn = document.getElementById("startBtn");

// Big start button
startBtn.addEventListener("click", () => {
  music.play();
  startBtn.style.display = "none";
  musicBtn.style.display = "block";
});

// Small mute button
musicBtn.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    musicBtn.textContent = "🔇";
  } else {
    music.muted = true;
    musicBtn.textContent = "🎧";
  }
});
