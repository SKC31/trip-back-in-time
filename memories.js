document.addEventListener("DOMContentLoaded", () => {
  const memoryContainer = document.getElementById("memories");
  const captions = Array.from({ length: 27 }, (_, i) => `Memory #${i + 1}`);

  const gifs = ["images/heart.gif", "images/sun.gif", "images/rose.gif", "images/cupid.gif", "images/flower.gif"];
  const gifIndexes = [2, 7, 12, 18, 24];

  const memories = [];

  // Create memory sections
  for (let i = 1; i <= 27; i++) {
    const section = document.createElement("section");
    section.className = "memory";

    const container = document.createElement("div");
    container.className = "memory-container";

    const img = document.createElement("img");
    img.src = `images/pic${i}.jpg`;
    img.alt = `Memory ${i}`;
    container.appendChild(img);

    const gifIndex = gifIndexes.indexOf(i);
    if (gifIndex !== -1) {
      const cartoon = document.createElement("img");
      cartoon.src = gifs[gifIndex];
      cartoon.style.width = "60px";
      container.appendChild(cartoon);
    }

    section.appendChild(container);

    const p = document.createElement("p");
    p.textContent = captions[i - 1];
    section.appendChild(p);

    memoryContainer.appendChild(section);
    memories.push(section);
  }

  // Slideshow loop
  let current = 0;
  const total = memories.length;

  function showNextMemory() {
    memories.forEach((mem, index) => {
      mem.style.opacity = 0;
      mem.style.transition = "none";
      mem.style.transform = "translate(-50%, -50%) scale(1)";
    });

    const mem = memories[current];
    mem.style.opacity = 1;
    mem.style.transition = "transform 8s ease-in-out, opacity 1s ease-in-out";
    mem.style.transform = "translate(-50%, -50%) scale(1.05)";

    current = (current + 1) % total;
  }

  showNextMemory();
  setInterval(showNextMemory, 8000);
});
