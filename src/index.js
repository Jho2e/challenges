const yyyy = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

function handleResize() {
  var width = window.innerWidth;

  if (width <= 200) {
    yyyy.style.backgroundColor = colors[1];
  } else if (width > 200 && width <= 400) {
    yyyy.style.backgroundColor = colors[2];
  } else if (width > 400 && width <= 600) {
    yyyy.style.backgroundColor = colors[3];
  } else if (width > 600 && width <= 800) {
    yyyy.style.backgroundColor = colors[4];
  }
}

window.addEventListener("resize", handleResize);

/* 
const title = document.querySelector("body");
const colors = [
  "#1abc9c",
  "#3498db",
  "#9b59b6",
  "#f39c12",
  "#e74c3c",
  "#C18282",
  "#FF50CF",
  "#0A9696",
];
const RESIZE_CLASS = (title.style.backgroundColor = colors[0]);

function handleResize() {
  var wframe = window.innerWidth;
  console.log(wframe);
  if (wframe <= 200) {
    title.style.backgroundColor = colors[1];
  } else if (wframe > 200 && wframe <= 400) {
    title.style.backgroundColor = colors[2];
  } else if (wframe > 400 && wframe <= 600) {
    title.style.backgroundColor = colors[3];
  } else if (wframe > 600 && wframe <= 800) {
    title.style.backgroundColor = colors[4];
  } else if (wframe > 800 && wframe <= 1000) {
    title.style.backgroundColor = colors[6];
  } else if (wframe > 1000 && wframe <= 1200) {
    title.style.backgroundColor = colors[6];
  } else if (wframe > 1200 && wframe <= 1400) {
    title.style.backgroundColor = colors[7];
  }
}

window.addEventListener("resize", handleResize);
 */
