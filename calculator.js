const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const operation = e.target.innerHTML;
    const lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1);

    if (operation === "=") {
      if (!isNaN(lastValue)) {
        inputValue.innerText = eval(inputValue.innerText);
      }
    } else if (operation === "AC") {
      inputValue.innerText = "0";
    } else if (operation === "DEL") {
      inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0";
      }
    } else {
      if (!isNaN(lastValue)) {
        inputValue.innerText += operation;
      }
    }
  });
});

// This calculator app was made by following a tutorial on this link: https://codehuntersharath.medium.com/how-to-create-a-calculator-using-html-css-javascript-simple-calculator-in-javascript-f88c264de03a and the help with Github Copilot (the one inside VS code!).