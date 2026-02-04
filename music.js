document.getElementById("musicBtn").addEventListener("click", function(){
    const audio = document.getElementById("bgMusic");
    audio.play();

    // Fade out the button
    this.style.opacity = 0;
    setTimeout(() => this.style.display = "none", 500);
});
