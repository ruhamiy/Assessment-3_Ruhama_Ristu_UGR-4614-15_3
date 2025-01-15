const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

function clearDisplay() {
  display.value = "";
}

function appendToDisplay(value) {
  display.value += value;
}
function calculateResult() {
  try {
    const result = eval(display.value || "0");
    if (result === Infinity) {
      display.value = "Undefined";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
    setTimeout(clearDisplay, 1500); 
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    if (btn.id === "clear") {
      clearDisplay();
    } else if (btn.id === "equals") {
      calculateResult();
    } else {
      appendToDisplay(value);
    }
  });
});
