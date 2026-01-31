const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

// try autoplay on page load
window.addEventListener("load", () => {
  music.play().catch(() => {
    console.log("Autoplay blocked by browser");
  });
});

// mute/unmute button
btn.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    btn.textContent = "🔇";
  } else {
    music.muted = true;
    btn.textContent = "🎧";
  }
});
