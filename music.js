const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

// Play music on button click
btn.addEventListener("click", () => {
    music.play().then(() => {
        // After starting, button stays at top center
        btn.style.cursor = "default"; // optional: indicate it's pressed
    }).catch((err) => {
        console.log("Playback failed:", err);
    });
});
