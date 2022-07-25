let offset = 560;
const sliderLine = document.querySelector(".main__destinations-slider-line");

document.querySelector(".left-switcher").addEventListener("click", function () {
  offset = 0;
  sliderLine.style.left = -offset + "px";
});

document
  .querySelector(".center-switcher")
  .addEventListener("click", function () {
    offset = 310;
    sliderLine.style.left = -offset + "px";
  });

document
  .querySelector(".right-switcher")
  .addEventListener("click", function () {
    offset = 617;
    sliderLine.style.left = -offset + "px";
  });

const wrapObj = document.querySelector(".slider-switches");
wrapObj.onclick = function (e) {
  if (e.target.tagName === "IMG") {
    for (let i = 0; i < wrapObj.children.length; i++) {
      wrapObj.children[i].classList.remove("active");
    }
    e.target.parentElement.classList.add("active");
  } else {
    return;
  }
};
const admin = document.querySelector(".admin");
const login = document.querySelector(".login__acc");
const body = document.querySelector("body");
admin.onclick = function (e) {
  login.style.display = "block";
  body.style.overflow = "hidden";
};
const closer = document.querySelector(".closer");
closer.onclick = function (e) {
  login.style.display = "none";
  body.style.overflow = "auto";
};
console.log(window.innerWidth)
