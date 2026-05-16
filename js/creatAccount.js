function checked() {
  let accountType = "";
  let type = document.querySelectorAll(".grid1");
  type.forEach((card) => {
    card.addEventListener("click", () => {
      type.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      accountType = card.getAttribute("data-type");
      console.log(accountType);
    });
  });
}
checked();
