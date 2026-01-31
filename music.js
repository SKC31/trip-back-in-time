const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
    music.play().then(() => {
        // Song started successfully
        btn.disabled = true;        // disable button after pressed
        btn.style.cursor = "default";
        btn.style.opacity = "0.8";  // subtle visual change
    }).catch((err) => {
        console.log("Playback failed:", err);
    });
});
