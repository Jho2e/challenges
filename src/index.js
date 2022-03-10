// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");

/*
const superEventHandler = {
  handleMouseEnter: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleMouseLeave: function () {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleWindowContextmenu: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[2];
  },
  handleWindowResize: function () {
    h2.innerText = "You just resized!";
    h2.style.color = colors[3];
  }
};
*/

function handleMouseEnter() {
  h2.innerText = "The mouse is here!";
  h2.style.color = colors[0];
}

function handleMouseLeave() {
  h2.innerText = "The mouse is gone!";
  h2.style.color = "blue";
}

function handleWindowContextmenu() {
  h2.innerText = "That was a right click!";
  h2.style.color = "brown";
}

function handleWindowResize() {
  h2.innerText = "You just resized!";
  h2.style.color = "green";
}

h2.addEventListener("mouseenter", handleMouseEnter);
h2.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("contextmenu", handleWindowContextmenu);
window.addEventListener("resize", handleWindowResize);
