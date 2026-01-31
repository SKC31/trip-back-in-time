const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
    // Ensure the audio is loaded
    music.load(); 
    music.play().then(() => {
        console.log("Music started!");
    }).catch((err) => {
        console.log("Playback failed:", err);
    });
});
