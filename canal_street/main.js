const right1 = document.querySelector(".right1");
const right2 = document.querySelector(".right2");
const right3 = document.querySelector(".right3");

right1.addEventListener("click", () => {
  right1.classList.toggle("active");

  right2.classList.remove("active");
  right3.classList.remove("active");
});

right2.addEventListener("click", () => {
  right2.classList.toggle("active");

  right1.classList.remove("active");
  right3.classList.remove("active");
});
right3.addEventListener("click", () => {
  right3.classList.toggle("active");

  right1.classList.remove("active");
  right2.classList.remove("active");
});
