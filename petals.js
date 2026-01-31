setInterval(()=>{
const petal=document.createElement("div");
petal.innerHTML="🌸";
petal.style.position="fixed";
petal.style.left=Math.random()*100+"%";
petal.style.top="-20px";
petal.style.fontSize="24px";
document.body.appendChild(petal);

let y=0;
const fall=setInterval(()=>{
y+=2;
petal.style.top=y+"px";
if(y>window.innerHeight){
petal.remove();
clearInterval(fall);
}
},20);

},800);
