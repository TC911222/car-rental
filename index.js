const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');

let isOpen = false;

menuIcon.addEventListener('click', () => {
    isOpen = !isOpen
      if (isOpen) {
    // Open menu
    mobileNav.classList.add("open");
    menuIcon.innerHTML = "&times;"; // show X
  } else {
    // Close menu
    mobileNav.classList.remove("open");
    menuIcon.innerHTML = "&#9776;"; // show ≡
  }
})