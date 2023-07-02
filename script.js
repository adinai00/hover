const box = document.querySelector("#box");
const boxItem = document.querySelectorAll(".box-item");
const btn = document.querySelector("button");
const btnOff = document.querySelector(".click");

const boxItemSize = 1000;

for (let i = 0; i < boxItemSize; i++) {
  const boxItem = document.createElement("div");
  boxItem.classList.add("box-item");

  boxItem.addEventListener("mouseover", () => {
    setColor(boxItem);
  });

  boxItem.addEventListener("mouseleave", () => {
    setTimeout(() => {
      revomeColor(boxItem);
    }, 500);
  });

  btn.addEventListener("click", () => {
    setColor(boxItem);
  });

  btnOff.addEventListener("click", () => {
    revomeColor(boxItem);
  });

  box.append(boxItem);
}

function getRandomColor() {
  const colorNames = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
  ];

  const randIndex = Math.floor(Math.random() * colorNames.length);

  return colorNames[randIndex];
}

function setColor(el) {
  const randomColor = getRandomColor();

  el.style.background = randomColor;
}

function revomeColor(el) {
  el.style.background = "#212020";
}
