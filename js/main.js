const redBtn = document.querySelector(".red");
const blueBtn = document.querySelector(".blue");
const greenBtn = document.querySelector(".green");
const orangeBtn = document.querySelector(".orange");
const violetBtn = document.querySelector(".violet");
const brownBtn = document.querySelector(".brown");
const root = document.documentElement;
const colorCircles = Array.from(
  document.querySelectorAll(".setting__box--grid--item")
);

const changeMainColor = (e) => {
  const color = e.target.getAttribute("color");
  root.style.setProperty("--main-color", color);
};

for (let i = 0; i < colorCircles.length; i++) {
  colorCircles[i].addEventListener("click", changeMainColor);
}

redBtn.addEventListener("click", changeMainColor);

////////////////////////////
//dark mode toggler
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

///////////////////////////////////////////
// Loading spinner
window.addEventListener("load", function () {
  const loader = document.querySelector(".loadingPage");
  loader.className += " hidden";
});
