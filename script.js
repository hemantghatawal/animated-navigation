const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(isAnimatingIn) {
  navItems.forEach((nav, i) => {
    if (isAnimatingIn) {
      nav.classList.add(`slide-in-${i + 1}`);
    } else {
      nav.classList.remove(`slide-in-${i + 1}`);
    }
  });
}
function toggleNav() {
  // Toggle: Menu Bars Open/Close
  menuBars.classList.toggle("change");
  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.remove("overlay-slide-left");
    overlay.classList.add("overlay-slide-right");
    // Animate In - Nav Items
    navAnimation(true);
  } else {
    overlay.classList.remove("overlay-slide-right");
    overlay.classList.add("overlay-slide-left");
    // Animate Out - Nav Items
    navAnimation(false);
  }
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
