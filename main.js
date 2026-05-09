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