function menu() {
  let menuB = document.getElementById("mobile-menu");
  let navLinks = document.querySelector(".nav-ll");
  let navForm = document.querySelector(".nav-form");

  if (menuB && navLinks && navForm) {
    menuB.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
    });
    document.body.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
    navForm.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
}

menu();

export function darkLight() {
  let light = document.querySelectorAll(".light-mode");
  let bodyy = document.body;
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("active");
  }
  light.forEach((l) => {
    l.addEventListener("click", (e) => {
      e.preventDefault();
      bodyy.classList.toggle("active");
      if (bodyy.classList.contains("active")) {
        window.localStorage.setItem("darkMode", "enabled");
      } else {
        window.localStorage.setItem("darkMode", "disabled");
      }
    });
  });
}
darkLight();
