const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
    music.play().then(() => {
        // Fade out button smoothly
        btn.style.transition = "opacity 1s ease, transform 1s ease";
        btn.style.opacity = 0;
        btn.style.transform = "translateX(-50%) scale(0.8)";
        setTimeout(() => {
            btn.style.display = "none"; // remove from layout
        }, 1000);
    }).catch((err) => {
        console.log("Playback failed:", err);
    });
});
