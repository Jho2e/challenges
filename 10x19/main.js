const Numbers = document.querySelectorAll("._number");
const imgDiv = document.querySelector(".contents-center-image");
const img = document.querySelector("#img");

const menu = document.querySelector(".sidebar-right-menu");

Numbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    img.src = `screenshots/${e.target.textContent.substr(1, 2)}.jfif`;
  });
});

menu.addEventListener("click", () => {
  img.src = "screenshots/image.PNG";
});
