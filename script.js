let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  // Use addEventListener for click event
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  // Use addEventListener for scroll event
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});
