function visibility() {
  let vis = document.querySelector(".right-icon-address-11");
  let inp = document.querySelector(".input-filed-11");
  vis.addEventListener("click", (e) => {
    if (inp.getAttribute("type") === "password") {
      inp.setAttribute("type", "text");
    } else {
      inp.setAttribute("type", "password");
    }
  });
}
visibility();

import { darkLight } from "../main.js";

darkLight()
