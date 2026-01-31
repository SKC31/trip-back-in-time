const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔇"; // change icon to indicate playing
  } else {
    music.pause();
    btn.textContent = "PRESS ME KIYOMI"; // back to default
  }
});
