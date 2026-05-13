function sessionStoregForInputFiled() {
  function debounce(func, delay = 500) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const saveToStorage = debounce((key, value) => {
    sessionStorage.setItem(key, value);
  });
  const inputs = document.querySelectorAll(".input-filed");

  inputs.forEach((input) => {
    const savedValue = sessionStorage.getItem(input.name);
    if (savedValue) {
      input.value = savedValue;
    }

    input.addEventListener("input", (event) => {
      saveToStorage(event.target.name, event.target.value);
    });
  });
}
sessionStoregForInputFiled();

import { darkLight } from "../main.js";

darkLight()