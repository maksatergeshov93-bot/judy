function showMessage() {
  alert("You deserve the happiest birthday ever 💖");
}

/* Snow particles */

for (let i = 0; i < 30; i++) {
  let heart = document.createElement("div");

  heart.innerHTML = "✨";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";

  heart.style.top = "-20px";

  heart.style.fontSize =
    Math.random() * 20 + 10 + "px";

  heart.style.opacity = Math.random();

  heart.style.animation =
    "fall " +
    (Math.random() * 5 + 5) +
    "s linear infinite";

  document.body.appendChild(heart);
}

/* Animation */

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh);
  }
}
`;

document.head.appendChild(style);