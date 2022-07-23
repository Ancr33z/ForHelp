let offset = 560;
const sliderLine = document.querySelector(".main__destinations-slider-line");

document.querySelector(".left-switcher").addEventListener("click", function () {
  offset = 0;
  sliderLine.style.left = -offset + "px";
});

document
  .querySelector(".center-switcher")
  .addEventListener("click", function () {
    offset = 560;
    sliderLine.style.left = -offset + "px";
  });

document
  .querySelector(".right-switcher")
  .addEventListener("click", function () {
    offset = 1120;
    sliderLine.style.left = -offset + "px";
  });


const wrapObj = document.querySelector(".slider-switches");
wrapObj.onclick = function (e) {
  console.log(e.target.tagName)
  if (e.target.tagName === 'IMG' ){
  for (let i = 0; i < wrapObj.children.length ; i++) {
    wrapObj.children[i].classList.remove("active");
    
  }
  e.target.parentElement.classList.add("active");
  } else {
    return
  } 

};