const music=document.getElementById("bgMusic");
const startBtn=document.getElementById("startBtn");
const musicBtn=document.getElementById("musicBtn");

startBtn.onclick=()=>{
music.play();
startBtn.style.display="none";
musicBtn.style.display="block";
};

musicBtn.onclick=()=>{
music.muted=!music.muted;
};
