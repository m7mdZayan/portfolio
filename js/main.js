const redBtn = document.querySelector(".red");
const blueBtn = document.querySelector(".blue");
const greenBtn = document.querySelector(".green");
const orangeBtn = document.querySelector(".orange");
const violetBtn = document.querySelector(".violet");
const brownBtn = document.querySelector(".brown");
const root = document.documentElement;

redBtn.addEventListener("click", () => {
  root.style.setProperty("--main-color", "#e65f78");
});
greenBtn.addEventListener("click", () => {
  root.style.setProperty("--main-color", "#31b164");
});
blueBtn.addEventListener("click", () => {
  root.style.setProperty("--main-color", "#5d69f6");
});
orangeBtn.addEventListener("click", () => {
  root.style.setProperty("--main-color", "#f2b31a");
});
violetBtn.addEventListener("click", () => {
  root.style.setProperty("--main-color", "#87ceeb");
});
brownBtn.addEventListener("click", () => {
  root.style.setProperty("--main-color", "#795548");
});

////////////////////////////
//dark mode
var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
