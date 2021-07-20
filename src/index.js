import "./style.css";

console.log("a");

// document
//   .querySelectorAll(".nav-item")
//   .forEach((item) => item.addEventListener("click", navItemActive));

// function navItemActive(e) {
//   document
//     .querySelectorAll(".nav-item")
//     .forEach((item) => (item.style.color = "#ffffff"));
//   e.target.style.color = "rgb(255, 127, 80)";
// }

let picsArr = [
  "./images/1.jpeg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.png",
];
let stop = false;
let i = 1;
const shownPic = document.getElementById("pics");
myLoop();
function myLoop() {
  setTimeout(function () {
    shownPic.src = picsArr[i];
    i++;
    if (stop == false) {
      myLoop();
    }
    if (i >= picsArr.length) {
      i = 0;
    }
  }, 1000);
}

const leftarrow = document.getElementById("left-arrow");
const rightarrow = document.getElementById("right-arrow");

function goLeft() {
  stop = true;
  if (i == 0) {
    i = picsArr.length - 1;
  } else {
    i--;
  }
  console.log(i);
  shownPic.src = picsArr[i];
  stop = false;
}

function goRight() {
  stop = true;
  if (i == 3) {
    i = 0;
  } else {
    i++;
  }
  shownPic.src = picsArr[i];
  stop = false;
}

leftarrow.addEventListener("click", goLeft);
rightarrow.addEventListener("click", goRight);
