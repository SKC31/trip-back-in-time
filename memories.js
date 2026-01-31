const memories = [
"images/pic1.jpg",
"images/pic2.jpg",
"images/pic3.jpg"
];

const container = document.getElementById("memories");

memories.forEach(src=>{
const div=document.createElement("div");
div.className="memory";

const img=document.createElement("img");
img.src=src;

div.appendChild(img);
container.appendChild(div);
});
