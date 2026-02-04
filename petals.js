// Create petals slower to reduce CPU load
setInterval(createPetal, 800); // every 0.8s

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  const startFromTop = Math.random() < 0.5;
  if (startFromTop) {
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-50px";
  } else {
    petal.style.left = "-50px";
    petal.style.top = Math.random() * window.innerHeight + "px";
  }

  petal.style.animationDuration = 10 + Math.random() * 8 + "s";
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 18000);
}
