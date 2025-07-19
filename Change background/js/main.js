const colors = [
  "crimson",
  "deeppink",
  "deepskyblue",
  "gold",
  "lightgrey",
  "pink",
  "orange",
  "mediumturquoise",
  "lemonchiffon",
  "indigo",
];

function setColor(color) {
  document.body.style.backgroundColor = color;
  document.getElementById("current-color").innerHTML = color;

  const currentActiveButton = document.querySelector("button.active");
  if (currentActiveButton) currentActiveButton.classList.remove("active");

  document.querySelector(`[data-color=${color}]`).classList.add("active");
}

colors.forEach((color) => {
  const button = document.createElement("button");
  button.style.backgroundColor = color;
  button.setAttribute("data-color", color);

  button.addEventListener("click", () => {
    setColor(color);
  });

  document.querySelector("div.colors").appendChild(button);
});

document.body.onload = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];

  setColor(color);
};
