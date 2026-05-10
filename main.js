function menu() {
  let menuB = document.getElementById("mobile-menu");
  let navLinks = document.querySelector(".nav-ll");
  let navForm = document.querySelector(".nav-form");

  menuB.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
  });

  navForm.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.body.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}

menu();

function darkLight() {
  let light = document.querySelector(".light-mode");
  let bodyy = document.body;
  light.addEventListener("click", (e) => {
    e.preventDefault();
    bodyy.classList.toggle("active");
    if (bodyy.classList.contains("active")) {
      window.localStorage.setItem("darkMode", "enabled");
    } else {
      window.localStorage.setItem("darkMode", "disabled");
    }
  });
}
darkLight();

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("active");
}
