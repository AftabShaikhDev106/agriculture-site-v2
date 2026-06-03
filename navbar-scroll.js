document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const desktopMenu = document.querySelector("#main-header ul");
  const mobileIcon = document.querySelector("#main-header .fa-bars");
  const menuLinks = desktopMenu ? desktopMenu.querySelectorAll("a") : [];

  if (header) {
    header.style.transition = "background-color 0.3s ease, box-shadow 0.3s ease";
  }

  if (desktopMenu) {
    desktopMenu.style.transition = "color 0.3s ease";
  }

  if (mobileIcon) mobileIcon.style.transition = "color 0.3s ease";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      if (header) {
        header.classList.add("bg-white", "shadow-md");
      }
      if (desktopMenu) {
        desktopMenu.style.color = "var(--color-new-black)";
      }
      if (mobileIcon) {
        mobileIcon.style.color = "var(--color-new-black)";
      }
    } else {
      if (header) {
        header.classList.remove("bg-white", "shadow-md");
      }
      if (desktopMenu) {
        desktopMenu.style.color = "white";
      }
      if (mobileIcon) {
        mobileIcon.style.color = "white";
      }
    }
  });
});
