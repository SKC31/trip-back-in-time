const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        btn.textContent = "🔇"; // changes button after pressed
    } else {
        music.pause();
        btn.textContent = "PRESS ME KIYOMI"; // revert text if paused
    }
});
