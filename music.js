const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play().catch(() => console.log("Playback prevented by browser"));
    btn.textContent = "⏸ Pause Music";
    playing = true;
  } else {
    music.pause();
    btn.textContent = "PRESS ME KIYOMI";
    playing = false;
  }
});
