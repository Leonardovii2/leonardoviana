function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  let icon = document.querySelector(".icon");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    icon.src = "./assets/image/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    icon.src = "./assets/image/close_white_36dp.svg";
  }

  const mobileLinks = document.querySelectorAll(".mobile-menu .nav-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuMobile.classList.remove("open");
      icon.src = "./assets/image/menu_white_36dp.svg";
    });
  });
}
