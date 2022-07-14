const navbar = document.querySelector(".navbar");

const toggleBtn = document.querySelector(".navbar__toogleBtn");

toggleBtn.addEventListener("click", onchange);

function onchange() {
  toggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
}
