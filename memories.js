document.addEventListener("DOMContentLoaded", () => {
  const memoryContainer = document.getElementById("memories");
  const captions = Array.from({ length: 27 }, (_, i) => `Memory #${i + 1}`);

  // List of GIFs
  const gifs = [
    "images/heart.gif",
    "images/sun.gif",
    "images/rose.gif",
    "images/cupid.gif",
    "images/flower.gif"
  ];

  // Distribute GIFs roughly evenly across 27 memories
  const gifIndexes = [2, 7, 12, 18, 24]; // choose indices where GIFs appear (1-based)
  
  for (let i = 1; i <= 27; i++) {
    const section = document.createElement("section");
    section.className = "memory";

    const container = document.createElement("div");
    container.className = "memory-container";

    // Main memory photo
    const img = document.createElement("img");
    img.src = `images/pic${i}.jpg`;
    img.alt = `Memory ${i}`;
    container.appendChild(img);

    // Add GIF if this index matches
    const gifIndex = gifIndexes.indexOf(i);
    if (gifIndex !== -1) {
      const cartoon = document.createElement("img");
      cartoon.src = gifs[gifIndex];
      cartoon.style.width = "60px"; // size GIFs
      container.appendChild(cartoon);
    }

    section.appendChild(container);

    // Memory caption
    const p = document.createElement("p");
    p.textContent = captions[i - 1];
    section.appendChild(p);

    memoryContainer.appendChild(section);
  }

  // Fade-in on scroll
  const memories = document.querySelectorAll(".memory");
  function revealMemories() {
    memories.forEach(mem => {
      const top = mem.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        mem.style.opacity = 1;
        mem.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealMemories);
  revealMemories();
});
