const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔇 Playing";
  } else {
    music.pause();
    btn.textContent = "PRESS ME KIYOMI";
  }
});
