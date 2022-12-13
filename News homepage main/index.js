const d = document,
  w = window;
const navMenu = d.querySelector(".nav-menu"),
  openMenu = d.getElementById("menu-btn-open"),
  closeMenu = d.getElementById("menu-btn-close"),
  shadowSpace = d.querySelector(".shadow-space");

function hiddenMenu(element) {
  element.classList.add("hidden");
  if (element.classList.contains("hidden") && window.innerWidth <= 900)
    element.classList.add("hidden");
  if (w.innerWidth > 900) navMenu.classList.remove("hidden");
}

w.addEventListener("resize", (e) => {
  hiddenMenu(navMenu);
  hiddenMenu(shadowSpace);
});
w.addEventListener("scroll", (e) => {
  hiddenMenu(navMenu);
  hiddenMenu(shadowSpace);
});

shadowSpace.addEventListener("click", (e) => {
  hiddenMenu(navMenu);
  hiddenMenu(shadowSpace);
});

openMenu.addEventListener("click", (e) => {
  if (window.innerWidth <= 900) {
    navMenu.classList.remove("hidden");
    shadowSpace.classList.remove("hidden");
  }
});

closeMenu.addEventListener("click", (e) => {
  if (window.innerWidth <= 900) {
    navMenu.classList.add("hidden");
    shadowSpace.classList.add("hidden");
  }
});
