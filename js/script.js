// Toggel Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Menu
document.querySelector("#menu1").onclick = () => {
  navbarNav.classList.toggle("active");
};

// nav
const manu1 = document.querySelector("#menu1");

document.addEventListener("click", function (e) {
  if (!menu1.contains(e.target) && !navbarNav.contains(e.t)) {
    navbarNav.classList.remove("active");
  }
});
